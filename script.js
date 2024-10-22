// const game1 = document.querySelector(".game");
const cells = document.querySelectorAll(".cell");
let player=1;

// const game =Array.from( cells, cell => cell.textContent);
// console.log(game);
// both work about the same

/* const game = [...cells].map( cell => cell.textContent );
console.log(game); */

const game = [...cells];
console.log(game);


// console.log(cells);

/* cells.forEach(element => {
    console.log(element.innerText);
}); */

// beginner version
/* game.forEach(element => {
    element.addEventListener('click', () => {
        if (player==1 && element.innerText==="") {
            element.innerText="X";
            
            player=2;
            console.log(player);

        }
        else if (player==2 && element.innerText==="") {
            element.innerText="O";
            player =1;
            console.log(player);

        }
        
    });
}); */

game.forEach(element => {
    element.addEventListener('click', () => {
     if (element.innerText === "") {
        element.innerText= player === 1 ? "X" : "O";
        player = player === 1 ? 2: 1;
        /* console.log(next player:${player}'); */
     }
    });
});


function checkWinCondition () {
    
}











    

