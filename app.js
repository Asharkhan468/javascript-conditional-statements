// Question no 1

let n=+prompt("Enter a Number");

if(n%3==0){
    console.log(n + " is divisible by 3");
}

else{
    console.log(n + " is not divisible by 3");
}


// Question no 2

let a=+prompt("Enter a Number");

if (a%2==0){
    console.log(a + " is a Even Number")
}
else {
    console.log(a + " is a Odd Number");
}


// Question no 3

let b=+prompt("Enter your Age");

if (b>18){
    console.log("Old enough");
}

else {
    console.log("Too Young");
}



// Question no 4

let c=prompt("Enter Your Name");


if(c==="Ashar"){
    console.log("Hello! Ashar");
}


//Question no 6

myfunc();
function myfunc() {
    let x=prompt("Enter Your Name");
    let y=x.toLocaleUpperCase();


    if(x==y){
        console.log("Uppercase");
    }

    else{
        console.log("Lowercase");
    }
    
}




//Question no 8

let time=prompt("Enter the Time");

if (time >= 0 && time<1200){
    console.log("Good Morning");
}

else if(time>=1200 && time<1700){

    console.log("Good Afternoon");

}

else if(time>=1700 && time<2100){
    console.log("Good Evening!");

}

else if(time>=2100 && time<2359){
    console.log("Good Night!");
}







//Question no 9

let d=+prompt("Enter a Year");

if (d%4===0){
    console.log(d + " is the Leap Year");
}

else if(d%100===0){
    console.log(d + " is the Leap Year");
}

else if(d%400===0){
    console.log(d + " is the Leap Year");
}

else {
    console.log(d + " is not Leap year");
}


//Question no 10

var password=12345678;

let e=prompt("Please Enter Password");

 if(e==password){
    console.log("Correct! The password you entered ");
}

else{
    console.log("Incorrect password please enter correct password")
}


//Question no 11

var firstName = "Ali";
if (firstName === "Fahad") {
 document.write("Hello Fahad!");

}
else{
    document.write("You are not Fahad")
}


//Question no 12

var greeting;
var hour = 13;

if (hour < 18) {
    console.log(greeting = "Good day");

}

else {

    console.log(greeting = "Good evening");
}




//Question no 13


let f=+prompt("Enter a Integer");
let g=+prompt("Enter a Integer");

if (f===g){
    console.log("Both are equal to each other");
}

else if(f<g){
    console.log(g + " is the big integer");
}

else if(f>g){

    console.log(f + " is the big integer");

}


//Question no  14

let h=+prompt("Enter a Integer");

if (h===0){
    console.log("This is Zero");
}
else if(h<0){
    console.log(h + " is the Negative integer");
}

else{
    console.log( h + " is Positive integer");
}










//Question no 16


let i=1234;
let j="Ashar"
let k= true

console.log(typeof(i));
console.log(typeof(j));
console.log(typeof(k));


//Question no 17


let character=prompt("Enter a Character");



if (character==="a"){
    console.log("true");
}

else if(character==="e"){
    console.log("true");

}

else if(character==="i"){
    console.log("true");
}

else if(character==="o"){
    console.log("true");
}

else if(character==="u"){
    console.log("true");
}

else{
    console.log("false");
}



//Question no 18

let num1=10;
let num2=8;

console.log(num1 != num2);


// Question no 20

let age=+prompt("Enter your Age");

console.log(age<18 ? "Too Young" : "old enough" );
