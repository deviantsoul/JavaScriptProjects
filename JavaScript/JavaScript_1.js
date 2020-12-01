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
        case "Warcraft":
            game_output = "Warcraft" + game_string;
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