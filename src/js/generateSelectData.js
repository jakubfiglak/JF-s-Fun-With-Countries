import axios from 'axios';

export const generateSelectData = async () => {
    const endpoint = 'https://restcountries.eu/rest/v2/';
    const filter = '?fields=name';
    const countries = [];
    const select = document.getElementById('country');
    try {
        const response = await axios.get(`${endpoint}${filter}`);
        countries.push(...response.data);
        const html = countries.map(country => `<option>${country.name}</option>`).join('');
        select.innerHTML = html;
    } catch (error) {
        console.log(error);
    }
}