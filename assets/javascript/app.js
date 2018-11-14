

// all the questions

var questions = [
    {
        q: "Q1",
        answers: {
            a1: "a1",
            a2: "a2",
            a3: "a3",
            a4: "a4"
        }
    },
    {
        q: "Q2",
        answers: {
            a1: "a1",
            a2: "a2",
            a3: "a3",
            a4: "a4"
        }
    },
    {
        q: "Q3",
        answers: {
            a1: "a1",
            a2: "a2",
            a3: "a3",
            a4: "a4"
        }
    },
    {
        q: "Q4",
        answers: {
            a1: "a1",
            a2: "a2",
            a3: "a3",
            a4: "a4"
        }
    },
    {
        q: "Q5",
        answers: {
            a1: "a1",
            a2: "a2",
            a3: "a3",
            a4: "a4"
        }
    },
];
// Variable showQuestion will hold the setInterval when we start the slideshow
var showQuestion;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

var timer = 5;
var intervalId;

// Count will keep track of the index of the currently displaying question.
var count = 0;

// hide certain sections
$(".correct-answer").hide();
$("#tally-holder").hide();
$("#reset").hide();

//Use jQuery to run "startSlideshow" when we click the "start" button.
// $("#start").on("click", function () {
//     startSlideshow();

// });

// done: Use jQuery to run "stopSlideshow" when we click the "stop" button.
$("#reset").on("click", function () {
    resetSlideshow();

});



// This function will replace display whatever question corresponds to the count index
function displayQuestion() {
    // displaying question and answers on the html
    $(".question-holder").show();
    $(".correct-answer").hide();
    $(".question-holder").html(questions[count].q + "<br>");
    $(".question-holder").append(questions[count].answers.a1 + "<br>");
    $(".question-holder").append(questions[count].answers.a2 + "<br>");
    $(".question-holder").append(questions[count].answers.a3 + "<br>");
    $(".question-holder").append(questions[count].answers.a4 + "<br>");
    timer = 5;

}

function correctAnswer() {

    // done: Increment the count by 1.
    count++;


    $(".question-holder").hide();
    $(".correct-answer").show();
    $(".correct-answer").html("Correct answer")

    // Use a setTimeout to run displayImage after 1 second.
    setTimeout(displayQuestion, 3000);
    $(".timer").html("0");

}
function startSlideshow() {


    showQuestion = setInterval(correctAnswer, 5000)

}
function resetSlideshow() {

    // done: Put our clearInterval here:
    clearInterval(showQuestion);
}


//  When the start button gets clicked, execute the run function.
$("#start").on("click", startTimer);


function startTimer() {

    intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

    //  Decrease number by one.
    timer--;

    //  Show the number in the .timer tag.
    $(".timer").html(timer);


    //  Once number hits zero...
    if (timer === 0 && count === questions.length) {
        // show tally
        $("#tally-holder").show();
        $("#tally-holder").html("All done! Here is how you did: </br>");
        $("#tally-holder").append("Correct answers: " + correctAnswers + "</br>");
        $("#tally-holder").append("Incorrect answers: " + incorrectAnswers + "</br>");
        $("#tally-holder").append("Unanswered answers: " + unanswered);
        // show reset button
        $("#reset").show();
        stop();
    } else if (timer === 0) {

        //  ...run the stop function.

        correctAnswer();


    }
}

//  The stop function
function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
}



// This will run the display image function as soon as the page loads.
displayQuestion();