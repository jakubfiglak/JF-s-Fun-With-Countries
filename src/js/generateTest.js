import {
    getDataForTest
} from "./getDataForTest"
import {
    generateRandomArr
} from "./generateRandomArr";
import {
    getCountriesForTest
} from "./getCountriesForTest";

export async function generateTest() {
    try {
        const countries = await getDataForTest();
        const indexArr = generateRandomArr(0, countries.length, 10);
        console.log(indexArr);
        const countriesForTest = getCountriesForTest(indexArr, countries);
        console.log(countriesForTest);
    } catch (error) {
        console.log(error);
    };
}