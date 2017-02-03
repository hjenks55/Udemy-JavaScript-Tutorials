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
    alert('John is a mann.');
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

function calculateAge(yearOfBirth) { //yearOfBirth = parameter
    var age = 2017 - yearOfBirth;
    console.log(age + 2);
    //return age;
}


var ageJohn = calculateAge(1992); // 1992 = argument
//console.log(ageJohn);





