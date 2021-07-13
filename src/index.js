module.exports = function towelSort(matrix) {
    let array = [];
    if (towelSort.arguments.length == 0) {
        return array;
    }
    matrix.forEach((element) => {
        array.push(element);
    });
    for (let i = 1; i < array.length; i++) {
        if (i % 2 !== 0) {
            let reverseArray = array[i].reverse();
            array.splice(i, 1, reverseArray);
        }
    }
    let resultArray = array.flat();
    return resultArray;
};
