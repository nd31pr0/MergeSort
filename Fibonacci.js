// Method 1 of fibonacci solution (iteration method)

function fibs(n){
    let fibArr = [];
    for(let i = 0; i < n; i++){
        if (i===0 || i===1){
            fibArr.push(i);
        }
        else{
            let result = fibArr[i-1] + fibArr[i-2];
            fibArr.push(result);
        }
    }
    console.log(fibArr);
}
fibs(8);




function fibsRec(n) {
    // Base case: return an empty array for n <= 0
    if (n <= 0) return [];
    // Base case: return [0] for n = 1
    if (n === 1) return [0];
    // Base case: return [0, 1] for n = 2
    if (n === 2) return [0, 1];
  
    // Recursive case: get the Fibonacci sequence for n - 1
    const fib = fibsRec(n - 1);
    // Add the next Fibonacci number
    const nextFib = fib[fib.length - 1] + fib[fib.length - 2];
    fib.push(nextFib);
  
    return fib;
  }
  
  console.log(fibsRec(8))
