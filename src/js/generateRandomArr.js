export const generateRandomArr = (min, max, length) => {
    const randomArr = [];
    for (let i = 0; i < length; i++) {
        min = Math.ceil(min);
        max = Math.floor(max);
        randomArr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    };
    return randomArr;
}