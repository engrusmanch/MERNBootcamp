// const prompt=require("prompt-sync")();
// let tMarks=+prompt("Please enter percentage : ");
// switch (tMarks) {
//     case (tMarks>=90):
//         console.log("Excellent A Grade");
//         break;
//     case (tMarks>=80):
//         console.log("Good B Grade");
//         break;
//     case (tMarks>=70) :
//         console.log("Average C Grade");
//         break;
//     case (tMarks>=60) :
//         console.log("Below Average D Grade");
//         break;
//     case (tMarks>=50):
//         console.log("Poor E Grade");
//         break;
//     case (tMarks<50):
//         console.log("Fail F Grade");
//         break;

//     default:
//         console.log("Enter valid input");
//         break;
// }


// const prompt=require("prompt-sync")();
// let num1=+prompt("Enter First Number : ");
// let num2=+prompt("Enter Second Number : ");
// let op=prompt("Enter operator(+,-,*,/) to perform operation :")
// switch (op) {
//     case "+":
//         let a=sumOfNum(num1,num2);
//         console.log(a);
//         break;
//     case "-":
        
//         console.log(`Subtraction of numbers is : ${subOfNum(num1,num2)}`);
//         break;
//     case "*" :
//         console.log(`Multiplication of numbers is : ${mulOfNum(num1,num2)}`);
//         break;
//     case "/" :
//         console.log(`Division of numbers is : ${divOfNum(num1,num2)}`);
//         break;

//     default:
//         console.log("Enter valid operator");
//         break;
// }
// function sumOfNum(num1=1,num2=1){
//     let sum=num1+num2;
//     return {sum,num1,num2};

// }
// function subOfNum(num1=1,num2=1){
//     return num1-num2;

// }
// function mulOfNum(num1=1,num2=1){
//     return num1*num2;

// }
// function divOfNum(num1=1,num2=1){
//     return num1/num2;


// }
// const input=require("prompt-sync")();
// let email=input("Please input email");
// let password=input("Please input password");
// function login(email,name="Usman",password)
// {
    
    
//     if(email.includes("@")&&email.includes(".com")){
//        return console.log("Valid mail");
//     }else{
//        return console.log("Invalid email");
//     }
   
// }
// login(email,password);
function loginValidator(email,password){
    let emailFormat=  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let emailResult="";
    if(email.match(emailFormat)){
        emailResult="valid email"
    }else{
        emailResult="Invalid Email"
    }
    return emailResult
  //  {0-9}{a-z}{A-Z}{@}{a-z}{.com}
}

console.log(loginValidator("waliullahsfsdfa18fsda@Z5.sdlfjdskl"));

