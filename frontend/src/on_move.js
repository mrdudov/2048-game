export { on_move }

import { NEW_VALUE_COUNT } from "../configure.js"
import { calc } from "./calculate_gb.js"
import { add_one_new_value_to_free_cell } from './common_functions.js'
import { render } from "./render.js"


function on_move(direction,  arr, g_board_el) {
    let gb = calc(arr, direction)
    
    
    for (let i = 0; i < NEW_VALUE_COUNT; i++) {
        gb = add_one_new_value_to_free_cell(gb)
        if (gb === "game_over") {
            // TODO: game over
            console.log("game_over")
        }
    }

    render(gb, g_board_el)
}
