import {
    app
} from './js/app';
import {
    hamburger
} from './js/hamburger';
import {
    scrollToSection
} from './js/scroll';
import {
    searchCountries,
    carousel
} from './js/searchCountries';
import './styles/main.scss';
import {
    map
} from './js/map';

app();
hamburger();
scrollToSection('.startBtn', '.country-search');
scrollToSection('.search-info', '.country-search');
carousel();