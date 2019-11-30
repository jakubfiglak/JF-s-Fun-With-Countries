import {
    displayTest
} from "./displayTest";

export async function displayTestOnClick(questions) {
    const button = document.querySelector('.createBtn');
    try {
        button.addEventListener('click', async () => {
            await displayTest(questions);
        });
    } catch (error) {
        console.log(error);
    }
}