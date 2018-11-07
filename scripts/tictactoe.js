$(document).ready(function () {
    let player1 = "X";
    let player2 = "O";
    let currentTurn = 1;
    let movesMade = 0;

    let sqr = $(".block");

    sqr.on("click", function () {
        movesMade++
        if (this.innerHTML !== player1 && this.innerHTML !== player2) {
            if (currentTurn === 1) {
                event.target.innerHTML = player1;
                event.target.style.color = "blue";
                turn.innerHTML = "O Turn"
                WinCombos()
                currentTurn++;
            } else {
                event.target.innerHTML = player2;
                event.target.style.color = "red";
                turn.innerHTML = "X Turn";
                WinCombos();
                currentTurn--;
            }

        }
    

    })
    $("#replay").on("click", function () {
        sqr.each(function(){
            $(this).html("").removeAttr("style");
            turn.innerHTML = "Play";
        
        })



    });
})

function winner(b1, b2, b3) {
    b1.style.background = "yellow";
    b2.style.background = "yellow";
    b3.style.background = "yellow";
    turn.innerHTML = b1.innerHTML + " Won!!";

}
function WinCombos() {
    let sqr1 = document.getElementById("sqr1"),
        sqr2 = document.getElementById("sqr2"),
        sqr3 = document.getElementById("sqr3"),
        sqr4 = document.getElementById("sqr4"),
        sqr5 = document.getElementById("sqr5"),
        sqr6 = document.getElementById("sqr6"),
        sqr7 = document.getElementById("sqr7"),
        sqr8 = document.getElementById("sqr8"),
        sqr9 = document.getElementById("sqr9");

    //determine all possibilitites 
    if (sqr1.innerHTML !== "" && sqr1.innerHTML === sqr2.innerHTML && sqr1.innerHTML === sqr3.innerHTML) {
        winner(sqr1, sqr2, sqr3);
        return true
    }
    else if (sqr4.innerHTML !== "" && sqr4.innerHTML === sqr5.innerHTML && sqr4.innerHTML === sqr6.innerHTML)
        winner(sqr4, sqr5, sqr6);
    else if (sqr7.innerHTML !== "" && sqr7.innerHTML === sqr8.innerHTML && sqr7.innerHTML === sqr9.innerHTML)
        winner(sqr7, sqr8, sqr9);
    else if (sqr1.innerHTML !== "" && sqr1.innerHTML === sqr5.innerHTML && sqr1.innerHTML === sqr9.innerHTML)
        winner(sqr1, sqr5, sqr9);
    else if (sqr3.innerHTML !== "" && sqr3.innerHTML === sqr5.innerHTML && sqr3.innerHTML === sqr7.innerHTML)
        winner(sqr3, sqr5, sqr7);
    else if (sqr1.innerHTML !== "" && sqr1.innerHTML === sqr4.innerHTML && sqr1.innerHTML === sqr7.innerHTML)
        winner(sqr1, sqr4, sqr7);
    else if (sqr2.innerHTML !== "" && sqr2.innerHTML === sqr5.innerHTML && sqr2.innerHTML === sqr8.innerHTML)
        winner(sqr2, sqr5, sqr8);
    else if (sqr3.innerHTML !== "" && sqr3.innerHTML === sqr6.innerHTML && sqr3.innerHTML === sqr9.innerHTML)
        winner(sqr3, sqr6, sqr9);

    
}



