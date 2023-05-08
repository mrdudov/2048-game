export { init }


const game_board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
]

function init() {
    for (let i=0; i < 3; i++) {
        let line_no = getRandomInt(0, 4)
        let cell_no = getRandomInt(0, 4)
        game_board[line_no][cell_no] = 2
    }
    return game_board
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min) + min);
}
