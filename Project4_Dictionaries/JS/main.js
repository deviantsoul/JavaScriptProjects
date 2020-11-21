function my_Dictionary()    {
    var Weapon = {
        Name: "Greatsword",
        Type: "Two-handed",
        Weight: "Heavy",
        Class: "Warrior"
    };
    delete Weapon.Name
    document.getElementById("Dictionary").innerHTML = Weapon.Name;
}