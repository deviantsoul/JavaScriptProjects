function Vote_Function()    {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age <18) ? "I'm sorry, you are not": "Yes you can! You are allowed";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

document.write(Smaller = (5<3) ? "Left is smaller": "Right is smaller");

function Vehicle(Make, Model, Year, Color)  {
    this.Vehicle_Make= Make;
    this.Vehicle_Model= Model;
    this.Vehicle_Year= Year;
    this.Vehicle_Color= Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction()   {
    document.getElementById("Keywords_and_Constructors").innerHTML= "Eric drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function iVoter(iOrigin, iColor, iProvince, iGender)    {
    this.iVoter_iOrigin = iOrigin;
    this.iVoter_iColor = iColor;
    this.iVoter_iProvince = iProvince;
    this.iVoter_iGender = iGender;
}
var Charice = new iVoter("Filipino", "Brown", "Ontario", "Female");
var Jokoy = new iVoter("Filipino", "Brown", "Ontario", "Male");
var Jake = new iVoter("American", "Black", "Quebec", "Male");
var Kendrick = new iVoter("Polish", "White", "Vancouver", "Male");
var Britney = new iVoter("British", "White", "Ontario", "Female");
function assign_37()    {
    document.getElementById("New_and_This").innerHTML= "Britney; a " + Britney.iVoter_iOrigin + " , " + Britney.iVoter_iColor + ", " + Britney.iVoter_iGender + ", from " + Britney.iVoter_iProvince + ", is a registered voter.";
}