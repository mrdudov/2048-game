// import { calc } from "./calculate_gb"

const { calc } = require('./calculate_gb')

function get_game_board() {
    return [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 8, 8, 16],
        [0, 0, 0, 0],
    ]
}


let result = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 2, 16, 16],
    [0, 0, 0, 0],
]

test('case 1', () => {
    expect(calc(get_game_board(), 'right')).toEqual(result)    
})
