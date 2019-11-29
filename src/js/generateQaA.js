export const generateQandA = (sourceArray, answersArray) => {
    return sourceArray.forEach(el => {
        el.question = `What is the capital city of ${el.name}?`;
        el.answers = [el.capital];
        for (let i = 0; i < 3; i++) {
            let idx = Math.floor(Math.random() * answersArray.length);
            el.answers.push(answersArray[idx]);
        };
        el.answers.sort();
    });
}