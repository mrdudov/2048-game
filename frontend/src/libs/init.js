export { init_game_board }

import { add_one_new_value_to_free_cell } from "./common_functions.js"
import {
  INIT_CELLS_COUNT,
  GAME_BOARD_HEIGHT,
  GAME_BOARD_WIDTH,
} from "../configure.js"

function init_game_board() {
  let game_board = []
  for (let line_no = 0; line_no < GAME_BOARD_HEIGHT; line_no++) {
    let line = new Array(GAME_BOARD_WIDTH).fill(0)
    game_board.push(line)
  }

  for (let i = 0; i < INIT_CELLS_COUNT; i++) {
    game_board = add_one_new_value_to_free_cell(game_board)
  }

  return game_board
}
