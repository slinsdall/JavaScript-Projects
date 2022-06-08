function Ride_Function() {
    var Height, Can_ride;
    Height =  document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";

}

function Vote_Function() {//This function will have input and then display the result
    var Age, Can_vote;
    Age =  document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to " : "You can";
    document.getElementById("Vote").innerHTML = Can_vote + " vote.";

}

function New_and_This() {
    var Age, Can_Buy;
    Age =  document.getElementById("Age").value;
    Can_Buy = (Age < 21) ? "You are not old enough to " : "You can";
    document.getElementById("Buy").innerHTML = Can_Buy + " buy alcohol.";

}

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
   
}

  function count_Function() {
      document.getElementById("Counting").innerHTML = Count();
      function Count() {
          var Starting_Point = 9;
          function Plus_one() {Starting_Point += 1;}
          Plus_one();
          return Starting_Point;
      }
  }