function onMouse()   {   //Defining the function
    document.getElementById("any").style.color="red";  //This will change the color to red for variable any  
}

function outMouse()   { //Defining outmouse function
    document.getElementById("any").style.color="black";  //Changing the color to black on outmouse fx  
}

function myFunction()   {   //Defining a function
    var sentence = "I am learning"; //Defining a variable
    sentence += " a lot from this book!"; //Adding more to the previous variable
    document.getElementById("concatenate").innerHTML=sentence; //result of the function
}