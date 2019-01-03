//1 ++++++++++++++++++++++++++
let a = 'block'
switch (a) {
    case 'block':
        console.log('block');
        break;
    case 'none' :
        console.log('none');
        break;
    case 'inline':
        console.log('inline');
        break;
    default:
        console.log('other');
        break;
}

//2 +++++++++++++++++++++
let type = 'visible';
(type === 'visible') ? type = 'hidden' : type = 'visible';
console.log(type);
 
 //3 +++++++++++++
 let b = 0;
 (b === 0) ? b = 1 : (b < 0) ? b = 'less than zero' : b *= 10 ;
 console.log(b);
 
 //4 ++++++++++++++++++++++++
 let car = {
     name: 'Lexus', 
     age: 10, 
     create: 2008, 
     needRepair: false 
 };
 (car.age > 5) ? car.needRepair = true : car.needRepair = false;
 console.log(car);
 
 //5 ++++++++++++++++++++++++++++++++
 let string = 'i am in the easycode';
 let newString = '';
for (let i = 0; i < string.length; i++) {
    newString += (string[i - 1] == ' ' || i == 0) ? string[i].toUpperCase() : string[i];
}
console.log(newString);


//6 ++++++++++++++++++++++++

let str = 'tseb eht ma i';
let newStr = '';
for (i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
}
console.log(newStr);


//7 +++++++++++++++++++++++++++++

let num = 10;
let factorial = 1;

for (let i = num; i > 1; i--) {
    factorial *= i;
}
console.log(factorial);


// 8 ++++++++++++++++++++

let jsString = 'JavaScript is a pretty good language';
let newJsString = '';

for (let i = 0; i < jsString.length; i++) {
    newJsString += " " != jsString[i] ? i && " " != jsString[i - 1] ? jsString[i] : jsString[i].toUpperCase() : "";
}
console.log(newJsString);


//9 +++++++++++++++++++++++++++++
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (var i = 0; i <= numArray.length; i++) {
if (numArray[i] % 2 && numArray[i] <= numArray.length) {
		console.log(numArray[i]);
	}
}
 
 //10
 
 