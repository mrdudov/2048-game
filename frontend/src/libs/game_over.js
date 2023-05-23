export { is_game_over }

import { calc } from "./calculate_gb.js"
import { getFreeCells } from "./common_functions.js"
import { is_equal_game_board } from "./common_functions.js"

function is_game_over(board) {
  if (getFreeCells(board).length) {
    return false
  }

  if (!is_equal_game_board(board, calc("up", board)["board"])) {
    return false
  }

  if (!is_equal_game_board(board, calc("down", board)["board"])) {
    return false
  }

  if (!is_equal_game_board(board, calc("left", board)["board"])) {
    return false
  }

  if (!is_equal_game_board(board, calc("right", board)["board"])) {
    return false
  }

  return true
}
