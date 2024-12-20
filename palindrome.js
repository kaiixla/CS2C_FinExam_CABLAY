//Variable 1 to prompt the RACECAR
let formula1 = prompt("Enter the word").toUpperCase();

//It split the entered word and reverse it and join them together
const f1 = formula1.split('').reverse().join('');

console.log(formula1); //It displays the original strings
console.log(f1); //It displays the reversed strings

//It checks if the original string and reversed string are the same
const check = formula1 === f1;
console.log(check); //Displays if they are the same through True or False

//Variable 2 to prompt the RECORDER
let camera = prompt("Enter the word").toUpperCase();

//It split the entered word and reverse it and join them together
const cam = camera.split('').reverse().join('');

console.log(camera); //It displays the original strings
console.log(cam);//It displays the reversed strings

//It checks if the original string and reversed string are the same
const check2 = camera === cam;
console.log(check2);//Displays if they are the same through True or False