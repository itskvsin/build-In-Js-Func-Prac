const cells = document.querySelectorAll(".cell")
const playerStatus = document.querySelector(".status")
const restart = document.querySelector("#restart")
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let options = ['','','','','','','','','']

let currentPlayer = 'X'

let running = false

initailizeGame()

function initailizeGame(){
    running = true
    cells.forEach(cell => {cell.addEventListener("click" , cellClicked)});
    playerStatus.innerHTML = `${currentPlayer}'s turn`
}

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex")
    
    if (options[cellIndex] != "" || !running) {
        return
    }

    updateCell(this , cellIndex)
    checkWinner()
}

function updateCell(cell , index){
    options[index] = currentPlayer
    cell.textContent = currentPlayer
}

function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X"
    playerStatus.textContent = `${currentPlayer}'s turn`
}

function checkWinner(){
    let winner = false

    for (let i = 0; i < winConditions.length; i++) {
        const Condition = winConditions[i]
        const cellA = options[Condition[0]]
        const cellB = options[Condition[1]]
        const cellC = options[Condition[2]]

        if (cellA == "" || cellB == "" || cellC == "") {
            continue
        } 
        if (cellA == cellB && cellB == cellC) {
            winner = true
            break
        }
    }

    if (winner) {
        playerStatus.textContent = `${currentPlayer} Wins`
        running = false
    }
    else if(!options.includes("")){
        playerStatus.textContent = `Draw`
        running = false
    } else {
        changePlayer()
    }
}

function restartGame(){
    currentPlayer = "X"
    options = ['','','','','','','','','']
    playerStatus.textContent = `${currentPlayer}'s Turn`
    cells.forEach(cell => cell.textContent = "")
    running = true
}