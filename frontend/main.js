import { init_game_board } from './src/init.js'
import { render } from './src/render.js'
import { on_move } from './src/on_move.js'
import { key_event_handler } from './src/key_event_handler.js'

const game_board_el = document.querySelector('#game-board')
const game_board = init_game_board()

render(game_board, game_board_el)

document.onkeydown = key_event_handler(on_move, game_board, game_board_el)
