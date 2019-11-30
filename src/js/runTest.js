import {
    generateTest
} from "./generateTest";
import {
    displayTestOnClick
} from "./displayTestOnClick";
import {
    checkResults
} from "./checkTestResults";

export async function runTest() {
    try {
        const questions = await generateTest();
        console.log(questions);
        await displayTestOnClick(questions);

        const button = document.querySelector('.checkBtn');
        button.addEventListener('click', checkResults);
    } catch (error) {
        console.log(error);
    }
}