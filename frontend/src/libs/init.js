export { init_game_board }

import { add_one_new_value_to_free_cell } from "./common_functions.js"
import { INIT_CELLS_COUNT } from "../configure.js"

function init_game_board() {
  let game_board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]

  for (let i = 0; i < INIT_CELLS_COUNT; i++) {
    game_board = add_one_new_value_to_free_cell(game_board)
  }

  return game_board
}
