/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let loveTriangles = 0;
    for (let i = 0; i < preferences.length; i++) {
        let firstIndex = i;
        let firstNumber = preferences[i];
        let secondIndex = preferences[firstIndex] - 1;
        let secondNumber = preferences[secondIndex];
        let thirdIndex = secondNumber - 1;
        let thirdNumber = preferences[thirdIndex];
        let lastIndex = thirdNumber - 1;
        if (firstIndex === secondIndex || secondIndex === thirdIndex || thirdIndex === firstIndex) {
            continue;
        }
        if (firstNumber === preferences[lastIndex] && firstIndex === lastIndex) {
            loveTriangles++;
        }

    }
    return loveTriangles / 3;
};
