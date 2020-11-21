alert(Math.random()*120) //random numbers from 1-120

function add_numbers()  {   //defining a function for addition
    var addition = 2+2; //setting the values
    document.getElementById("Math").innerHTML="2+2=" + addition; //displaying the result
}

function subtract_numbers()     {  //defining a function for substraction
    var subtraction = 5 - 2;  //setting the values
    document.getElementById("Math2").innerHTML="5-2= " + subtraction;  //result of the function
}

function multiply_numbers()     {  //defining the multiplication function
    var multiply= 6*8;  //setting the values
    document.getElementById("Math3").innerHTML="6 times 8 is = " + multiply; //result of the function
}

function divide_numbers()       {  //setting the function division
    var divide = 48/6;  //setting the values
    document.getElementById("Math4").innerHTML="48 divide it by 6 is = " + divide;  //the result of function
}

function more_Math()    {  //setting the function multiple operations
    var allmath= (1+2) * 10/5 - 1;   //setting the values
    document.getElementById("Math5").innerHTML = "The result is " + allmath;  //the result of function

function modulus_Math()     {   //setting the function modulus
    var reMainder = 25 % 6;  //setting the remainder values
    document.getElementById("Math6").innerHTML= "Remainder of 25/6 is " + reMainder;  //the result of function
}

function negation_Operator()    {   //setting up the negation function
    var x = 20;   //number to negate
    document.getElementById("Math7").innerHTML = -x;  //the result of function
}

var x = 2  //initial value for increment function
x++;  //actual values
document.write(x);   //result of increments

var y = 10  //initial values for decrement
y--;  //actual decrements
document.write(y);  //results of decrement
