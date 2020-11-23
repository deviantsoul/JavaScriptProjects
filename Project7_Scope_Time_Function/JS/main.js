var X = 20      //global variables
function Add_numbers_1()    {       //defining a function
    document.write(20 + X + "<br>")     //Print results
}
function Add_numbers_2()    {       //defining another function
    document.write( X + 10);        //printing results from global variables
}
Add_numbers_1();        //additions
Add_numbers_2();        //additions

function Add_numbers_3()    {       //defining a function
    var Y = 10;     //setting up local variables
    document.write(20 + Y + Y + Y);     //result
}
function Add_numbers_4()    {       //defining function
    document.write( Y + Y + 20);    //result but without local variables
}
Add_numbers_3();        //add 2 functions
Add_numbers_4();        //add 2 functions

function Add_numbers_5()    {       //defining function
    var Z = 5;      //setting up local variable
    console.log( 10 + Z);       //result in log only
}

function Add_numbers_6()    {       //definig function
    console.log( 100 + Z)           //result in log only should be error
}
Add_numbers_5();        //adding both functions
Add_numbers_6();        //adding both functions

function get_Date() {       //getting the date function or time to be precise
    if (new Date().getHours()>18)   {       //if conditions met
        document.getElementById("Greeting").innerHTML = "How was your day sir?";  //result of if condition
    }
}

function get_Time()     {       //just my own thing to try add the current time, date
    document.getElementById("CurrentTime").innerHTML = Date();      //result
}

function Game_Function()     {          //function for my game function
    var letter = document.getElementById("Game").value;     //setting a value from id
    var text;   //setting the variable type 
    if ( letter === "Cyberpunk")    {       //variable should equal the condition
        Text = "You are awesome!";          //if met, result
    }
    else    {          
        Text = "You suck!";         //if condition not equal, result
    }
    document.getElementById("Game you playing right now").innerHTML = Text;     //display result
}

function Time_Function()    {           //get time
    var Time = new Date().getHours();       // setting a variable
    var Reply;              //setting another variable but the end result
    if (Time <12 == Time > 0)   {           //condition numba 1
        Reply = "It is morning time!";      //result if met
    }
    else if (Time > 12 == Time <18) {       //condition numba 2
        Reply = "It is the afternoon.";     //result if met
    }
    else    {
        Reply = "Time to sleep.";       // or else this
    }
    document.getElementById("Time of the day").innerHTML = Reply; //result of all conditions
}