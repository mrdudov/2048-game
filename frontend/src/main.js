import { render } from "./libs/render.js"
import { on_move } from "./libs/on_move.js"
import { get_direction } from "./libs/common_functions.js"
import { elements } from "./libs/ui_elements.js"
import { State } from "./libs/global_state.js"

import "./styles/style.css"
import "./styles/cells.css"

const state = State.getInstance()

elements["restart_button"].onclick = () => {
  elements["game_board"].classList.remove("game-over")
  elements["game_board"].classList.remove("win")
  state.is_moves_enabled = true
  state.is_continue_on_win = false
  State.reset()
  render()
}

document.addEventListener("keydown", (ev) => {
  const direction = get_direction(ev)
  if (!direction) {
    return
  }
  if (!state.game_board) {
    return
  }
  on_move(direction)
  if (!state.game_board) {
    return
  }
  render()
})

render()
