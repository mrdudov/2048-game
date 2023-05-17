export { on_move }

import { NEW_VALUE_COUNT } from "../configure.js"
import { calc } from "./calculate_gb.js"
import { add_one_new_value_to_free_cell } from './common_functions.js'
import { State } from "./global_state.js"


function on_move(direction) {
    const state  = State.getInstance()

    state.game_board = calc(direction)
    for (let i = 0; i < NEW_VALUE_COUNT; i++) {
        state.game_board = add_one_new_value_to_free_cell(state.game_board)
    }
}
