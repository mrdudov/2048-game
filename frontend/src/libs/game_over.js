export { is_game_over }

import { calc } from "./calculate_gb.js"
import { getFreeCells } from "./common_functions.js"

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

function is_equal_game_board(board_1, board_2) {
  for (let line_no = 0; line_no < board_1.length; line_no++) {
    for (let cell_no = 0; cell_no < board_1[line_no].length; cell_no++) {
      if (board_1[line_no][cell_no] !== board_2[line_no][cell_no]) {
        return false
      }
    }
  }
  return true
}
