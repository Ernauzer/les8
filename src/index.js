const map = function(array, func) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(func(array[i], i, array));
    }
    return newArray;
};
const array = [1, 8, 27, 64]; // eslint-disable-line

const getCube = num => {
    const cube = 3;
    return num ** cube;
};

map(array, getCube);
