

function getFizzBuzz(num, numWordPair){
    let output = "";
    for(var i = 0; i < numWordPair.length; i++){
        if(num % numWordPair[i][0] === 0){ // Divisible
            output += numWordPair[i][1];
        }
    }
    
    // In case there is no number that match
    if (output === ""){
        return num.toString();
    } else {
        return output;
    }

}

// Buttons
let resetButton = document.getElementById("reset-btn");
let plusOneButton = document.getElementById("plus-one-btn");
let plusTenButton = document.getElementById("plus-ten-btn");
let plusHundredButton = document.getElementById("plus-hundred-btn");
let plusThousandButton = document.getElementById("plus-thousand-btn");

// The counter and output
let counterEl = document.getElementById("counter-el");
let outputEl = document.getElementById("fizzbuzz-output-el");
let numberWordPairEl = document.getElementById("number-word-pair-el");

const numberWordPair = [
    [3,"Fizz"],
    [5,"Buzz"],
    [7,"Rush"],
    [11,"Wizz"],
    [13,"Muzz"]
];

let count = 0;

// Initializd function

numberWordPairEl.textContent = numberWordPair.toString()
update()

function update(){
    counterEl.textContent = "Counter: " + count;
    outputEl.textContent = "Output: " + getFizzBuzz(count, numberWordPair);
}

function reset(){
    count = 0;
    update()
}

function plusOne(){
    count += 1
    update()
}

function plusTen(){
    count += 10
    update()
}

function plusHundred(){
    count += 100
    update()
}

function plusThousand(){
    count += 1000
    update()
}