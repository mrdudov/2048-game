import { init_game_board } from "./init.js"
import { get_record } from "./record.js"

export { State }

class State {
  constructor() {
    this.game_board = init_game_board()
    this.current_score = 0
    this.record = get_record()
    this.is_moves_enabled = true
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new State()
    }
    return this.instance
  }

  static reset() {
    if (this.instance) {
      this.instance.game_board = init_game_board()
      this.instance.current_score = 0
    }
  }

  static increase_score(value) {
    if (this.instance) {
      this.instance.current_score += value
    }
  }
}
