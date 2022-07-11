var name = 'Khaliunaa'; // declare a string
var myAge = 17; // declare a number
var iAmAnAdult = isAdult(myAge); // declare a boolean (true or false)

// if statement
if (iAmAnAdult) {
    console.log('I am an adult');
} else {
    console.log('I am a minor');
}

// loop
for (var i=0; i<20; i+=1) {
    if (isAdult(i)) {
        console.log('I am an adult and ' + i + ' years old');
    } else {
        console.log('I am a minor');
    }
}

// function
function isAdult(age) {
    return age >= 18;
}

// write to console
console.log('My name is ' + name + ' and I am ' + myAge + ' years old.');