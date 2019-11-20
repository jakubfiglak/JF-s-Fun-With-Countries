import axios from 'axios';

const endpoint = 'https://restcountries.eu/rest/v2/all';

// build your app here
export const app = () => {
    axios.get(endpoint)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log(error));
}