//Gobal variable

var X= 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}

function Add_numbers_2() {
    document.write(X + 100);
}

Add_numbers_1();
Add_numbers_2();

//Local Variable

function Add_numbers_1() {
    var X= 10;
    document.write(20 + X + "<br>");
}

function Add_numbers_2() {
    document.write(X + 100);
}

Add_numbers_1();
Add_numbers_2();

function get_date() {
    if(new Date().getHours() <18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function  Age_Function() {
    Age= document.getElementById("Age").value;
    if (Age >= 18) {
        Vote="You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time < 0) {
        Reply = "It is morning time.";
    }
    else if (Time >= 12 == < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;

}