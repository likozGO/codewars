function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}
/*Первый вариант*/
function sumOfPrimeDistance(arr) {
    let simpleNumbers = 0;
    for (let i = 0; i <= arr.length; i++) {
        // if (arr[i] < 1 || i == arr.length) return false;
        if (arr[i + 1] != undefined) {
            // console.log(arr[i] + ' ' + arr[i + 1]);
            for(let count = 1; count <= arr.length; count++) {
                for(let j = arr[i]; j <= arr[i + count]; j++) {
                    if(isPrime(j)) simpleNumbers++
                }
            }
        }
    }
    return simpleNumbers;
}

/*Второй вариант*/

sumOfPrimeDistance([4,6,12,14,16,20])