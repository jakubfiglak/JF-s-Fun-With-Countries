export const getCountriesForTest = (randomArr, targetArr) => {
    const countriesForTest = [];
    for (let i = 0; i < randomArr.length; i++) {
        countriesForTest.push(targetArr[randomArr[i]]);
    };
    return countriesForTest;
}