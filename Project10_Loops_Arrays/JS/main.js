function Call_Loop()    {   //Defining a function
    var Digit = "";     //setting up a function variable
    var X = 1;          //setting up a function variable
    while (X < 21)  {   //setting up a while loop
        Digit += "<br>" + X;    //result of while loop
        X++;                    //if while is met, increase the value
    }
    document.getElementById("Loop").innerHTML = Digit;      //result
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];       //setting up global variable
var Content = "";       //setting up global variable
var Y;      //setting up global variable
function for_Loop()     {       //Defining a function
    for (Y =0; Y < Instruments.length; Y++) {       //setting up for, while not met, continue
    Content += Instruments[Y] + "<br>";     //while not met, continue
    }
    document.getElementById("List_Instruments").innerHTML = Content;        //result of for
}

function dog_pics()     {       //Defining a function
    var Dog_Picture = [];       //setting up a function variable
    Dog_Picture[0] = "barking";     //setting up list or array
    Dog_Picture[1] = "eating";      //setting up list or array
    Dog_Picture[2] = "howling";     //setting up list or array
    Dog_Picture[3] = "licking";     //setting up list or array
    document.getElementById("Dog").innerHTML = "Right here, Barky is " + Dog_Picture[3] + ".";      //result of function
}

function constant_function()    {       //Defining a function
    const Pokemon = {type: "fire", habitat: "Route 3", Shiny: "shiny"};     //setting up constant 
    Pokemon.evolve = "Yes";     //trying to change constant or add another variable
    Pokemon.Shiny = "not shiny";        //trying to change constant or add another variable
    Pokemon.type = "water";     //trying to change constant or add another variable
    document.getElementById("Constant").innerHTML = "My favorite pokemon is " + Pokemon.type + " and it should be " + Pokemon.Shiny;        //result
}

function my_let()   {       //Defining a function
    var Y = 143;            //setting up a function variable
    document.write(Y);      //result
    {
        let Y = 123;        //let in a block 
        document.write("<br>" + Y);     //result of let
    }
    document.write("<br>" + Y);     //result
}

var B = my_Return(5, 12)        //setting up global variable
function my_Return(X, Y)    {       //Defining a function
    return X * Y;       //return the variables
}
    document.getElementById("return").innerHTML = B;        //result

let car = {     //setting up object
    make: "Tesla",      //properties of object
    model: "Roadrunner",        //properties of object
    year: "2020",               //properties of object
    color: "red",               //properties of object
    description: function() {       //defining a function
        return "I want to buy the " + " " + this.model + " " + this.make + " " + this.year + " and the color should be " + this.color + ".";        //result
    }
}
document.getElementById("Car_Object").innerHTML = car.description();        //result

var text = "";      //setting up global variable
var i;              //setting up global variable
for (i = 0; i <10; i++) {       //setting up for for break, if met break
    if (i === 3) {break;}           //the break
    text += "The number is " + i + "<br>";      //result
}
document.getElementById("break").innerHTML = text;      //display result

var text2 = "";         //setting up global variable
var i2;                 //setting up global variable
for (i2 = 0; i2 < 5; i2++)    {     //setting up value for continue
    if (i2 === 3) {continue;}       //condition of continue
    text2 += "The number is " + i2 + "<br>"     //result
}
document.getElementById("continue").innerHTML = text2;      //display result