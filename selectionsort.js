//Selection Sort
function selectionSortFun(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = 
                    [arr[minIndex], arr[i]];
        }
    }
    return arr;
}


const calculateSelectionSortWithCacheFunction = () => {
    const cache = {}; 

    return function(arr) {
        const key = arr.join(',');  

        if (cache[key] !== undefined) {
            return cache[key];
        }
        const result = selectionSortFun(arr);
        cache[key] = result;  
        return result;
    }
};

const calculateSelectionCache = calculateSelectionSortWithCacheFunction();

const selectSort = function() {
    const arr = document.getElementById('selection-input').value; 
    const resultDisplay = document.getElementById('selection-result');

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
        const result = calculateSelectionCache(numbersArray);
        resultDisplay.innerHTML = `<p>Sorted Array: [${result.join(', ')}]</p>`;
    }
};


const selectionButton = document.getElementById('selection-button');
selectionButton.addEventListener('click', selectSort);


const selectionclear = document.getElementById('selection-clear');
selectionclear.addEventListener('click', function() {
    document.getElementById('selection-result').innerHTML = '';
    document.getElementById('selection-input').value = '';
})