alert("Math Practice for Java! Goodluck!")

function add_numbers()  {
    var addition = 2+2;
    document.getElementById("Math").innerHTML="2+2=" + addition;
}

function subtract_numbers()     {
    var subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML="5-2= " + subtraction;
}

function multiply_numbers()     {
    var multiply= 6*8;
    document.getElementById("Math3").innerHTML="6 times 8 is = " + multiply;
}

function divide_numbers()       {
    var divide = 48/6;
    document.getElementById("Math4").innerHTML="48 divide it by 6 is = " + divide;
}

function more_Math()    {
    var allmath= (1+2) * 10/5 - 1;
    document.getElementById("Math5").innerHTML = "The result is " + allmath;
}

function modulus_Math()     {
    var reMainder = 25 % 6;
    document.getElementById("Math6").innerHTML= "Remainder of 25/6 is " + reMainder;
}

function negation_Operator()    {
    var x = 20;
    document.getElementById("Math7").innerHTML = -x;
}