
function addition_function() {
    var addition = 10 + 6;
    document.getElementById("Math").innerHTML = "10 + 6 =" + addition;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 =" + Subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6*8=" + simple_Math;
}

function division() {
    var simple = 48/6;
    document.getElementById("Math").innerHTML = "48/6=" + simple;
}

function more_math() {
    var mulitple_math=(1+2) * 10 /2-5;
    document.getElementById("Math").innerHTML = "1 plus 1, multiplied by 10, divided in half and then subtracted by 5 equals" + mulitple_math;
}

function modulus_Operator() {
    var simple_math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " +simple_math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = - x;
}

var X = 5;
X++;
document.write(X);

var X = 5.25;
X--;
document.write(X);

window.alert(Math.random());

window.alert(Math.random()* 100);

Math.PI;

Math.round(4.6);