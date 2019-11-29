import axios from 'axios';

export async function getDataForTest() {
    const endpoint = 'https://restcountries.eu/rest/v2/';
    try {
        const countries = [];
        const filter = '?fields=name;flag;capital';
        const response = await axios.get(`${endpoint}${filter}`);
        countries.push(...response.data);
        return countries;
    } catch (error) {
        console.log(error);
    }
}