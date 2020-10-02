const router = require('express').Router()
const cheerio = require('cheerio')
const axios = require('axios')
const Teams = require('./Teams')

require('dotenv').config()

const getPlayerUrl = (name) =>{
        const searchPlayer = name
        const query = searchPlayer.split(' ')
        const searchChar = query[1].slice(0,1)
        const endName = query[1].slice(0,5) + query[0].slice(0,2) + "01.html"
        return "http://www.hockey-reference.com/players/" + searchChar + "/" +endName
}

const getPlayerInfo = (html, $) => {
    var playerInfo = {}

    playerInfo['name'] = $('#meta h1 > span').text()
    playerInfo.position = $('div[itemscope] p > strong')[0].next.data.slice(2,4).trim()
    playerInfo.shoots = $('div[itemscope] p strong')[1].next.data.slice(2).trim()
    playerInfo.weight = $('span[itemprop="weight"]')[0].children[0].data
    playerInfo.height = $('span[itemprop="height"]')[0].children[0].data
    playerInfo.picture = $('#meta div > img')[0].attribs.src
    playerInfo.age = $('span[itemprop="birthDate"] a')[0].children[0].data + "," + $('span[itemprop="birthDate"] a')[1].children[0].data
    // playerInfo.team = $('span[itemprop="affiliation"] a')[0].children[0].data

    return playerInfo
}

const getTeamNum = (team) => {
    const keys = Object.keys(Teams)
    return keys.find((item,index,array)=>{
        return item.toLowerCase() === team.toLowerCase()
    })
}

router.post('/player', async (req,res)=>{
    const {name,playerOption} = req.body

    if(!name){
        res.status(400).json({msg: "Invalid player name"})
    }
    const baseUrl = getPlayerUrl(name.toLowerCase())

    try{
        await axios(baseUrl).then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            let statsTable = $('#stats_basic_plus_nhl tbody tr')
            let statsHeader = $('#stats_basic_plus_nhl thead tr th[scope="col"]')
            var info = getPlayerInfo(html, $)
            var obj = new Object(null)

            if(statsTable.length == 0 || statsHeader.length == 0){
                statsTable.length > 0 ? statsTable : statsTable = $('#stats_basic_nhl tbody tr')
                statsHeader.length > 0 ? statsHeader : statsHeader = $('#stats_basic_nhl thead tr th[scope="col"]')
            }

            for(let i = 0; i < statsHeader.length-1; i++){
                obj[statsHeader[i].attribs['data-stat']] = new Array()
            }
            const keys = Object.keys(obj)

            for(let j = 0; j < statsTable.length; j++){
                if (statsTable[j].children[2].children[0].data === "TOT") continue
                keys.forEach((curr, index) =>{
                    if (index == 2 || index == 3){
                        if(statsTable[j].children[index].children[0].name === 'a'){
                            obj[curr].push(statsTable[j].children[index].children[0].children[0].data)
                        }
                        else{
                            obj[curr].push(statsTable[j].children[index].children[0].data)
                        }
                    }
                    else{
                        if(statsTable[j].children[index].children[0] === undefined){
                            obj[curr].push(0)
                        }
                        else{
                            if(statsTable[j].children[index].children[0].name === "strong"){
                                obj[curr].push(statsTable[j].children[index].children[0].children[0].data)
                            }else{
                                obj[curr].push(statsTable[j].children[index].children[0].data)
                            }
                        }
                    }
                })
            }
                res.json({info, obj})
        }).catch(e => {
             res.status(404).json({msg: "person not found"})
        })
    }catch(e){
        res.status(500).json({msg: e.message})
    }
})

router.post('/team', async (req,res)=>{
    const {season, team} = req.body
    var query = 'https://statsapi.web.nhl.com/api/v1/teams/'

    if(!team){
        res.status(400).json({msg: "no team provided"})
    }

    const team_num = getTeamNum(team)

    if(!team_num){
        res.status(400).json({msg: "invalid team name"})
    }

    if(season){
        query += `${Teams[team_num].num}/stats?season=${season}`
    }
    else{
        query += `${Teams[team_num].num}/stats`
    }

    try{
        await axios(query).then(response=>{
            const {stat,team} =  response.data['stats'][0]['splits'][0]
            const stat_rank = response.data['stats'][1]['splits'][0]['stat']
            res.json({stat,team,stat_rank})
        }).catch(e => {
            res.status(404).json({msg: "Team was not found"})
        })
    }
    catch(e){
        res.status(500).json({msg: e.message})
    }
})

router.post('/schedules', async(req,res)=>{
    const {team, startDate, endDate} = req.body
    var query = 'https://statsapi.web.nhl.com/api/v1/schedule?'

    if((team && startDate && endDate)=== undefined){
        res.status(400).json({msg: "nothing was entered"})
    }

    if (team){
        const value = getTeamNum(team)
        if (!value){
            res.status(404).json({msg: 'Can\'t find that team name in the directory'})
        }
        else{
            query += `teamId=${Teams[value].num}`
        }
    }

    if((startDate && endDate) !== undefined){
        if(team === undefined) query += `startDate=${startDate}&endDate=${endDate}`
        else{
            query += `&startDate=${startDate}&endDate=${endDate}`
        }
    }

    else if((startDate || endDate) !== undefined){
        const date = startDate === undefined ? endDate : startDate

        if(team == undefined) query += `date=${date}`
        else{
            query += `&date=${date}`
        }
    }

    try{
        await axios(query).then(response => {
            res.json(response.data['dates'])
        }).catch(e => {
            res.status(404).json({msg: "There was an issue with your request"})
        })
    }catch(e){
        res.status(500).json({msg: e.message})
    }
})


module.exports = router