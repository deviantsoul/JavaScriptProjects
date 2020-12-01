function Call_Loop()    {
    var Digit = "";
    var X = 1;
    while (X < 21)  {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop()     {
    for (Y =0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_Instruments").innerHTML = Content;
}

function dog_pics()     {
    var Dog_Picture = [];
    Dog_Picture[0] = "barking";
    Dog_Picture[1] = "eating";
    Dog_Picture[2] = "howling";
    Dog_Picture[3] = "licking";
    document.getElementById("Dog").innerHTML = "Right here, Barky is " + Dog_Picture[3] + ".";
}

function constant_function()    {
    const Pokemon = {type: "fire", habitat: "Route 3", Shiny: "shiny"};
    Pokemon.evolve = "Yes";
    Pokemon.Shiny = "not shiny";
    Pokemon.type = "water";
    document.getElementById("Constant").innerHTML = "My favorite pokemon is " + Pokemon.type + " and it should be " + Pokemon.Shiny;
}

function my_let()   {
    var Y = 143;
    document.write(Y);
    {
        let Y = 123;
        document.write("<br>" + Y);
    }
    document.write("<br>" + Y);
}

var B = my_Return(5, 12)
function my_Return(X, Y)    {
    return X * Y;
}
    document.getElementById("return").innerHTML = B;

let car = {
    make: "Tesla",
    model: "Roadrunner",
    year: "2020",
    color: "red",
    description: function() {
        return "I want to buy the " + " " + this.model + " " + this.make + " " + this.year + " and the color should be " + this.color + ".";
    }
}
document.getElementById("Car_Object").innerHTML = car.description();

var text = "";
var i;
for (i = 0; i <10; i++) {
    if (i === 3) {break;}
    text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

var text2 = "";
var i2;
for (i2 = 0; i2 < 5; i2++)    {
    if (i2 === 3) {continue;}
    text2 += "The number is " + i2 + "<br>"
}
document.getElementById("continue").innerHTML = text2;