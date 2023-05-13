export { 
    getRandomInt, 
    getNewValue, 
    add_one_new_value_to_free_cell, 
    getFreeCells,
    get_direction,
    game_over
}

import { NEW_VALUE_LIST } from "../configure.js"


function add_one_new_value_to_free_cell (board) {

    const free_cells = getFreeCells(board)

    if (free_cells.length === 0) {
        return "game_over"
    }

    if (free_cells.length === 1) {
        board[free_cells[0][0]][free_cells[0][1]] = getNewValue()
        return board
    }

    const coordinate = free_cells[getRandomInt(0, free_cells.length)]
    board[coordinate[0]][coordinate[1]] = getNewValue()

    return board
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function getFreeCells(board) {
    const free_cells = []
    
    for (let line_no = 0; line_no < board.length; line_no++) {
        for (let cell_no = 0; cell_no < board[line_no].length; cell_no++) {
            if (board[line_no][cell_no] === 0) {
                free_cells.push([line_no, cell_no])
            }
        }
    }

    return free_cells
}


function getNewValue() {
    return NEW_VALUE_LIST[getRandomInt(0, NEW_VALUE_LIST.length)]
}


function get_direction(event) {
    event = event || window.event;
    if (event.keyCode == '38') {
        return "up"
    }
    else if (event.keyCode == '40') {
        return "down"
    }
    else if (event.keyCode == '37') {
        return "left"
    }
    else if (event.keyCode == '39') {
        return "right"
    } else {
        return ''
    }
}


function game_over(board_el) {
    console.log('game over')
    board_el.classList.add('game-over')
}