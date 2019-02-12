let p1Score = 0;
let p2Score = 0;
let winNum = 5;
let gameOver = false;

$("#player1up").click( () => addToPlayer1());
$("#player2up").click( () => addToPlayer2());

$("#player1down").click( () => subFromPlayer1());
$("#player2down").click( () => subFromPlayer2());

$("input[type='number']").on("change", function(){
    $("#winNum").text($(this).val());
    winNum = parseInt($(this).val());
    reset();
});

$("#resetBtn").click( () => reset());
$("#resetHistoryBtn").click( () => resetHistory());

function reset(){
    p1Score = 0;
    p2Score = 0;
    $("#score1").removeClass("winner");
    $("#score2").removeClass("winner");
    $("#score1").text(p1Score);
    $("#score2").text(p2Score);
    gameOver = false;
}
function resetHistory(){
    $("#historyItem").text("");
}

function addToPlayer1(){
    if(!gameOver){
        p1Score++;
        $("#score1").text(p1Score);
        addHistory();
        if(p1Score === winNum){
            gameOver = true;
            $("#score1").addClass("winner");
        }
    }
}
function addToPlayer2(){
    if(!gameOver){
        p2Score++;
        $("#score2").text(p2Score);
        addHistory();
        if(p2Score === winNum){
            gameOver = true;
            $("#score2").addClass("winner");
        }
    }
}

function subFromPlayer1(){
    if(p1Score >= 1){
        p1Score--;
        $("#score1").text(p1Score);
        addHistory();
        if(p1Score+1 === winNum){
            $("#score1").removeClass("winner");
            gameOver = false;
        }
    }
}
function subFromPlayer2(){
    if(p2Score >= 1){
        p2Score--;
        $("#score2").text(p2Score);
        addHistory();
        if(p2Score+1 === winNum){
            $("#score2").removeClass("winner");
            gameOver = false;
        }
    }
}
function addHistory(){
    const histP1 = `${$("#player1").text()}: ${p1Score}`;
    const histP2 = `${$("#player2").text()}: ${p2Score}`;
    const space = "\u00A0\u00A0 - \u00A0\u00A0";

    $("ol").append(`<li> ${histP1} ${space} ${histP2} </li>`);
}