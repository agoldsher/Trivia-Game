
// all the questions

var questions = [
    {
        q: "Which of the following foods is vegan?",
        answers: {
            a1: "Honey",
            a2: "Marshmellows",
            a3: "Oreos",
            a4: "Milk"
        },
    },
    {
        q: "Which of the following foods is vegetarian?",
        answers: {
            a1: "Swedish Fish",
            a2: "Caesar Salad",
            a3: "Jell-O",
            a4: "Candy Corn"
        },
    },
    {
        q: "A ketogenic diet is a diet where you limit your ______ intake.",
        answers: {
            a1: "Fat",
            a2: "Protein",
            a3: "Minerals",
            a4: "Carbohydrate"
        },
    },
    {
        q: "Which of the following foods are keto-friendly?",
        answers: {
            a1: "Orange",
            a2: "Edamame",
            a3: "Cucumbers",
            a4: "Potatoes"
        },
    },
    {
        q: "Which of the following foods is high in fat?",
        answers: {
            a1: "Tomato",
            a2: "Avacado",
            a3: "Chicken Breast",
            a4: "Maple Syrup"
        },
    },
    {
        q: "Which of the following foods can be eaten as part of the vegan and keto diet?",
        answers: {
            a1: "Rice",
            a2: "Bread",
            a3: "Butter",
            a4: "Strawberries"
        }
    }
];
console.log(questions.length);
var timer = 120;
// start the page with the questions, the done button and the tally screen hidden
$(".timer").hide();
$(".question-holder").hide();
$("#tally-holder").hide();
$("#done").hide();

// set the tally counters to zero
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var count = 0;
//  Variable that will hold our interval ID 
var intervalId;

function displayQuestion() {
    // displaying question and answers on the html
    $(".question-holder").show();
    for (var i = 0; i < questions.length; i++) {
        $(".question-holder").append("<h3>" + questions[i].q + "</h3>" + "</br>");
        $(".question-holder").append("<input type='radio' name='Q" + i +
            "' value='q" + [i] + "a1'>" + " " + questions[i].answers.a1 + " ");
        $(".question-holder").append("<input type='radio' name='Q" + i +
            "' value='q" + [i] + "a2'>" + " " + questions[i].answers.a2 + "  ");
        $(".question-holder").append("<input type='radio' name='Q" + i +
            "' value='q" + [i] + "a3'>" + " " + questions[i].answers.a3 + "  ");
        $(".question-holder").append("<input type='radio' name='Q" + i +
            "' value='q" + [i] + "a4'>" + " " + questions[i].answers.a4);
    }
}
//  When the stop button gets clicked, run the stop function.
$("#done").on("click", stop);
//  When the resume button gets clicked, execute the run function.
$("#start").on("click", run);

function run() {
    $(".timer").show();
    $(".timer").html("Timer: " + timer + " seconds");
    intervalId = setInterval(decrement, 1000);
    $("#start").hide();
    $("#done").show();
    displayQuestion();
}

//  The decrement function.
function decrement() {
    //  Decrease the timer by one.
    timer--;
    //  Display the active timer
    $(".timer").html("Timer: " + timer + " seconds");
    //  Once number hits zero...
    if (timer === 0) {
        //  ...run the stop function.
        stop();
    }
}

function stop() {

    //  Clears our intervalId
    clearInterval(intervalId);
    // hides the questions, the timer and the done button
    $(".question-holder").hide();
    $(".timer").hide();
    $("#done").hide();
    // question 1
    if ($('input[value=q0a3]').prop('checked')) {
        correctAnswers++;
    }
    else if ($('input[value=q0a1]').prop('checked') || $('input[value=q0a2]').prop('checked') || $('input[value=q0a4]').prop('checked')) {
        incorrectAnswers++;
    } else {
        unanswered++;
    }
    // question 2
    if ($('input[value=q1a1]').prop('checked')) {
        correctAnswers++;
    }
    else if ($('input[value=q1a2]').prop('checked') || $('input[value=q1a3]').prop('checked') || $('input[value=q1a4]').prop('checked')) {
        incorrectAnswers++;
    } else {
        unanswered++;
    }
    // question 3
    if ($('input[value=q2a4]').prop('checked')) {
        correctAnswers++;
    }
    else if ($('input[value=q2a1]').prop('checked') || $('input[value=q2a2]').prop('checked') || $('input[value=q2a3]').prop('checked')) {
        incorrectAnswers++;
    } else {
        unanswered++;
    }
    // question 4
    if ($('input[value=q3a3]').prop('checked')) {
        correctAnswers++;
    }
    else if ($('input[value=q3a1]').prop('checked') || $('input[value=q3a2]').prop('checked') || $('input[value=q3a4]').prop('checked')) {
        incorrectAnswers++;
    } else {
        unanswered++;
    }
    // question 5
    if ($('input[value=q4a2]').prop('checked')) {
        correctAnswers++;
    }
    else if ($('input[value=q4a1]').prop('checked') || $('input[value=q4a3]').prop('checked') || $('input[value=q4a4]').prop('checked')) {
        incorrectAnswers++;
    } else {
        unanswered++;
    }
    // question 6
    if ($('input[value=q5a4]').prop('checked')) {
        correctAnswers++;
    }
    else if ($('input[value=q5a1]').prop('checked') || $('input[value=q5a2]').prop('checked') || $('input[value=q5a3]').prop('checked')) {
        incorrectAnswers++;
    } else {
        unanswered++;
    }
    showTally();
}
// displays all the tallies at the end
function showTally() {
    $("#tally-holder").show();
    $("#tally-holder").html("All done! </br>Here is how you did: </br>");
    $("#tally-holder").append("Correct answers: " + correctAnswers + "</br>");
    $("#tally-holder").append("Incorrect answers: " + incorrectAnswers + "</br>");
    $("#tally-holder").append("Unanswered answers: " + unanswered);
}


