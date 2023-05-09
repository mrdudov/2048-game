export { init_game_board }

import { getRandomInt, getNewValue } from './common_functions.js'
import { INIT_CELLS_COUNT } from '../configure.js'


const game_board = [
    [2, 2, 2, 2],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
]

function init_game_board() {
    // for (let i=0; i < INIT_CELLS_COUNT; i++) {
    //     let line_no = getRandomInt(0, 4)
    //     let cell_no = getRandomInt(0, 4)
    //     game_board[line_no][cell_no] = getNewValue()
    // }
    return game_board
}
