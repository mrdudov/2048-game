export { on_move }

import { NEW_VALUE_COUNT } from "../configure.js"
import { calc } from "./calculate_gb.js"
import { add_one_new_value_to_free_cell } from './common_functions.js'
import { State } from "./global_state.js"


function on_move(direction) {
    const state  = State.getInstance()
    const calc_val = calc(direction, state.game_board)
    State.increase_score(calc_val['score_plus'])
    state.game_board = calc_val['board']
    for (let i = 0; i < NEW_VALUE_COUNT; i++) {
        state.game_board = add_one_new_value_to_free_cell(state.game_board)
    }
}
