import { init_game_board } from './src/init.js'
import { render } from './src/render.js'
import { on_move } from './src/on_move.js'
import { get_direction } from './src/common_functions.js'


const game_board_el = document.querySelector('#game-board')
const restart_button = document.querySelector('#restart')



let game_board = init_game_board()


restart_button.onclick = () => {
    game_board = init_game_board()
    render(game_board, game_board_el)

}


document.addEventListener("keydown", (ev) => {
    const direction = get_direction(ev)
    game_board = on_move(direction, game_board, game_board_el)
    render(game_board, game_board_el)
})

render(game_board, game_board_el)
