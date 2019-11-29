import {
    generateTest
} from "./generateTest";

export async function displayTest() {
    try {
        const questions = await generateTest();
        console.log(questions);

        const quizContainer = document.querySelector('#capital-quiz-container');

        const output = [];

        questions.forEach((currentQuestion, questionNumber) => {
            const answers = [];

            currentQuestion.answers.forEach((el, idx) => {
                answers.push(
                    `<div><input type="radio" name="question${questionNumber}" value="${idx}">
                    <label>
                    ${currentQuestion.answers[idx]}
                    </label>
                    </div>
                    `
                );
            });
            output.push(
                `
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>
                `
            )
        });

        quizContainer.innerHTML = output.join('');
    } catch (error) {
        console.log(error);
    }
}