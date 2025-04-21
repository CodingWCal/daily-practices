// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// getAverage([2,2,2,2]),2)

// getAverage([1,2,3,4,5,]),3);

// getAverage([1,1,1,1,1,1,1,2]),1)


function getAverage(Array){
    // let sum = Array.reduce(sum);
    let sum = Array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    let average = (sum/Array.length);
    let averageRounded = Math.floor(average);
    //return averageRounded
    console.log(averageRounded);
}

getAverage([1,1,1,1,1,1,1,2])


//PREP

//PARAMETERS
//Given Array

//RETURN
//Return an average, from given array, rounded down to nearest integers

//EXAMPLE
//GetAverage([2,2,2,2]),2)

//PSEUDOCODE

//Write function that takes in array

//Sum ups every number in array into total
    //Maybe use array.reduce()

//Divides total sum by amount of numbers in array
    //Maybe use array.length() to find amount of numbers in array

//Returns average, which is total sum divided by total amount of numbers, rounded to nearest integer
    //Maybe use Math.floor() to round DOWN to nearest integer  
