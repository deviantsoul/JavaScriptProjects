function dumb()     {       //defining a new function
    var part_1 = "Dumb, "       //setting up a variable
    var part_2 = "Dumber, "     //setting up a variable
    var part_3 = "Dumbest."     //setting up a variable
    var whole_dumb = part_1.concat(part_2, part_3);     //connecting all variables
    document.getElementById("connect").innerHTML=whole_dumb;        //result
}

function slice_method()     {       //defining a new function
    var Sentence = "Muhammad Ali keeps saying, \"He's the greatest.\" But he never believed it himself.";   ////setting up a variable
    var Section = Sentence.slice(27,47)     //setting up a variable
    document.getElementById("Slice").innerHTML = Section;       //result of the sliced string
}

function my_Upper()     {       //defining a new function
    var str = "Challenge 10"        //setting up a variable
    var up = str.toUpperCase();     //setting up a variable
    document.getElementById("Upper").innerHTML = up;        //result of all uppercase
}

function on_search()        {       //defining a new function
    var str = "Dark today right? Obviously, it's dark and gloomy everywhere!"       //setting up a variable
    var me = str.search("dark");        //setting up a variable, case sensitive search
    document.getElementById("challenge").innerHTML = me;        //result
}

function string_method()    {       //defining a new function
    var x = 1434        //setting up a variable
    document.getElementById("Numbers_String").innerHTML = x.toString();     //showing the number value of str
}

function my_Precision()     {       //defining a new function
    var x = 9987839048044.90123801298301;       //setting up a variable
    document.getElementById("Precision").innerHTML = x.toPrecision(15);     //set to 15 number length to show
}

function my_Fixed()     {       //defining a new function
    var num = 92.389049     //setting up a variable
    var n = num.toFixed(5);     //setting up a variable
    document.getElementById("fix").innerHTML = n;       //rounding up the number to a 5th length
}

function my_Value()     {       //defining a new function
    var str = "\"I am the greatest! There will be no one like me!\" <br>- Muhammad Ali"     //quote, value of str
    var great = str.valueOf();      //setting up a variable
    document.getElementById("value").innerHTML = great;     //showing the primitive value of str
}