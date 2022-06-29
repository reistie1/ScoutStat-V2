import Axios from 'axios';

let url = 'https://statsapi.web.nhl.com';

const dataService = {
    async fetchTeamsAsync(cb)
    {
        Axios.get(url + "/api/v1/teams")
        .then(response => {
            cb(response.data.teams);
            console.log(response);
        })
        .catch(e => {
            console.log(e);
        });
    },
    async fetchTeamAsync(cb, id)
    {
        Axios.get(url + "/api/v1/teams/" + id + "?expand=team.roster")
        .then(response => {
            cb(response.data.teams[0].roster.roster);
            console.log(response.data.teams[0].roster.roster);
        })
        .catch(e => {
            console.log(e);
        });
    },
    async fetchPlayerDataAsync(cb, id, year)
    {
        var data = []
        console.log(url + "/api/v1/people/"+ id +"/stats?stats=statsSingleSeason&season=" + year + (parseInt(year)+1))
        for(var currentYear = year.toString().slice(0,4); currentYear <= new Date().getFullYear(); currentYear++)
        {
            Axios.get(url + "/api/v1/people/"+ id +"/stats?stats=statsSingleSeason&season=" + currentYear + (parseInt(currentYear)+1))
            .then(response => {
                if(response.data.stats[0].splits[0]?.stat !== undefined)
                {
                    data.concat(response.data.stats[0].splits[0]?.stat)
                    console.log(response.data.stats[0].splits[0]?.stat)
                }
                
                // if(response.data.splits[0].length > 0)
                // {
                //     console.log(response.data.splits[0].stats)
                // }                
            })
            .catch(e => {
                console.log(e);
            });
        }
        
    },
    async fetchScheduleDataAsync()
    {

    }
}

export default dataService;