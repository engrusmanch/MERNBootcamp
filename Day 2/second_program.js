
// var  tempFar=0;
// var tempC=((tempFar-32)*5)/9;
// console.log("Temperature in Celsius is "+tempC);
// let some_number=9007199254740991+4;
// //some_number=some_number+4;
// console.log(some_number);
// let name_double_quote="somebody's";
// let name_single_quote='somebody';
// let name=name_double_quote+name_single_quote;
// console.log(`My Name is :${name}`);
// let number1=900719925474099144n;
// let number2=900719925474099164n
// console.log(number1*number2);
// console.log(number1+number2);
// console.log(number1-number2);
// console.log(Number(number1/number2));
// let isMale=true;
// isMale=false;
// let isGreater=3>3;
// console.log(isGreater);
// const prompt=require('prompt-sync')();
// const tempF=prompt('Enter Temperature in Farhenheit : ');
// var tempC=((tempF-32)*5)/9;
// console.log(`Temperature in Celsius is ${tempC}`);
// console.log(typeof tempF);
// const prompt=require('prompt-sync')();
// let tempF=prompt('Enter Temperature in Farhenheit : ');
// let tempC=prompt('Enter Temperature in Celsius : ');
// let isBool1=true;


// let sum=Number(tempF)+Number(tempC);
// console.log(sum-isBool1);
// sum=Boolean(tempF)+Boolean(tempC);

// if(tempF.isInteger&&tempC.isInteger){
// console.log(tempF+tempC);
// }
// else{
//     tempF=Number(tempF);
//     tempC=Number(tempC);
//     console.log(tempC+tempF);
// }


// let sum=Number(tempF)+String(tempC);
// let sum= tempF+tempC;
// const prompt=require('prompt-sync')();
// const yourMarks=prompt("Enter your marks :");
// let mathMarks=80;
// let engMarks=90
// if(yourMarks>70){
//     console.log("Your grade is C");
// }
// else if(yourMarks>80){
//     console.log("your grade is B");
// }
// else if(yourMarks>90){
//     console.log("your grade is A");
// }
// else if(yourMarks>60){
//     console.log("your grade is D");
// }
// else{
//     console.log("you are fail");
// }

const prompt=require('prompt-sync')();
const userInput1=Number(prompt("Enter First Number : "));
const userInput2=Number(prompt("Enter Second Number : "));
const userOperation=prompt("Enter a for addition b for subtraction c for multiplication and d for division : ");
if(userOperation=="a")
{
    console.log(`Addition: ${userInput1+userInput2}`);
}
else if(userOperation=="b")
{
    console.log(`Subtraction: ${userInput1-userInput2}`);
}
else if(userOperation=="c")
{
    console.log(`Multiplication: ${userInput1*userInput2}`);
}
else if(userOperation=="d")
{
    console.log(`Division: ${userInput1/userInput2} `);
}
else{
    console.log("you entered wrong character");
}