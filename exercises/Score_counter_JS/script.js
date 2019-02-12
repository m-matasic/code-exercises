const player1up = document.getElementById("player1up");
const player2up = document.getElementById("player2up");
const resetBtn = document.getElementById("resetBtn");
const player1down = document.getElementById("player1down");
const player2down = document.getElementById("player2down");
const resetHistoryBtn = document.getElementById("resetHistoryBtn");

const score1_span = document.getElementById("score1");
const score2_span = document.getElementById("score2");
const winNum_span = document.getElementById("winNum");
const historyItem_ol = document.getElementById("historyItem");

const numInput = document.querySelector("input");

let p1Score = 0;
let p2Score = 0;
let winNum = 5;
let gameOver = false;

player1up.addEventListener("click", () => addToPlayer1());
player2up.addEventListener("click", () => addToPlayer2());

player1down.addEventListener("click", () => subFromPlayer1());
player2down.addEventListener("click", () => subFromPlayer2());

numInput.addEventListener("change", function(){
    winNum_span.textContent = this.value;
    winNum = Number(this.value);
    reset();
});
resetBtn.addEventListener("click", () => reset());
resetHistoryBtn.addEventListener("click", () => resetHistory());

function reset(){
    p1Score = 0;
    p2Score = 0;
    score1_span.classList.remove("winner");
    score2_span.classList.remove("winner");
    score1_span.textContent = p1Score;
    score2_span.textContent = p2Score;
    gameOver = false;
}
function resetHistory(){
    historyItem_ol.textContent = "";
}

function addToPlayer1(){
    if(!gameOver){
        p1Score++;
        score1_span.textContent = p1Score;
        addHistory();
        if(p1Score === winNum){
            gameOver = true;
            score1_span.classList.add("winner");
        }
    }
}
function addToPlayer2(){
    if(!gameOver){
        p2Score++;
        score2_span.textContent = p2Score;
        addHistory();
        if(p2Score === winNum){
            gameOver = true;
            score2_span.classList.add("winner");
        }       
    }
}
function subFromPlayer1(){
    if(p1Score >= 1){
        p1Score--;
        score1_span.textContent = p1Score;
        addHistory();
        if(p1Score+1 === winNum){
            score1_span.classList.remove("winner");
            gameOver = false;
        }
    }
}
function subFromPlayer2(){
    if(p2Score >= 1){
        p2Score--;
        score2_span.textContent = p2Score;
        addHistory();
        if(p2Score+1 === winNum){
            score2_span.classList.remove("winner");
            gameOver = false;
        }
    }
}
function addHistory(){
    const player1Name = document.getElementById("player1").textContent;
    const player2Name = document.getElementById("player2").textContent;
    const histP1 = `${player1Name}: ${p1Score}`;
    const histP2 = `${player2Name}: ${p2Score}`;
    const space = "\u00A0\u00A0 - \u00A0\u00A0";
    const historyData = `${histP1} ${space} ${histP2}`;

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(historyData));
    historyItem_ol.appendChild(li);
}