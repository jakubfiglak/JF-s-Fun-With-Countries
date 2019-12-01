export async function checkResults(questions) {
    const checkButton = document.querySelector('.checkBtn');

    try {
        checkButton.addEventListener('click', async () => {
            const resultsContainer = document.querySelector('#result-container');
            const answerContainers = document.querySelectorAll('.answers');
            let numCorrect = 0;

            questions.forEach((currentQuestion, questionNumber) => {
                const answerContainer = answerContainers[questionNumber];
                const selector = `input[name=question${questionNumber}]:checked`;
                const userAnswer = (answerContainer.querySelector(selector) || {}).value;

                if (userAnswer === currentQuestion.capital) {
                    numCorrect++;
                    answerContainers[questionNumber].style.backgroundColor = 'rgba(63,191,63,0.5)';
                } else {
                    answerContainers[questionNumber].style.backgroundColor = 'rgba(255,0,0,0.5)';
                }
            });
            resultsContainer.innerHTML = `Your quiz result is: ${numCorrect} out of ${questions.length}`;
        })
    } catch (error) {
        console.log(error);
    }
}