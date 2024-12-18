const game1 = document.querySelector(".game");
const cells = document.querySelectorAll(".cell");
let player=1;
player= Number(localStorage.getItem("chosenToken"));
let turn=0;
let playerToken= player === 1 ? "X" : "O";

// default value , add a select menu in landing page
// let difficulty= "easy";
let difficulty= "easy";



const game = [...cells];
const row1 = game.slice(0,3);
const row2 = game.slice(3,6);
const row3 = game.slice(6,9);
const diagonal1 = [game[0], game [4], game [8]];
const diagonal2 = [game[2], game [4],game [6]];
const col1 = [game[0], game [3],game [6]];
const col2 = [game[1], game [4],game [7]];
const col3 = [game[2], game [5],game [8]];



// can write this with delegation instead

 game.forEach((element,index) => {
    element.addEventListener('click', (event) => {
        console.log(index);
        
        
        if (element.innerText === "") {
            element.innerText= playerToken;
            cpuPlay(difficulty);
            turn++;
            
            
                if (turn>=4) {
                   const winConditions= getWinConditions(index);
                   winConditions.forEach(checkWinCondition);
                            
                    if (turn=== 9) {
                        setTimeout(resetBoard,200);
                        
                    }
                    }

                    
         }

        
     
    });
});  

function getWinConditions(index) {
    switch (index) {
        case 0:
            return [row1,col1,diagonal1];   


            break;
        case 1:
            return [row1,col2];
            break;
        case 2:
           return [row1,col3,diagonal2];

            break;
        case 3:
           return [row2,col1];
            break;
        case 4:
            return [row2,col2,diagonal1,diagonal2];

            break;
        case 5:

            return [row2,col3];
            break;
        case 6:

            return [row3,col1,diagonal2];
            break;
        case 7:
            
            return [row3,col2];
            break;
        case 8:

            return [row3,col3,diagonal1];
            break;
    
        default:
            return [];
            break;
    }
}
  



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
    window.location.href= "index.html";
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
    if (difficulty === "easy") {
        cpuMoveEasy();
    } else if (difficulty === "hard") {
        cpuMoveHard();
    }
}


function cpuMoveEasy() {
    const cpuToken= player === 1 ? "O" : "X";   
    const emptyCells = game.filter(cell => cell.innerText === "");
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    if (emptyCells.length === 0) {
        return
    }
    // was a bit too fast without timeout
    setTimeout(() => {
        const cpuMove = emptyCells[randomIndex];
    cpuMove.innerText = cpuToken;
    // check win con 
    const winConditions= getWinConditions(randomIndex);
    winConditions.forEach(checkWinCondition);
    turn++;
    }, 350);
    
}

function cpuMoveHard() {
    const cpuToken= player === 1 ? "O" : "X";   
    const emptyCells = game.filter(cell => cell.innerText === "");
    
// just copy paste of minmax recrusive function here:
// or make custom slightly more/less efficient algorithm if i manage to get it to work
    
}









    

