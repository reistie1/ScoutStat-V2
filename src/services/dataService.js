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
    async fetchTeamStatsByYearAsync(cb, year, id)
    {
        Axios.get(url + `/api/v1/teams/${id}/stats?season=${year}`)
        .then(response => {
            cb(response.data.stats[0].splits[0].stat, response.data.stats[1].splits[0].stat, response.data.stats[0].splits[0].team.name);
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
        })
        .catch(e => {
            console.log(e);
        });
    },
    async fetchPlayerDataAsync(cb, id, requestFilters)
    {
        var playerData = []
        for(var currentYear = requestFilters.startYear; currentYear <= requestFilters.endYear; currentYear++)
        {
            var stats = await Axios.get(url + "/api/v1/people/"+ id +"/stats?stats=statsSingleSeason&season=" + currentYear + (parseInt(currentYear)+1))
            .then(response => {
                if(response.data.stats[0].splits[0]?.stat !== undefined)
                {
                   return {season: response.data.stats[0].splits[0]?.season, data: response.data.stats[0].splits[0]?.stat}
                }
            })
            .catch(e => {
                console.log(e);
            });

            playerData.push(stats);
        }
        cb(playerData);        
    },
    async fetchScheduleDataAsync(cb, dateRange)
    {
        await Axios.get(url + `/api/v1/schedule?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`)
        .then(response => {
            cb(response.data.dates);
        })
        .catch(e => {
            console.log(e);
        })
    }
}


export default dataService;