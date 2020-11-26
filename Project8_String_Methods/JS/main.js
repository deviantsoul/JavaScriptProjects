function dumb()     {
    var part_1 = "Dumb, "
    var part_2 = "Dumber, "
    var part_3 = "Dumbest."
    var whole_dumb = part_1.concat(part_2, part_3);
    document.getElementById("connect").innerHTML=whole_dumb;
}

function slice_method()     {
    var Sentence = "Muhammad Ali keeps saying, \"He's the greatest.\" But he never believed it himself.";
    var Section = Sentence.slice(27,47)
    document.getElementById("Slice").innerHTML = Section;
}

function my_Upper()     {
    var str = "Challenge 10"
    var up = str.toUpperCase();
    document.getElementById("Upper").innerHTML = up;
}

function on_search()        {
    var str = "Dark today right? Obviously, it's dark and gloomy everywhere!"
    var me = str.search("dark");
    document.getElementById("challenge").innerHTML = me;
}