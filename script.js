const game1 = document.querySelector(".game");
const cells = document.querySelectorAll(".cell");
let player=1;
player= Number(localStorage.getItem("chosenToken"));
let turn=0;
let playerToken= player === 1 ? "X" : "O";

const game = [...cells];
const row1 = game.slice(0,3);
const row2 = game.slice(3,6);
const row3 = game.slice(6,9);
const diagonal1 = [game[0], game [4], game [8]];
const diagonal2 = [game[2], game [4],game [6]];
const col1 = [game[0], game [3],game [6]];
const col2 = [game[1], game [4],game [7]];
const col3 = [game[2], game [5],game [8]];





game.forEach((element,index) => {
    element.addEventListener('click', (event) => {
        console.log(index);
        
        
        if (element.innerText === "") {
            element.innerText= playerToken;
            
            cpuPlay();
            
            turn++;
            console.log(typeof(turn));
            console.log(`turn:${turn}`);
            
                if (turn>=4) {
                    switch (index) {
                        case 0:
                            checkWinCondition(row1);
                            checkWinCondition(col1);
                            checkWinCondition(diagonal1);

                            break;
                        case 1:
                            checkWinCondition(row1);
                            checkWinCondition(col2);
                            break;
                        case 2:
                            checkWinCondition(row1);
                            checkWinCondition(col3);
                            checkWinCondition(diagonal2);

                            break;
                        case 3:
                            checkWinCondition(row2);
                            checkWinCondition(col1);
                            break;
                        case 4:
                            checkWinCondition(row2);
                            checkWinCondition(col2);
                            checkWinCondition(diagonal1);
                            checkWinCondition(diagonal2);

                            break;
                        case 5:
                            checkWinCondition(row3);
                            checkWinCondition(col3);
                            break;
                        case 6:
                            checkWinCondition(row3);
                            checkWinCondition(col1);
                            checkWinCondition(diagonal2);
                            break;
                        case 7:
                            checkWinCondition(row3);
                            checkWinCondition(col2);
                            break;
                        case 8:
                            checkWinCondition(row3);
                            checkWinCondition(col3);
                            checkWinCondition(diagonal1);
                            break;
                    
                        default:
                            break;
                    }
                            
                    if (turn=== 9) {
                        setTimeout(() => {
                            resetBoard();
                        }, 200);
                        
                    }
                    }

                    /* player = player === 1 ? 2: 1;
            console.log(`next player:${player}`); */
         }

        
     
    });
}); 
 
// now with the object containing arrays linetocheck as one of the properties
 function checkWinCondition (lineToCheck) {
    // console.log('Checking line:', lineToCheck.map(cell => cell.innerText));
    
    const winner = lineToCheck[0].innerText.trim();
    if (winner && lineToCheck.every(cell => cell.innerText.trim()===winner)) {
        // without timeout the alert will display before the text even changes in the cell
        
        
        setTimeout(() => {
            window.alert(winner +" "+  "WINS!"); 
            resetBoard();
            window.location.href= "index.html";
        }, 100);

        
    }

    
} 
function resetBoard() {
    cells.forEach(cell => cell.innerText="");
    player=1;
    turn=0;
}

// testing event delegation from parent 
const selectToken = document.querySelector("#selectToken");
const xToken = document.querySelector("#x");
const oToken = document.querySelector("#o");
selectToken.addEventListener('click', (event) => {
    localStorage.setItem("chosenToken", event.target== xToken ? 1 : 2 );
    player= Number(localStorage.getItem("chosenToken"));
    window.alert("you play as" + player);
    window.location.href = "game.html";
});

function cpuPlay(difficulty) {
    const cpuToken= player === 1 ? "O" : "X";
    const emptyCells = game.filter(cell => cell.innerText === "");
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const cpuMove = emptyCells[randomIndex];
    cpuMove.innerText = cpuToken;
    turn++;
    
}









    

