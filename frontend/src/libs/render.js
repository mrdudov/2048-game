export { render }

import { elements } from "./ui_elements.js"
import { State } from './global_state.js'


function render() {
    render_game_board()
    render_score()
}


function render_score() {
    elements['score_current'].innerHTML = State.getInstance().current_score
}

function render_game_board() {
    let state = State.getInstance()
    const arr = state.game_board
    elements['game_board'].innerHTML = ''
    for (const line of arr) {
        for (const cell of line) {
            let cell_el = document.createElement('div')
            cell_el.classList.add('cell')
            if (cell !== 0) {
                cell_el.classList.add('cell-' + cell)
                cell_el.innerHTML = cell
            }
            elements['game_board'].append(cell_el) 
        }
    }
}
