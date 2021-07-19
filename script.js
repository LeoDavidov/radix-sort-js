'use strict';
// ----- Helpers -----
// Get number's digit by it's index. Index counting starts from the end of num (not as on strings) from 0
function getDigitByIdx(number, idxFromEnd) {
    number = Math.abs(number)
    const modResult = number % 10 ** (idxFromEnd + 1);
    return Math.floor(modResult / (10 ** idxFromEnd))
}

// Count number's digits
function digitCount(number) {
    if (number === 0) return 1;
    return Math.floor(Math.log10(Math.abs(number))) + 1;
}

// returns the max digits of all array numbers
function maxDigits(arrOfNumbers) {
    let maxDigitsOfNum = 0;
    for (let i = 0; i < arrOfNumbers.length; i++) {
        maxDigitsOfNum = Math.max(maxDigitsOfNum, digitCount(arrOfNumbers[i]));
    }
    return maxDigitsOfNum;
}

// ----- main function -----
function radixSort(arrOfNumbers) {
    const maxDigitsInArr = maxDigits(arrOfNumbers);

    // looping from 0 to the max length of all Numbers in array
    for (let k = 0; k < maxDigitsInArr; k++) {

        // digitBucket contains arrays for each digit from 0 to 9
        const digitBucket = Array.from({
            length: 10
        }, () => []);

        // Filling our number buckets
        for (const number of arrOfNumbers) {
            const idxKDigit = getDigitByIdx(number, k)
            digitBucket[idxKDigit].push(number)
        }

        // clearing the initial array to fill it with a new order
        arrOfNumbers = [];

        //filling it
        // go through every bucket
        for (let i = 0; i < digitBucket.length; i++) {
            //go through every element of a bucket
            for (const number of digitBucket[i]) {
                arrOfNumbers.push(number);
            }
        }
    }

    return arrOfNumbers;
}

// test
console.log(radixSort([1, 65, 1, 2, 87, 4514, 125, 74, 69, 4, 7, 5484, 29]));