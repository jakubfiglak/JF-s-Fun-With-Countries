// import axios from 'axios';
import Swiper from 'swiper';
import forms from 'materialize-css';


// build your app here
export const app = () => {
    // axios.get(endpoint)
    //     .then(response => {
    //         console.log(response.data);
    //     })
    //     .catch(error => console.log(error));

    const swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}