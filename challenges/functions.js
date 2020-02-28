
// Callbacks

// Step 1: Create a higher-order function that will accept 3 parameters. The first two can take any argument. The last is your callback. This function should return your callback that passed the first two parameters as its argument.

/* Step 2: Create several functions that you will callback with the previous higher order function.
The first will return the sum of two numbers.
The second will return the product of two numbers.
The third will return the modulus of the two numbers.
The fourth will return the quotient of the two numbers.
The fifth will return the square root of the two numbers.
The sixth will accept a first and last name and return 'Hey, firstName lastName, youre a wicked cool dev'.
The seventh will return whether the firstString is included the secondString. ????
The eigth will return whether the firstNumber is greater than the secondNumber.
The ninth will return whether the firstNumber is less than the secondNumber.
The tenth will return whether the firstNumber is greater than or equal to the secondNumber.
The eleventh will return whether the firstNumber is less than or equal to the secondNumber.
The twelvth will return whether the firstNumber is equivalent to the secondNumber.
The thirteenth will return a string 'Hey the number is firstNumber' if firstNumber is greater than the secondNumber. If it isn't, return a string 'Hey the number is secondNumber'
*/

// Step 3: Check your work using console.log and invoke your higher order function.
function one(num1, num2){
    return num1 + num2;
}
console.log(one(1,2));

function two(num1, num2){
    return num1 * num2;
}
console.log(two(1,2));

function three(num1, num2){
    return num1 % num2;
}
console.log(three(10, 2));

function four(num1, num2){
    return quotient = num1 / num2;
}
console.log(four(4,2));

function five(num1, num2){
    total = num1 + num2;
    return Math.sqrt(total);
}
console.log(five(2,2));

function six(firstName, lastName){
    return `Hey, ${firstName} ${lastName}, youre a wicked cool dev.`;
}
console.log(six('Rachele','Edwards'));

function seven(string1, string2){
    if(string1.includes(string2)){
        return true;
    }
}
console.log(one('Hello my name is ', 'rachele'));

function eight(num1, num2){
    if(num1>num2){
        return true;
    }else{
        return false;
    }
}
console.log(eight(1,2));

function nine(num1, num2){
    if(num1<num2){
        return true;
    }else{
        return false;
    }
}
console.log(nine(1,2));

function ten(num1, num2){
    if(num1>=num2){
        return true;
    }else{
        return false;
    }
}
console.log(ten(1,2));

function eleven(num1, num2){
    if(num1<=num2){
        return true;
    }else{
        return false;
    }
}
console.log(eleven(1,2));

function twelve(num1, num2){
    if(num1===num2){
        return true;
    }else{
      return false;
    }
}
console.log(twelve(1,2));

function thirteen(num1, num2){
    if(num1>num2){
        return `Hey the number is ${num1}`;
    }else{
        return `Hey the number is ${num2}`;
    }
}
console.log(thirteen(1,2));
