function Vote_Function()    {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age <18) ? "I'm sorry, you are not": "Yes you can! You are allowed";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

document.write(Smaller = (5<3) ? "Left is smaller": "Right is smaller");