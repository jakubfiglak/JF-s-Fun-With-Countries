import {
    generateTest
} from "./generateTest";

export async function displayTest(questions) {
    try {
        // const questions = await generateTest();
        // console.log(questions);

        const quizContainer = document.querySelector('#capital-quiz-container');
        const checkBtn = document.querySelector('.checkBtn');

        const output = [];

        questions.forEach((currentQuestion, questionNumber) => {
            const answers = [];

            currentQuestion.answers.forEach((el, idx) => {
                answers.push(
                    `<label>
                    <input type="radio" class="with-gap" name="question${questionNumber}" value="${currentQuestion.answers[idx]}">
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

        quizContainer.innerHTML = output.join('');
        checkBtn.style.display = 'block';

    } catch (error) {
        console.log(error);
    }
}