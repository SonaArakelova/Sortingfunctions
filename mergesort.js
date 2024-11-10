// Merge Sort function
function mergeSortFun(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSortFun(left), mergeSortFun(right));
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}


const calculateMergeSortWithCacheFunction = () => {
    const cache = {}; 

    return function(arr) {
        const key = arr.join(',');  

        if (cache[key] !== undefined) {
            return cache[key];
        }
        const result = mergeSortFun(arr);
        cache[key] = result;  
        return result;
    }
};

const calculateMergeCache = calculateMergeSortWithCacheFunction();


const mergeSort = function() {
    const arr = document.getElementById('merge-input').value; 
    const resultDisplay = document.getElementById('merge-result');

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
        const result = calculateMergeCache(numbersArray);
        resultDisplay.innerHTML = `<p>Sorted Array: [${result.join(', ')}]</p>`;
    }
};

const mergeButton = document.getElementById('merge-button');
mergeButton.addEventListener('click', mergeSort);

const mergeclear = document.getElementById('merge-clear');
mergeclear.addEventListener('click', function() {
    document.getElementById('result-display').innerHTML = '';
    document.getElementById('number-input').value = '';
})