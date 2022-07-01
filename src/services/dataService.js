import Axios from 'axios';

let url = 'https://statsapi.web.nhl.com';
var data = [];

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
    async fetchPlayerInfoAsync(cb, id)
    {
        Axios.get(url + "/api/v1/people/" + id)
        .then(response => {
            cb(response.data.people[0]);
            console.log(response.data.people[0]);
        })
        .catch(e => {
            console.log(e);
        });
    },
    async fetchPlayerDataAsync(cb, id, year)
    {
        
        for(var currentYear = year.toString().slice(0,4); currentYear <= new Date().getFullYear(); currentYear++)
        {
            Axios.get(url + "/api/v1/people/"+ id +"/stats?stats=statsSingleSeason&season=" + currentYear + (parseInt(currentYear)+1))
            .then(response => {
                if(response.data.stats[0].splits[0]?.stat !== undefined)
                {
                    formatPlayerData({season: response.data.stats[0].splits[0]?.season, data: response.data.stats[0].splits[0]?.stat})
                    
                }
                
            })
            .catch(e => {
                console.log(e);
            });
        }
        console.log(data);
        
    },
    async fetchScheduleDataAsync()
    {

    }
}

const formatPlayerData = (input_data) => {
    console.log(input_data, data);
    data.concat(input_data);
    console.log(input_data, data);

}

export default dataService;