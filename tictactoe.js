const PLAYER_X = "X";
const PLAYER_O = "O";
const board = document.getElementById("board");
let playerName = PLAYER_X;

function makeColumnHtml(id, marker) {
    return `<td id="${id}" onclick="cellClick(this)">[${marker}]</td>`;
}

function cellClick(cell) {
    cell.innerHTML = makeColumnHtml(cell.id, playerName);
    switchPlayer();
}

function displayPlayerName() {
    document.getElementById("currentPlayer").innerText = "Current Player: " + playerName;
}

function switchPlayer() {
    playerName = (playerName == PLAYER_X) ? PLAYER_O : PLAYER_X;
    displayPlayerName();
}

function init() {
    playerName = PLAYER_X;
    displayPlayerName();
    let boardHtml = "";
    
    for (let ix = 0; ix < 3; ix++) {
        boardHtml += "<tr>";
    
        for (let jx = 0; jx < 3; jx++) {
            boardHtml += makeColumnHtml(`${ix}_${jx}`, "_");
        }
        
        boardHtml += "</tr>";
    }
    
    board.innerHTML = boardHtml;
}

init();
