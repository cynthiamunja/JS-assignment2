function sumOfNumbers(input) {
    if (input === "") {
        return 0;
    }

    
    const numbers = input.split(",");

   
    let sum = 0;

    
    for (let i = 0; i < numbers.length; i++) {
        
        sum += parseFloat(numbers[i]) || 0;
    }

    return sum;
}


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter comma-separated numbers: ", function(input) {
    console.log("Sum:", sumOfNumbers(input));
    rl.close();
});
