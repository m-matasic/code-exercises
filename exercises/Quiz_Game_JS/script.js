var qNum_span = document.getElementById("question-num");
var qNumMax_span = document.getElementById("question-num-max");
var question_span = document.getElementById("question");
var answerBtn = document.querySelectorAll("button");
var answers_div = document.getElementById("answers");
var qNum_h5 = document.querySelector("h5");
var reloadBtn = document.getElementById("reload");

var Question = function(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function(){
    qNumMax_span.textContent = questions.length;
    question_span.textContent = this.question;

    for(var i = 0; i < this.answers.length; i++){
        answerBtn[i].textContent = this.answers[i];
    }
}
Question.prototype.checkAnswer = function(ans, callback){
    var sc;
    if(ans === this.correct){
        sc = callback(true);
    }else{
        sc = callback(false);
    }
    if(num === questions.length){
        this.displayScore(sc);
    }
}
Question.prototype.displayScore = function(score){
    answers_div.innerHTML = 
        "<h1>Game Over</h1>" +
        "<p id='game-score'>You scored: " + score + " / " + questions.length + "</p>";
    qNum_h5.classList.add("d-none");
    reloadBtn.classList.toggle("d-none");
}

/* QUESTIONS */
var q1 = new Question(
    '5 + 10',
    ['5', '10', '15', '20'],
    2);
var q2 = new Question(
    '15 + 10',
    ['15', '10', '35', '25'],
    3);
var q3 = new Question(
    '5 * 10',
    ['15', '50', '40', '45'],
    1);
var q4 = new Question(
    '50 / 4',
    ['12.5', '14', '15', '11.5'],
    0);
var q5 = new Question(
    '1482 / 8',
    ['180.5', '190.75', '185.25', '195.2'],
    2);
var questions = [q1, q2, q3, q4, q5];

/* SHOW QUESTIONS, ANSWERS AND CHECK ANSWER*/
var num = 0;
function nextQuestion(){
    if(num !== questions.length){
        questions[num].displayQuestion();
        qNum_span.textContent = num+1;
    }
    num++;
}
nextQuestion();

answerBtn.forEach(function(btn, index){
    btn.addEventListener("click", function(){
        questions[num-1].checkAnswer(index, keepScore);
        nextQuestion();
    });
});

/* CALCULATE SCORE */
function score(){
    var sc = 0;
    return function(correct){
        if(correct){
            sc++;
        }
        return sc;
    }
}
var keepScore = score();

/* PLAY AGAIN */
reloadBtn.addEventListener("click", function(){
    location.reload();
});