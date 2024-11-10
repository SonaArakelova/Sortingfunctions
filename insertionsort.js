function insertionSortFun(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}


const calculateInsertionSortWithCacheFunction = () => {
    const cache = {}; 

    return function(arr) {
        const key = arr.join(',');  

        if (cache[key] !== undefined) {
            return cache[key];
        }
        const result = insertionSortFun(arr);
        cache[key] = result;  
        return result;
    }
};

const  calculateInsertionCache = calculateInsertionSortWithCacheFunction();

const insertionSort = function() {
    const arr = document.getElementById('insertion-input').value; 
    const resultDisplay = document.getElementById('insertion-result');

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
        const result =  calculateInsertionCache(numbersArray);
        resultDisplay.innerHTML = `<p>Sorted Array: [${result.join(', ')}]</p>`;
    }
};


const insertionButton = document.getElementById('insertion-button');
insertionButton.addEventListener('click', insertionSort);


const insertionclear = document.getElementById('insertion-clear');
insertionclear.addEventListener('click', function() {
    document.getElementById('result-display').innerHTML = '';
    document.getElementById('number-input').value = '';
})