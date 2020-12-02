function game_function()    {
    var game_output;
    var game = document.getElementById("game_input").value;
    var game_string = " is a great game!";
    switch(game)    {
        case "Cyberpunk 2077":
            game_output = "Cyberpunk 2077" + game_string;
        break;
        case "Skyrim":
            game_output = "Skyrim" + game_string;
        break;
        case "Witcher 3":
            game_output = "Witcher 3" + game_string;
        break;
        case "Red Dead Redemption":
            game_output = "Red Dead Redemption" + game_string;
        break;
        case "Starcraft":
            game_output = "Starcraft" + game_string;
        break;
        case "Red Alert 3":
            game_output = "Red Alert 3" + game_string;
        break;
        case "Dragon's Dogma":
            game_output = "Dragon's Dogma" + game_string;
        break;
        case "Zelda":
            game_output = "Zelda" + game_string;
        break;
        case "Pokemon":
            game_output = "Pokemon" + game_string;
        break;
        case "Dragon Age":
            game_output = "Dragon Age" + game_string;
        break;
        case "Diablo":
            game_output = "Diablo" + game_string;
        break;
        default:
            game_output = "Please be civil and follow instructions. You can read right? Then choose from the list! Or else a rabbit will drag you to the hole of void."
    }
    document.getElementById("output").innerHTML = game_output;
}

function helloFunction()    {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "Abra Kadakbra! The text has changed!";
}

function setupCanvas()  {       //setting the function for canvas
    var canvas = document.getElementById("box");        //setting up the variable from the box id

    if(box.getContext)  {       //if argument to get context
        var layout = box.getContext('2d');  //the layout should be 2d

        var img = new Image();      //setting up the image as new variable
        img.src = "./Images/canvas.jpg";        //source of iamge
        img.onload = function()     {       //onload function
            layout.drawImage(img, 0, 0, 1080, 800);    //sx, sy, swidth, sheight
        }
    }

}
