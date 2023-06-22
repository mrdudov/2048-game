import { WIN_SCORE } from "../../../configure.js"

export { is_win }

function is_win(board) {
  for (let line_no = 0; line_no < board.length; line_no++) {
    for (let cell_no = 0; cell_no < board[line_no].length; cell_no++) {
      if (board[line_no][cell_no] === WIN_SCORE) {
        return true
      }
    }
  }
  return false
}
