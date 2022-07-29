// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }

    let arr = [];

    matrix.map((_, index) => {
        index % 2 === 0
            ? arr.push(...matrix[index])
            : arr.push(...matrix[index].reverse());
    });
    return arr;
};
