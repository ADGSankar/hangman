const puzzleEl = document.querySelector('#puzzle')
const gussesEl = document.querySelector('#guesses')
// document.querySelector('#puzzle').textContent = player1.puzzle;
// document.querySelector('#guesses').textContent = player1.statusMessage;
let player1

const render = () => {
    puzzleEl.innerHTML = ''
    gussesEl.textContent = player1.statusMessage
    player1.puzzle.split('').forEach(charactor => {
        const span = document.createElement('span')
        span.textContent = charactor
        puzzleEl.appendChild(span)
    })
}

window.addEventListener('keypress', (e) => {
    player1.makeGuess(e.key)
    render()
})

const startGame = async () => {
    const puzzle = await getPuzzle(1)
    player1 = new Hungman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle(1).then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })

// getPuzzle('1').then((data) => {
//     console.log(data)
// }, (err) => {
//     console.log("Error occured")
// })

// console.log(getPuzzleSync())