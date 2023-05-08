import { init } from './src/init.js'
import { on_move, render } from './src/common_functions.js'
import { key_event_handler } from './src/key_event_handler.js'

const game_board_el = document.querySelector('#game-board')
const game_board = init()

render(game_board, game_board_el)

document.onkeydown = key_event_handler(on_move, game_board, game_board_el)
