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
                    `<label>
                    <input type="radio" class="with-gap" name="question${questionNumber}" value="${idx}">
                    <span>
                    ${currentQuestion.answers[idx]}
                    </span>
                    </label>
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
        output.push(`
        <button class="checkBtn">Check your answers!</button>
        `);
        quizContainer.innerHTML = output.join('');
    } catch (error) {
        console.log(error);
    }
}