document.write(typeof 3);//This would show a number, only one document.write can be used at one time.

document.write("10" +5);//This is coercion and would make the number displayed 105

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

document.getElementById("Test").innerHTML = isNaN('This is a string');

document.write(2E310);//Remember only one document.write at a time, mulitples are in here for the course, to run must remove all but one.

document.write(-3E310);

document.write(10 > 2);//This is Boolean and would result with true

document.write(10<2);//This would result with false

console.log(5+5)

document.write(10==10);//This is to check for equility-This one would be true

document.write(3==11);//This would be false

X=10;
Y=10;
document.write(X===Y);//This tells the computer to check whether the two pieces of data are equal in both Value and Type

document.write(5>2 && 10>4);//&& means AND

document.write(5>10 || 10>4);//|| Means OR (! means Not Written)

function not_Function() {
    document.getElementById("Not").innerHTML = !(20>10);
}

function Ride_Function() {
    var Height, Can_ride;
    Height= document.getElementById("Height").ariaValueMax;
    Can_ride = (Height <52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";

}