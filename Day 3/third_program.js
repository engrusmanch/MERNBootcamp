// const prompt=require('prompt-sync')();
// const num=prompt("Please Enter Any Number :");
// if((num%2)==0){
//     console.log("Number is even");
// }
// else{
//     console.log("Number is odd");
// }
// let counter =1;
// while (counter<6){
//     console.log("sit");
//     counter=counter+1;
//     counter++;
//     counter+1;
// }
// let player1="R";
// let player2="P";
// const prompt=require('prompt-sync')();
// console.log("Welcome to Rock Paper Scissors game");
// console.log("Please Enter r for choosing Rock");
// console.log("Please Enter p for choosing Paper");
// console.log("Please Enter s for choosing Scissors");
// let player1=prompt("Player 1 turn : ");


// const choices=["r","p","s"];
// let player2=choices[Math.floor(Math.random()*3)];
// console.log(`Player 2 chose ${player2}`);
// let rock="r";
// let paper="p";
// let scissor="s";
// if(player1==rock&&player2==paper)
// {
//     console.log("Computer Wins");
// }
// else if(player1==rock&&player2==scissor)
// {
//     console.log("Player 1 Wins");

// }
// else if(player1==paper&&player2==scissor)
// {
//     console.log("Computer Wins");
    
// }
// else if(player1==paper&&player2==rock)
// {
//     console.log("Player 1 Wins");
    
// }
// else if(player1==scissor&&player2==rock)
// {
//     console.log("Computer Wins");
    
// }
// else if(player1==scissor&&player2==paper)
// {
//     console.log("Player 1 Wins");
    
// }
// else{
//     console.log("Its a Tie");
// }
const prompt=require("prompt-sync")();
let string=prompt("please enter any string to reverse it : ");
let reverse_string="";
let count=string.length-1;
while(count>=0)
{
    reverse_string+=string[count];
    count--;
}
console.log(reverse_string);