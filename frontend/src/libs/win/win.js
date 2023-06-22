export { win_card, show_win }

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
