var myFirstName = "Maksim";
var myLastName = "Dimitrak";

///

// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";//

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//
let catName = "Oliver";
let catSound = "Meow!";

//
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; //

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line// Change this line

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb; // Change this line
// Only change code above this line

// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3])

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
let removedFromMyArray = myArray.pop()

function functionWithArgs(arg1, arg2){
    console.log(arg1 + arg2)
}

functionWithArgs(1, 2)

function trueOrFalse(wasThatTrue) {
    // Only change code below this line

    if (wasThatTrue)
        return ("Yes, that was true")
    else
        return ("No, that was false")

    // Only change code above this line

}

function testSize(num) {
    // Only change code below this line
    if (num < 5){
        return "Tiny"
    }
    else if(num < 10 ){
        return "Small"
    }
    else if(num < 15 ){
        return "Medium"
    }
    else if(num < 20 ){
        return "Large"
    }
    else if(num >=20 ){
        return "Huge"
    }
    else{
        return "Change Me";
    }


    // Only change code above this line
}

testSize(7);

let count = 0;

function cc(card) {

    switch (card) {
        case (2):
        case (3):
        case (4):
        case (5):
        case (6):
            count += 1;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count -= 1;
            break;

    }
        if (count > 0) {
            return count + ' Bet';
        }
        else if ((count == 0) || (count < 0)) {
            return count + ' Hold'
    }
    // Only change code above this line
}
cc(2); cc(3); cc(4); cc(5);
let a = cc(6);
console.log(a)
