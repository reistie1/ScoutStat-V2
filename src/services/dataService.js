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
            // cb(response.data.teams);
            console.log(response);
        })
        .catch(e => {
            console.log(e);
        });
    },
    async fetchPlayerAsync()
    {

    },
    async fetchScheduleDataAsync()
    {

    }
}

export default dataService;