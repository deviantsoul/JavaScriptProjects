function my_Dictionary()    {  //Setting up new function
    var Weapon = {  // Setting a value
        Name: "Greatsword",  //Key and Value
        Type: "Two-handed",  //Key and Value
        Weight: "Heavy",   //Key and Value
        Class: "Warrior"   //Key and Value
    };    //End of KVP
    delete Weapon.Name    //delete certain dictionary entry
    document.getElementById("Dictionary").innerHTML = Weapon.Name; //display result
}