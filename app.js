// Qusetion no 1

let n=+prompt("Enter a Number");

if(n%3==0){
    console.log(n + " is divisible by 3");
}

else{
    console.log(n + " is not divisible by 3");
}


// Qusetion no 2

let a=+prompt("Enter a Number");

if (a%2==0){
    console.log(a + " is a Even Number")
}
else {
    console.log(a + " is a Odd Number");
}


// Qusetion no 3

let b=+prompt("Enter your Age");

if (b>18){
    console.log("Old enough");
}

else {
    console.log("Too Young");
}



// Qusetion no 4

let c=prompt("Enter Your Name");


if(c==="Ashar"){
    console.log("Hello! Ashar");
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




//Question no 13


let f=+prompt("Enter a integer");
let g=+prompt("Enter a integer");

if (f===g){
    console.log("Both are equal to each other");
}

else if(f<g){
    console.log(g + " is the big integer");
}

else if(f>g){

    console.log(f + " is the big integer");

}

