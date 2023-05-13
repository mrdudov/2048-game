import { init_game_board } from './libs/init.js'
import { render } from './libs/render.js'
import { on_move } from './libs/on_move.js'
import { get_direction, game_over } from './libs/common_functions.js'

import './styles/style.css'
import './styles/cells.css'


const game_board_el = document.querySelector('#game-board')
const restart_button = document.querySelector('#restart')



let game_board = init_game_board()


restart_button.onclick = () => {
    game_board_el.classList.remove('game-over')
    game_board = init_game_board()
    render(game_board, game_board_el)
}


document.addEventListener("keydown", (ev) => {
    const direction = get_direction(ev)
    if (!direction) {
        return
    }
    if (!game_board) {
        game_over(game_board_el)
        return
    }
    game_board = on_move(direction, game_board, game_board_el)
    if (!game_board) {
        game_over(game_board_el)
        return
    }
    render(game_board, game_board_el)
})

render(game_board, game_board_el)
