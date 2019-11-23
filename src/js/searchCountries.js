import axios from 'axios';

export const searchCountries = () => {
    const endpoint = 'https://restcountries.eu/rest/v2/name/';
    const searchInput = document.querySelector('.search');

    function getData() {
        if (this.value) {
            const countries = [];
            const searchWord = this.value;
            axios.get(`${endpoint}${searchWord}`)
                .then(response => countries.push(...response.data))
                .catch(error => console.log(error));

            console.log(countries);
            // return countries;

            // const countriesData = countries.map(country => country.name);
            // console.log(countriesData);
            console.log(countries[0]);
        }
    };

    // function displayData() {
    //     const countries = getData();

    // }

    searchInput.addEventListener('keyup', getData);

}