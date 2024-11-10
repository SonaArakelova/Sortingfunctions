
// Bubble Sort function
function bubbleSortFun(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];  // Swap
            }
        }
    }
    return arr;
}


const calculateWithCacheFunction = () => {
    const cache = {}; 

    return function(arr) {
        const key = arr.join(',');  

        if (cache[key] !== undefined) {
            return cache[key];
        }
        const result = bubbleSortFun(arr);
        cache[key] = result;  
        return result;
    }
};

const calculateCache = calculateWithCacheFunction()

const bubbleSort = function() {
    const arr = document.getElementById('number-input').value; 
    const resultDisplay = document.getElementById('result-display');

    const inputArray = arr.split(' ').map(item => item.trim()).filter(item => item !== '');

   
    if (arr.indexOf(' ') === -1) {
        resultDisplay.innerHTML = `<p style="color: red;">Error: Please enter numbers separated by spaces.</p>`;
        return; 
    }

    const numbersArray = inputArray.map(item => {const num = parseFloat(item);
        return isNaN(num) ? null : num;  
    });

    if (numbersArray.includes(null)) {
        resultDisplay.innerHTML = `<p style="color: red;">Error: Please enter a valid list of numbers, separated by spaces.</p>`;
    } else {
        const result = calculateCache(numbersArray);
        resultDisplay.innerHTML = `<p>Sorted Array: [${result.join(', ')}]</p>`;
    }
};


const button = document.getElementById('bubble-button');
button.addEventListener('click', bubbleSort);

const clear = document.getElementById('clear');
clear.addEventListener('click', function() {
    document.getElementById('result-display').innerHTML = '';
    document.getElementById('number-input').value = '';
})









