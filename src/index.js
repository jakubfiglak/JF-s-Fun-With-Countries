import {
    app
} from './js/app';
import {
    hamburger
} from './js/hamburger';
import {
<<<<<<< HEAD
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
=======
    searchCountries
} from './js/searchCountries';
import './styles/main.scss';
import {
    displayTestOnClick
} from './js/displayTestOnClick';
import {
    checkResults
} from './js/checkTestResults';
import {
    runTest
} from './js/runTest';
import {
    generateTest
} from './js/generateTest';

app();
hamburger();
searchCountries();
generateTest();
// runTest();
displayTestOnClick();
// checkResults();
>>>>>>> dev
