import axios from 'axios';

export function redirectPerRegion(region, url) {
    // const query = 'http://ip-api.com/json';
    const query = 'https://api.ipgeolocation.io/ipgeo?apiKey=f8b36e7c1c5e42b28c22163532b467cf';

    axios.get(query)
        .then(res => {
            if(res.status === 200) {
                region.forEach(reg => {
                    if(reg === res.data.state_prov || reg === res.data.city || reg === res.data.country_name || reg === res.data.country_code2 || reg === res.data.country_code3) {
                        window.location.href = url;
                    }
                })
            }
        })
        .catch(error => {
            return 'error';
        })
}