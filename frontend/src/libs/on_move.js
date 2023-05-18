export { on_move }

import { NEW_VALUE_COUNT } from "../configure.js"
import { calc } from "./calculate_gb.js"
import { add_one_new_value_to_free_cell } from "./common_functions.js"
import { State } from "./global_state.js"
import { calc_record } from "./record.js"
import { is_game_over } from "./game_over.js"
import { elements } from "./ui_elements.js"
import { is_win } from "./win.js"

function on_move(direction) {
  const state = State.getInstance()
  const calc_val = calc(direction, state.game_board)

  State.increase_score(calc_val["score_plus"])

  state.record = calc_record(state.current_score)

  state.game_board = calc_val["board"]

  for (let i = 0; i < NEW_VALUE_COUNT; i++) {
    state.game_board = add_one_new_value_to_free_cell(state.game_board)
  }

  const win = is_win(state.game_board)
  if (win) {
    elements['game_board'].classList.add('win')
  }
  const game_over = is_game_over(state.game_board)

  if (game_over) {
    elements["game_board"].classList.add("game-over")
  }
}
