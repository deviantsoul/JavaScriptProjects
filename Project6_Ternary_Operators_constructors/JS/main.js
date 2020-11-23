function Vote_Function()    {  //Defining the function
    var Age, Can_vote;  //Assigning variables to be used on this function
    Age = document.getElementById("Age").value;  //Target the id in html
    Can_vote = (Age <18) ? "I'm sorry, you are not": "Yes you can! You are allowed"; //Choices to decided if req met
    document.getElementById("Vote").innerHTML = Can_vote + " to vote."; //Result
}

document.write(Smaller = (5<3) ? "Left is smaller": "Right is smaller");  //Who is smaller comparison

function Vehicle(Make, Model, Year, Color)  {  //Setting up a constructor to be used
    this.Vehicle_Make= Make;   //Using "this" to set a variable
    this.Vehicle_Model= Model;  //Using "this" to set a variable
    this.Vehicle_Year= Year;  //Using "this" to set a variable
    this.Vehicle_Color= Color;  //Using "this" to set a variable
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");  //An instance of the constructor
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");  //An instance of the constructor
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");  //An instance of the constructor
function myFunction()   {  //Setting up a new function
    document.getElementById("Keywords_and_Constructors").innerHTML= "Eric drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;  //Printing the result of function with constructor
}

function iVoter(iOrigin, iColor, iProvince, iGender)    {       //Another constructor I made
    this.iVoter_iOrigin = iOrigin;  //Using this again
    this.iVoter_iColor = iColor;  //Using this again
    this.iVoter_iProvince = iProvince;  //Using this again
    this.iVoter_iGender = iGender;  //Using this again
}
var Charice = new iVoter("Filipino", "Brown", "Ontario", "Female");  //Instance of constructor with function
var Jokoy = new iVoter("Filipino", "Brown", "Ontario", "Male");     //Instance of constructor with function
var Jake = new iVoter("American", "Black", "Quebec", "Male");       //Instance of constructor with function
var Kendrick = new iVoter("Polish", "White", "Vancouver", "Male");      //Instance of constructor with function
var Britney = new iVoter("British", "White", "Ontario", "Female");      //Instance of constructor with function
function assign_37()    {       //Function to be used on button
    document.getElementById("New_and_This").innerHTML= "Britney; a " + Britney.iVoter_iOrigin + " , " + Britney.iVoter_iColor + ", " + Britney.iVoter_iGender + ", from " + Britney.iVoter_iProvince + ", is a registered voter.";      //Printing result
}

function count_Function()   {       //Setting up function
    document.getElementById("Counting").innerHTML = Count();        //checking the ID in html
    function Count()    {       //another function on a function
        var Starting_point = 9;     //setting up variable for the said another function
        function Plus_one() {Starting_point += 1;}      //Nested function within 2 functions
        Plus_one();     //nested function
        return Starting_point;      //Result
    }
}