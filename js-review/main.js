// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let food = "blah"
food = 'pho'
alert(food);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let word = "Hello";
alert (word.charAt(1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function multiThree(n1, n2, n3){
    let product = ((n1 / n2) * n3);
    alert(product);
}
    multiThree();

//test with multiThree(10, 5, 3)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function getCubeRoot(num){
     
    console.log(Math.cbrt(num));
}
    getCubeRoot(27);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function checkMonth(month){
    let m = month.toLowerCase();
    if(m === 'june' || m === 'july' || m === 'august'){
        alert('YAY')
    }else if(m === 'january' || m === 'february' || m === 'march' || m === 'april' || m === 'may' || m === 'september' || m === 'october' || m === 'november' || m === 'december'){
        alert('Booo')
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skipFive(num){
    for(let i = 1; i <= num; i++){
        if(i % 5 !== 0){
            console.log(i)
        }
    }
}
