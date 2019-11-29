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
    searchCountries
} from './js/searchCountries';
import './styles/main.scss';
import {
    getDataForTest
} from './js/getDataForTest';
import {
    generateTest
} from './js/generateTest';
import {
    displayTest
} from './js/displayTest';

app();
hamburger();
scrollToSection('.startBtn', '.country-search');
scrollToSection('#home', '.welcome');
scrollToSection('#search-info', '.country-search');
scrollToSection('#capital-quiz', '.capital-quiz');
scrollToSection('#flag-quiz', '.flag-quiz');
searchCountries();
// getDataForTest();
// generateTest();
displayTest();