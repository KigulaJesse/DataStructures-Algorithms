//Using a for loop to find the first n fibonacci numbers.

let prev1 = 0
let prev2 = 1

const fibonacci = []
fibonacci.push(prev1);
fibonacci.push(prev2);
let next_value = null
for(let i=0; i<=18; i++){
    next_value = prev1 + prev2
    fibonacci.push(next_value);
    prev1 = prev2
    prev2 = next_value
}

// console.log(fibonacci);


//Using recursion to find the first n fibonacci numbers.
console.log(0)
console.log(1)
let count = 2;

function fibonacciFunction(prev1:number, prev2:number){
    if (count <= 19){
        let newFibo = prev1 + prev2;
        console.log(newFibo);
        prev1 = prev2
        prev2 = newFibo
        count += 1
        fibonacciFunction(prev1,prev2);
    }

    return
}

fibonacciFunction(0,1);