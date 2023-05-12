// import { calc } from "./calculate_gb"

const { calc } = require('./calculate_gb')

describe('double adding case 1', () => {
    test('move right', () => {
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

    test('move left', () => {
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


    test('move up', () => {
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

    test('move down', () => {
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
})

describe('double adding case 2', () => {
    test('move left', () => {
        let game_board = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [2, 8, 8, 16],
            [0, 0, 0, 0],
        ]

        let result = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [2, 16, 16, 0],
            [0, 0, 0, 0],
        ]
        expect(calc(game_board, 'left')).toEqual(result)    
    })

    test('move right', () => {
        let game_board = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [16, 8, 8, 2],
            [0, 0, 0, 0],
        ]

        let result = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 16, 16, 0],
            [0, 0, 0, 0],
        ]
        expect(calc(game_board, 'right')).toEqual(result)    
    })


    test('move down', () => {
        let game_board = [
            [0, 0, 16, 0],
            [0, 0, 8, 0],
            [0, 0, 8, 0],
            [0, 0, 2, 0],
        ]

        let result = [
            [0, 0, 0, 0],
            [0, 0, 16, 0],
            [0, 0, 16, 0],
            [0, 0, 0, 0],
        ]
        expect(calc(game_board, 'down')).toEqual(result)    
    })

    test('move up', () => {
        let game_board = [
            [0, 0, 2, 0],
            [0, 0, 8, 0],
            [0, 0, 8, 0],
            [0, 0, 16, 0],
        ]

        let result = [
            [0, 0, 2, 0],
            [0, 0, 16, 0],
            [0, 0, 16, 0],
            [0, 0, 0, 0],
        ]
        expect(calc(game_board, 'up')).toEqual(result)    
    })
})
