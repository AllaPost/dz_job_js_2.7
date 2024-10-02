// Задание 1: Найти сумму всех элементов массива

let numbers = [1, 2, 3, 4, 5]; 

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log("Задание 1: ", sumArray(numbers)); 

// Задание 2: Найти максимальный элемент массива

let number = [3, 1, 4, 1, 5, 9]; 

function findMax(arr) {
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log("Задание 2: ", findMax(number)); 

// Задание 3: Фильтрация массива по условию

let values = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

function filterArray(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

console.log("Задание 3: ", filterArray(values)); 

// Задание 4: Реализация метода массива "map" через цикл

let arrayOfNumbers = [1, 2, 3, 4, 5]; 

function multiplyByTwo(num) {
    return num * 2;
}

function mapArray(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

console.log("Задание 4: ", mapArray(arrayOfNumbers, multiplyByTwo)); 

// Задание 5: Реализация метода массива "forEach" через цикл

let OffNumbers = [1, 2, 3, 4, 5]; 

function printElement(element) {
    console.log(element);
}

function forEachArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]); 
    }
}

console.log ("Задание 5: ")
forEachArray( OffNumbers, printElement); 

// Задание 6: Развернуть массив

let numbers0 = [1, 2, 3, 4, 5]; 

function reverseArray(arr) {
    let reversed = []; 
    for (let i = arr.length - 1; i >= 0; i--) { 
        reversed.push(arr[i]); 
    }
    return reversed; 
}

console.log("Задание 6: ", reverseArray(numbers0)); 