var X = 20
function Add_numbers_1()    {
    document.write(20 + X + "<br>")
}
function Add_numbers_2()    {
    document.write( X + 10);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3()    {
    var Y = 10;
    document.write(20 + Y + Y + Y);
}
function Add_numbers_4()    {
    document.write( Y + Y + 20);
}
Add_numbers_3();
Add_numbers_4();

function Add_numbers_5()    {
    var Z = 5;
    console.log( 10 + Z);
}

function Add_numbers_6()    {
    console.log( 100 + Z)
}
Add_numbers_5();
Add_numbers_6();

function get_Date() {
    if (new Date().getHours()>18)   {
        document.getElementById("Greeting").innerHTML = "How was your day sir?";
    }
}

function get_Time()     {
    document.getElementById("CurrentTime").innerHTML = Date();
}

function Game_Function()     {
    var letter = document.getElementById("Game").value;
    var text;    
    if ( letter === "Cyberpunk")    {
        Text = "You are awesome!";
    }
    else    {
        Text = "You suck!";
    }
    document.getElementById("Game you playing right now").innerHTML = Text;
}

function Time_Function()    {
    var Time = new Date().getHours();
    var Reply;
    if (Time <12 == Time > 0)   {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time <18) {
        Reply = "It is the afternoon.";
    }
    else    {
        Reply = "Time to sleep.";
    }
    document.getElementById("Time of the day").innerHTML = Reply;
}