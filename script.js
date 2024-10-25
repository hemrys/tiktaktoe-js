// const game1 = document.querySelector(".game");
const cells = document.querySelectorAll(".cell");
let player=1;
let turn=0;

// const game =Array.from( cells, cell => cell.textContent);
// console.log(game);
// both work about the same

/* const game = [...cells].map( cell => cell.textContent );
console.log(game); */

const game = [...cells];
console.log(game);
const row1 = game.slice(0,3);
// console.log(row1);
const row2 = game.slice(3,6);
console.log(row2);
const row3 = game.slice(6,9);
// console.log(row3);

// console.log(col3);


const diagonal1 = [game[0], game [4], game [8]];
const diagonal2 = [game[2], game [4],game [6]];
const col1 = [game[0], game [3],game [6]];
const col2 = [game[1], game [4],game [7]];
const col3 = [game[2], game [5],game [8]];
console.log(diagonal1);
console.log(diagonal2);

let cellToCheck;

 console.log(cells);
 
const winningLinesMap = {
    0: [[row1, col1, diagonal1]],
    1: [[row1, col2]],
    2: [[row1, col3, diagonal2]],
    3: [[row2, col1]],
    4: [[row2, col2, diagonal1, diagonal2]],
    5: [[row3, col3]],
    6: [[row3, col1, diagonal2]],
    7: [[row3, col2]],
    8: [[row3, col3, diagonal1]]
};





 game.forEach((element,index) => {
    element.addEventListener('click', (event) => {
        console.log(index);
        
        
        if (element.innerText === "") {
            element.innerText= player === 1 ? "X" : "O";
            
            
            turn++;
            console.log(`turn:${turn}`);
                if (turn>=5) {
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
                
                    }

                    player = player === 1 ? 2: 1;
            console.log(`next player:${player}`);
         }

        
     
    });
}); 
 
function checkWinCondition (lineToCheck) {
    // console.log('Checking line:', lineToCheck.map(cell => cell.innerText));
    
    const winner = lineToCheck[0].innerText.trim();
    if (winner && lineToCheck.every(cell => cell.innerText.trim()===winner)) {
        // without timeout the alert will display before the text even changes in the cell
        setTimeout(() => {
            window.alert(winner +" "+  "WINS!")
            cells.forEach(cell => cell.innerText="");
            // need to treat qselecall as an array and iterate over it
        }, 100);
        
    }

    // return lineToCheck.every(cell => cell.innerText=="X" || cell.innerText=="O");
    
}











    

