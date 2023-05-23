export { is_win, win_card, show_win }

import { WIN_SCORE } from "../../configure.js"
import win_card_html from "./win.html"
import { State } from "../global_state.js"
import { elements } from "../ui_elements.js"

import "./win.css"

const win_card = document.createElement("div")
win_card.classList.add("win-card")
win_card.innerHTML = win_card_html

const state = State.getInstance()

function on_continue() {
  hide_win()
}

function show_win() {
  elements.game_board.classList.add("win")
  state.is_moves_enabled = false
  state.is_continue_on_win = true
  elements.game_board.parentNode.insertBefore(win_card, elements.game_board)
  const continue_btn = document.querySelector("#continue-btn")
  continue_btn.onclick = on_continue
}

function hide_win() {
  elements.game_board.classList.add("win")
  state.is_moves_enabled = true
  elements.game_board.classList.remove("win")
  document.querySelector(".win-card").remove()
}

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
