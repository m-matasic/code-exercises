class Question{
    constructor(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    displayQuestion(){
        $("#question-num-max").text(questions.length);
        $("#question").text(this.question);
 
        $(".ans").each((index, value) => {
            $(value).text(this.answers[index]);
        });
    }
    checkAnswer(ans, callback){
        let sc;
        if(ans === this.correct){
            sc = callback(true);
        }else{
            sc = callback(false);
        }
        if(num === questions.length){
            this.displayScore(sc);
        }
    }
    displayScore(score){
        $("#answers").html(
        `<h1>Game Over</h1>
        <p id='game-score'>You scored: ${score} / ${questions.length}</p>`);
        
        $("h5").addClass("d-none");
        $("#reload").toggleClass("d-none");
    }
}

/* QUESTIONS */
const q1 = new Question(
    '5 + 10',
    ['5', '10', '15', '20'],
    2);
const q2 = new Question(
    '15 + 10',
    ['15', '10', '35', '25'],
    3);
const q3 = new Question(
    '5 * 10',
    ['15', '50', '40', '45'],
    1);
const q4 = new Question(
    '50 / 4',
    ['12.5', '14', '15', '11.5'],
    0);
const q5 = new Question(
    '1482 / 8',
    ['180.5', '190.75', '185.25', '195.2'],
    2);
const questions = [q1, q2, q3, q4, q5];

/* SHOW QUESTIONS, ANSWERS AND CHECK ANSWER*/
let num = 0;
function nextQuestion(){
    if(num !== questions.length){
        questions[num].displayQuestion();
        $("#question-num").text(num+1);
    }
    num++;
}
nextQuestion();

$(".ans").each(function(index){
    $(this).click(() => {
        questions[num-1].checkAnswer(index, keepScore);
        nextQuestion();
        $(".ans").blur();
    });
});

/* CALCULATE SCORE */
function score(){
    let sc = 0;
    return (correct) => {
        if(correct){
            sc++;
        }
        return sc;
    }
}
const keepScore = score();

/* PLAY AGAIN */
$("#reload").click(() => location.reload());