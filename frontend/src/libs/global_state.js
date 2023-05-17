import { init_game_board } from './init.js'


export { State }

class State {
    constructor() {
        this.game_board = init_game_board()
        this.current_score = 0
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new State();
        }
        return this.instance;
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
