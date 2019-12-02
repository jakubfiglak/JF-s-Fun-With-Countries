import {
    getDataForTest
} from "./getDataForTest"
import {
    getCountriesForTest
} from "./getCountriesForTest";
import {
    generateQandA
} from "./generateQaA";

export async function generateTest() {
    try {
        const countries = await getDataForTest();
        const capitalCities = countries.map(el => el.capital);
        const countriesForTest = getCountriesForTest(countries, 10);
        generateQandA(countriesForTest, capitalCities);
        return countriesForTest;
    } catch (error) {
        console.log(error);
    };
}