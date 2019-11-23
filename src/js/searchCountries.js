import axios from 'axios';

export const searchCountries = () => {
    const endpoint = 'https://restcountries.eu/rest/v2/name/';
    const searchInput = document.querySelector('.search');

    async function getData() {
        try {
            if (this.value) {
                const countries = [];
                const filter = '?fields=name;flag;capital;region;area;population';
                const searchWord = this.value;
                const response = await axios.get(`${endpoint}${searchWord}${filter}`);
                // console.log(response);
                countries.push(...response.data);
                console.log(countries);
                console.log(countries[0].name);
            }
        } catch (error) {
            console.error(error);
        }
    };
    searchInput.addEventListener('keyup', getData);

}