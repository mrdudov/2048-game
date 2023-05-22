export { is_win, win_card }

import { WIN_SCORE } from "../../configure.js"
import win_card_html from "./win.html"
import "./win.css"

const win_card = document.createElement('div')
win_card.innerHTML = win_card_html

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
