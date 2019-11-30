import {
    generateTest
} from "./generateTest";
import {
    displayTestOnClick
} from "./displayTestOnClick";
import {
    checkResults
} from "./checkTestResults";
import {
    displayTest
} from './displayTest';

export async function runTest() {
    const button = document.querySelector('.createBtn');


    try {
        button.addEventListener('click', async () => {
            const questions = await generateTest();
            console.log(questions);
            await displayTest(questions);
            await checkResults(questions);
        })
    } catch (error) {
        console.log(error);
    }
}