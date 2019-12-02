import axios from 'axios';

export const searchCountries = () => {
  const endpoint = 'https://restcountries.eu/rest/v2/name/';
  const select = document.getElementById('country');
  const card = document.getElementById('card');

  async function getData() {
    try {
      if (this.value) {
        const countries = [];
        const filter = '?fields=name;flag;capital;region;subregion;area;population';
        const searchWord = this.value;
        const response = await axios.get(`${endpoint}${searchWord}${filter}`);
        countries.push(...response.data);

        const html = countries.map(country => {
          return `<div class="card text-center carousel-item active bg-primary">
          <div class="card-body">
            <h3 class="card-title text-white">${country.name}</h3>
            <ul class="list-group mr-5 ml-5">
              <li class="list-group-item">
                <div class="flag mx-auto"><img src="${country.flag}" alt="${country.flag} flag"
                    class="img-fluid img-thumbnail d-block">
                </div>
              </li>
              <li class="list-group-item"><span class="font-weight-bold">Capital city: </span>${country.capital}</li>
              <li class="list-group-item"><span class="font-weight-bold">Region: </span>${country.region}</li>
              <li class="list-group-item"><span class="font-weight-bold">Subregion: </span>${country.subregion}</li>
              <li class="list-group-item"><span class="font-weight-bold">Area: </span>${country.area} km<sup>2</sup></li>
              <li class="list-group-item"><span class="font-weight-bold">Population: </span>${country.population}</li>
            </ul>
          </div>
        </div>`
        }).join('');
        console.log(html);
        card.innerHTML = html;
      }
    } catch (error) {
      console.error(error);
    }
  };

  select.addEventListener('change', getData);

}