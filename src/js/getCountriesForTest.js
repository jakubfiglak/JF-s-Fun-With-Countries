export const getCountriesForTest = (sourceArray, neededElements) => {
    const countriesForTest = [];
    for (let i = 0; i < neededElements; i++) {
        let idx = Math.floor(Math.random() * sourceArray.length);
        countriesForTest.push(sourceArray[idx]);
        sourceArray.splice(idx, 1);
    }
    return countriesForTest;
}