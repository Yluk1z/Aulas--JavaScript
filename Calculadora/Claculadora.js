const calculate = (numberOne, numberTwo, operation) => {

    let result
    switch(operation){
        
        case "+":
            result = numberOne + numberTwo
            break;
        
        case "-":
            result = numberOne - numberTwo
            break;

        case "*":
            result = numberOne * numberTwo
            break;

        case "/":
            result = numberOne / numberTwo
            break;

        default: 
            return "Invalid operator"
    
    }

  return result
}

console.log(calculate(2,5,"+"))
console.log(calculate(2,5,"-"))
console.log(calculate(2,5,"*"))
console.log(calculate(2,5,"/"))
console.log(calculate(2,5,"y"))