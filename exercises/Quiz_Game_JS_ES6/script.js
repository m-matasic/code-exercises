const qNum_span = document.getElementById("question-num");
const qNumMax_span = document.getElementById("question-num-max");
const question_span = document.getElementById("question");
const answerBtn = document.querySelectorAll("button");
const answers_div = document.getElementById("answers");
const qNum_h5 = document.querySelector("h5");
const reloadBtn = document.getElementById("reload");

class Question{
    constructor(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    displayQuestion(){
        qNumMax_span.textContent = questions.length;
        question_span.textContent = this.question;

        for(let i = 0; i < this.answers.length; i++){
            answerBtn[i].textContent = this.answers[i];
        }
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
        answers_div.innerHTML = 
        `<h1>Game Over</h1>
        <p id='game-score'>You scored: ${score} / ${questions.length}</p>`;
        qNum_h5.classList.add("d-none");
        reloadBtn.classList.toggle("d-none");
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
        qNum_span.textContent = num+1;
    }
    num++;
}
nextQuestion();

answerBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        questions[num-1].checkAnswer(index, keepScore);
        nextQuestion();
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
reloadBtn.addEventListener("click", () => location.reload());