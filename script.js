/****** Lecture: variables


var name = "Harry";
console.log(name);

var lastName = 'Jenkins';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/




// Lecture: variables 2
/*
var name = 'John';
var age = 26;

console.log(name +" "+ age);
console.log(age + age);

var job, isMarried;

console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + " " +age + " " + job + " " + isMarried);

var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name +" "+ age);
*/



// Lecture: Operators
/*
var ageJohn = 30;
var ageMark = 30;

ageJohn /= 3;
alert(ageJohn);
*/



////////////////////////////////////
// Lecture: if/else statement

/*
var name = 'John';
var age = 26;
var isMarried = "no";

if (isMarried = 'yes') {
    console.log(name + " is married!");
} else {
    console.log(name + " will hopefully marry soon :)");
}
*/

// == vs ===
/*
if (23 == "23") {
    console.log('== int and string is the same!');
}

if (23 === '23'){
   // console.log('=== these are not the same :(');
}
else console.log('=== these are not the same :(');
*/


////////////////////////////////////
/*// Lecture: boolean logic and switch
var age = 30;

if (age < 20) {
    alert('John is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man');
} else {
    alert('John is a man.');
}


//Switch statement
var job = 'teacher';

job = prompt('What does John do?');

switch (job) {
    case 'teacher':
        console.log('John teaches kids');
        break;
    case 'driver':
        console.log('John drives a cab ');
        break;
    case 'lawyer':
        console.log('John lies for a living');
        break;
    default:
        console.log('We dont know what john does..');
}
*/


//Coding Challene 1
/*
var johnHeight = 170;
var johnAge = 35;

var friendHeight = 180;
var friendAge = 35;

var bobHeight = 65;
var bobAge = 40;

var johnScore = johnHeight + (johnAge * 5);
var friendScore = friendHeight + (friendAge * 5);
var bobScore = bobHeight + (bobAge * 5);

console.log('John score = ' + johnScore);
console.log('Friend score = ' + friendScore);
console.log("Bob's score = " + bobScore);


if (johnScore > friendScore && johnScore > bobScore){
    console.log('John Wins!');
}
else if (friendScore > johnScore && bobScore){
    console.log('Friend Wins!');
}
else if (bobScore > johnScore && bobScore > friendScore) {
    console.log('Bob Wins!');
}
else {
    console.log('We have a draw!');
}
*/

/////////////////////////////////////////////////
// Lecture: Functions
/*
function calculateAge(yearOfBirth) { //yearOfBirth = parameter
    var age = 2017 - yearOfBirth;
    console.log(age + 2);
    //return age;
}
//function does not return a value
//expression is assigned to a variable such as...

var ageJohn = calculateAge(1992); // 1992 = argument
//console.log(ageJohn);

*/

//Lecture: Arrays
/*
var array = ["1", "2", "3"];
console.log(array);
array.push(4); // push = add value to end
console.log(array);

array.shift(); // shift = removes first value
console.log(array);

array.unshift("unshift"); // unshift = adds value to start of array
console.log(array);

array.pop();
console.log(array);
*/

//Lecture: Objects
/*
var harry = {
    name: "Harry",
    lastName: "Jenkins",
    yearOfBirth: 1992,
    job: "awesomeProgrammer",
    calculateAge: function() {
        this.age = 2017 - this.yearOfBirth;
    }
};

//2 ways to retrieve object key pairs:
harry.calculateAge();
console.log(harry);//1
//console.log(harry['name']);//2


//can pass a variable into an express such as...
var fieldSearch = "job";
console.log(harry[fieldSearch]);

//another way to create an object and change key pairs later -
var john = new Object();
john.name = 'John';
john.lastName = "Smith";
*/

//methods are like functions that mutate objects

//this.method this = reference to current object
/*
var honda = {
    model: "cbr",
    displacement: 600,
    year: 2013,
    fuelCapacity: 12,
    calculateFuelMilage: function() {
       this.fuelMilage = this.fuelCapacity * 100;
    }
}

honda.calculateFuelMilage;
console.log(honda);
console.log(honda.fuelMilage);

*/

//Loops & Iteratsions

//For loop
/*
for (var i = 0; i < 10; i++) {
    //console.log(i);
}

var names = ["Bob", "Kate", "Jim"];


//standard for loop - incrementing from 0 start to finish
for (var i = 0; i < names.length; i ++) {
    //console.log(names[i]);
}

//backwards for loop i--
for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}
*/

//While loop

//assign counter BEFORE the loop-
/*
var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++
}*/


//Break = exit loop 
/*
for (var i = 0; i < 5; i ++) {
    if (i === 3) {
        break;
    }
}

//Continue = skip to the end of the loop
for (var i = 0; i < 5; i ++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}
*/

///////////////////////////////////////
// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/


var years = [1992, 1995, 1960, 1971, 2003];
var years2 = [1909, 1949, 2012, 2004]

function printFullAge(years) {
    
    var age = [];
    var isAdult = [];
    
    //fill age array with ages
    for (var i = 0; i < years.length; i++) {
        age[i] = 2017 - years[i];
    }
    
    //Decide if person is over then 18
    //Fill isAdult array with boolean values
    for (i = 0; i < years.length; i ++) {
        if (age[i] >= 18) {
            console.log(age[i] + " is older then 18");
            isAdult[i] = true;
        }
        else {
            console.log(age[i] + " is NOT older then 18");
            isAdult[i] = false;
        }   
    }
    return isAdult;
}

var full1 = printFullAge(years);
var full2 = printFullAge(years2);

for (i = 0; i < full1.length; i ++) {
    console.log(full1[i]);
}

for (i = 0; i < full1.length; i ++) {
    console.log(full2[i]);
}



/*
for (var i = 0; i < years.length; i++) {
    
    function printFullAge(years[i]) {
        var array = [];
        array[i] = years[i];
        var age = 2017 - years[i]
        var isAdult = false;
        
        if (age > 18) {
            isAdult = true;
            console.log(age + " is older then 18");
        }
        return isAdult;
    }
}

*/














