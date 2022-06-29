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
        Axios.get(url + "/api/v1/people/"+ id +"/stats?stats=homeAndAway&season=" + year)
        .then(response => {
           
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    },
    async fetchScheduleDataAsync()
    {

    }
}

export default dataService;