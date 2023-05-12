// import { calc } from "./calculate_gb"

const { calc } = require('./calculate_gb')

test('case 1 move right', () => {
    let game_board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 8, 8, 16],
        [0, 0, 0, 0],
    ]

    let result = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 2, 16, 16],
        [0, 0, 0, 0],
    ]
    expect(calc(game_board, 'right')).toEqual(result)    
})

test('case 1 left', () => {
    let game_board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [16, 8, 8, 2],
        [0, 0, 0, 0],
    ]

    let result = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [16, 16, 2, 0],
        [0, 0, 0, 0],
    ]
    expect(calc(game_board, 'right')).toEqual(result)    
})


test('case 1 up', () => {
    let game_board = [
        [0, 0, 16, 0],
        [0, 0, 8, 0],
        [0, 0, 8, 0],
        [0, 0, 2, 0],
    ]

    let result = [
        [0, 0, 16, 0],
        [0, 0, 16, 0],
        [0, 0, 2, 0],
        [0, 0, 0, 0],
    ]
    expect(calc(game_board, 'right')).toEqual(result)    
})

test('case 1 down', () => {
    let game_board = [
        [0, 0, 2, 0],
        [0, 0, 8, 0],
        [0, 0, 8, 0],
        [0, 0, 16, 0],
    ]

    let result = [
        [0, 0, 0, 0],
        [0, 0, 2, 0],
        [0, 0, 16, 0],
        [0, 0, 16, 0],
    ]
    expect(calc(game_board, 'right')).toEqual(result)    
})
