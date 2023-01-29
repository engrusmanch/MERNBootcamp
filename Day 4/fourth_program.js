// const prompt=require("prompt-sync")();
// let name=prompt("Whats your name");
// let toffies= "qwerty";
// let reversed_toffies="";
// let count=toffies.length-1;
// while (count>=0) {
//     reversed_toffies+=toffies[count];
//     count--;
// }
// console.log(reversed_toffies);
// let data=[0,2,3,4,67,35,786];
// let sum=0;
// for (index=0;index<data.length;index++){

//     if(data[index]%2!=0){
//         continue;

//     }
//     sum=sum+data[index];

// }
// console.log(sum);
// const prompt=require("prompt-sync")();
// let key=prompt("Please enter key");
// let alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let inputString=prompt("Please Enter the String to encrypt");
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// for(char of inputString){
//     if(char==alphabets[index])

// }
const prompt=require('prompt-sync')();
const strdata =prompt('Enter the string in Capital: ');
const keydata =Number(prompt('Enter the key value for De-crypt: '));
let decodedText="";
let charCode=0;
for(let char of strdata){
    charCode=char.charCodeAt();
    for(let i=1;i<=keydata;i++){
        if(charCode==65){
            charCode=90;
        }else if(charCode==32 || charCode==44){
            continue;
        }
        else{
            charCode--;
        }
    }
    decodedText+=String.fromCharCode(charCode);
    //console.log(String.fromCharCode(charCode))
}
console.log(decodedText);