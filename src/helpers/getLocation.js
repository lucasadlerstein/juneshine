import axios from 'axios';

export function redirectPerRegion(region, url) {
    const query = 'http://ip-api.com/json';

    axios.get(query)
        .then(res => {
            if(res.status === 200) {
                if(res.data.status === 'success') {
                    region.forEach(reg => {
                        if(reg === res.data.region) {
                            window.location.href = url;
                        }
                    })
                } else {
                    return 'error';
                }
            }
        })
        .catch(error => {
            return 'error';
        })
}