// import axios from 'axios';
// import Swiper from 'swiper';

<<<<<<< HEAD
// export const searchCountries = () => {
//     const endpoint = 'https://restcountries.eu/rest/v2/name/';
//     const searchInput = document.querySelector('.search');
//     const countryCards = document.querySelector('.swiper-wrapper');

//     async function getData() {
//         try {
//             if (this.value) {
//                 const countries = [];
//                 const filter = '?fields=name;flag;capital;region;subregion;area;population';
//                 const searchWord = this.value;
//                 const response = await axios.get(`${endpoint}${searchWord}${filter}`);
//                 countries.push(...response.data);
//                 console.log(countries);

//                 const html = countries.map(country => {
//                     return `<div class="country-card swiper-slide">
//                     <div class="country-card-header">
//                       <h2 class="country-name">${country.name}</h2>
//                       <div class="flag">
//                         <img src="${country.flag}" alt="${country.name} flag">
//                       </div>
//                     </div>
//                     <ul class="country-facts">
//                       <li>Capital city: ${country.capital}</li>
//                       <li>Region: ${country.region}</li>
//                       <li>Subregion: ${country.subregion}</li>
//                       <li>Area: ${country.area}</li>
//                       <li>Population: ${country.population}</li>
//                     </ul>
//                   </div>`
//                 }).join('');
//                 console.log(html);
//                 countryCards.innerHTML = html;
//                 const swiper = new Swiper('.swiper-container', {
//                     navigation: {
//                         nextEl: '.swiper-button-next',
//                         prevEl: '.swiper-button-prev',
//                     },
//                 });
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     searchInput.addEventListener('keyup', getData);
=======
export const searchCountries = () => {
  const endpoint = 'https://restcountries.eu/rest/v2/name/';
  const searchInput = document.querySelector('.search');
  const countryCards = document.querySelector('.swiper-wrapper');

  async function getData() {
    try {
      if (this.value) {
        const countries = [];
        const filter = '?fields=name;flag;capital;region;subregion;area;population';
        const searchWord = this.value;
        const response = await axios.get(`${endpoint}${searchWord}${filter}`);
        countries.push(...response.data);

        const html = countries.map(country => {
          return `<div class="country-card swiper-slide">
                    <div class="country-card-header">
                      <h2 class="country-name">${country.name}</h2>
                      <div class="flag">
                        <img src="${country.flag}" alt="${country.name} flag">
                      </div>
                    </div>
                    <ul class="country-facts">
                      <li>Capital city: ${country.capital}</li>
                      <li>Region: ${country.region}</li>
                      <li>Subregion: ${country.subregion}</li>
                      <li>Area: ${country.area}</li>
                      <li>Population: ${country.population}</li>
                    </ul>
                  </div>`
        }).join('');
        console.log(html);
        countryCards.innerHTML = html;
        const swiper = new Swiper('.swiper-container', {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  searchInput.addEventListener('keyup', getData);
>>>>>>> dev

// }

import materialize from 'materialize-css';

export const carousel = () => {
  const elems = document.querySelectorAll('.carousel');
  const instances = M.Carousel.init(elems, options);
}