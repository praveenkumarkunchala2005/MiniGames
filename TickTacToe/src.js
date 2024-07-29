let cells = document.querySelectorAll('.cell');
let reset = document.querySelector('.reset');
let resultEle = document.querySelector('.result');
console.log(resultEle);
let currP = 'X';
let gameover = false;
let winner = null;
let winningComb = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,4,8], [2,4,6],
    [0,3,6], [1,4,7], [2,5,8]
];

function checkWinner() {
    for(let comb of winningComb) {
        if (cells[comb[0]].innerText === currP &&
            cells[comb[1]].innerText === currP &&
            cells[comb[2]].innerText === currP) {
            gameover = true;
            winner = currP;
            break;
        }
    }
}

for(let cell of cells) {
    cell.addEventListener('click', () => {
        if (!gameover && cell.innerText === "") {
            cell.innerText = currP;
            if (currP === 'X') {
                cell.classList.add("Bolder");
            } else {
                cell.classList.add("lighter");
            }
            checkWinner();
            if (gameover) {
                cell.innerText = currP;
                resultEle.innerHTML = (`Player ${winner} won the game!`);
                console.log(`Player ${winner} won the game!`);
                console.log(resultEle);
                return;
            }
            currP = currP === 'X' ? 'O' : 'X';
        } else if (gameover) {
            resultEle.innerHTML = 'Invalid move! ' +`Player ${winner} won the game!`;
        } else if(cell.innerText !== "") {
            resultEle.innerHTML = 'Invalid move! ';
        }
    });
};

reset.addEventListener('click', () => {
    for(let cell of cells) {
        cell.innerText = "";
        cell.classList.remove("Bolder");
        cell.classList.remove("lighter");
    }
    currP = 'X';
    gameover = false;
    winner = null;
});