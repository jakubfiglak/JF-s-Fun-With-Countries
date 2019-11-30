import {
    getDataForTest
} from "./getDataForTest"
import {
    getCountriesForTest
} from "./getCountriesForTest";
import {
    generateQandA
} from "./generateQaA";

// export const q = [];

export async function generateTest() {
    try {
        const countries = await getDataForTest();
        const capitalCities = countries.map(el => el.capital);
        // console.log(capitalCities);
        const countriesForTest = getCountriesForTest(countries, 10);
        // console.log(countriesForTest);
        generateQandA(countriesForTest, capitalCities);
        // q.push(...countriesForTest);
        return countriesForTest;
    } catch (error) {
        console.log(error);
    };
}