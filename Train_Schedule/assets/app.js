var config = {
    apiKey: "AIzaSyBhICkLPrON0sdt6j7KxsI6O75vgO5oAeg",
    authDomain: "trainschedule-7e990.firebaseapp.com",
    databaseURL: "https://trainschedule-7e990.firebaseio.com",
    projectId: "trainschedule-7e990",
    storageBucket: "trainschedule-7e990.appspot.com",
    messagingSenderId: "1060928334670"
};
firebase.initializeApp(config);

database = firebase.database();

$("#submitButton").on("click", function(){
event.preventDefault();

let trainName = " ";
let destination = " ";
let firstTime = " "; 
let frequency = " ";

//Add table rows with jquery
// let newTrain = $("<tr>");
// newTrain.addClass("<tr>");


trainName = $("#train-name").val().trim()
destination = $("#destination").val().trim()
firstTime = $("#first-time").val().trim()
frequency = $("#frequency").val().trim()

database.ref().set({
    trainName : trainName,
    destination: destination,
    firstTime : firstTime,
    frequency : frequency

})


});