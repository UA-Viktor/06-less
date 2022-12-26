// Операция spread распыление
// Array.prototype.concat() и аналог через spread


// const numbers = [...[1, 2, 3], 5, 6];
// console.log(numbers);




// Поиск самой маленькой или большой температуры ( числа )

// const temps = [18, 14, 12, 21, 17, 29, 25];

// console.log(Math.max(1, 3 ,17, 6, 8));
// console.log(Math.min(...temps));




// Считывает несколько массмвов в один через concat() и spread


// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);




// Распыление объектов

const a = {x: 1, y: 2};
const b = {x: 0, z: 3};

// const c = Object.assign({}, a, b);

// Посовременному 
const c = {
    ...a,
    ...b,
};

// Все выполняется по очереди
// {
//     x: 0,
//     ...a,
//     y: 20,
//     ...b,
// }


console.log(c);