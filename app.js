$(document).ready(function() {

    // Initialize Firebase
var config = {
    apiKey: "AIzaSyBhICkLPrON0sdt6j7KxsI6O75vgO5oAeg",
    authDomain: "trainschedule-7e990.firebaseapp.com",
    databaseURL: "https://trainschedule-7e990.firebaseio.com",
    projectId: "trainschedule-7e990",
    storageBucket: "trainschedule-7e990.appspot.com",
    messagingSenderId: "1060928334670"
};
firebase.initializeApp(config);

var database = firebase.database();



var currentTime = moment().format();
console.log("It's currently " + moment(currentTime).format("hh:mm A"));



$("#submitButton").on("click", function(){
// event.preventDefault();

let trainName = $("#trainName").val().trim();
let destination = $("#destination").val().trim();
let firstTime = moment($("#firstTime").val().trim(), "HH:mm").format("X");
let frequency = $("#frequency").val().trim();

let newTrain = {
    name: trainName,
    destination: trainDest,
    time: trainTime,
    frequency: trainFreq
};


//give train to firebase 
database.ref().push(newTrain);


$("#trainName").val("");
$("#destination").val("");
$("#firstTime").val("");
$("#frequency").val("");

});


var firstTimeConverted = moment(firstTime, "hh:mm a").subtract(1, "years");
console.log("First Time Converted: " + firstTimeConverted);

var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("Difference in Time: " + diffTime);

var tRemainder = diffTime % frequency;
console.log(tRemainder);

var nextarrival = moment().add(minaway, "minutes");
console.log("Next Arrival: " + moment(nextarrival).format("hh:mm a"));

var minaway = frequency - tRemainder;
console.log("Minutes Until Next Train: " + minaway);



$(".table").find("tbody").append($("<tr>")
   .append($("<td>").text(trainName))
   .append($("<td>").text(destination))
   .append($("<td>").text(frequency))
   .append($("<td>").text((nextarrival).format("hh:mm A")))
   .append($("<td>").text(minaway)))

});