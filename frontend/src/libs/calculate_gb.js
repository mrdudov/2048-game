export { calc }

import { State } from "./global_state.js"


function calc(direction) {
    const board = State.getInstance().game_board

    switch (direction) {
        case 'right': return right_move(board)
        case 'left': return left_move(board)
        case 'up': return up_move(board)
        case 'down': return down_move(board)
        default: console.log('error invalid direction value: ', direction)
    }
}


function sum_cells(cell_to, cell_from) {
    State.increase_score(cell_from["value"])
    cell_to["value"] = 2 * cell_from["value"]
    cell_to["is_add"] = true
    cell_from["value"] = 0
}


function right_move(board) {
    board = add_is_add_flag(board)
    
    for (const line of board) {
        for (let cell_i = line.length -1 ; cell_i >= 0; cell_i--) {
            if (line[cell_i]["value"] !== 0) {
                let t = cell_i
                while (line[t+1] !== undefined) {
                    if (line[t+1]["value"] === 0) {
                        line[t+1]["value"] = line[t]["value"]
                        line[t]["value"] = 0
                        t += 1
                    } else if(line[t]["value"] === line[t+1]["value"]) {
                        if (line[t+1]["is_add"]) {
                            break
                        }
                        sum_cells(line[t+1], line[t])
                        break
                    } else {
                        break
                    }
                }
            }
        }
    }
    board = remove_is_add_flag(board)
    return board
}

function left_move(board) {
    board = add_is_add_flag(board)

    for (const line of board) {
        for (let cell = 1; cell < line.length; cell++) {
            if (line[cell]["value"] !== 0) {
                let t = cell
                while (line[t-1] !== undefined) {
                    if (line[t-1]["value"] === 0) {
                        line[t-1]["value"] = line[t]["value"]
                        line[t]["value"] = 0
                        t -= 1
                    } else  if(line[t]["value"] === line[t-1]["value"]) {
                        if (line[t-1]["is_add"]) {
                            break
                        }
                        sum_cells(line[t-1], line[t])
                        break
                    } else {
                        break
                    }
                }
            }
        }
    }
    board = remove_is_add_flag(board)
    return board
}

function up_move(board) {
    board = add_is_add_flag(board)

    for (let cell_no = 0 ; cell_no < board.length; cell_no++) {
        for (let line_no = 1; line_no < board.length; line_no++) {
            if (board[line_no][cell_no]["value"] !== 0) {
                let t = line_no
                while (board[t-1] !== undefined) {
                    if (board[t-1][cell_no]["value"] === 0) {
                        board[t-1][cell_no]["value"] = board[t][cell_no]["value"]
                        board[t][cell_no]["value"] = 0
                        t -= 1
                    } else if(board[t][cell_no]["value"] === board[t-1][cell_no]["value"]) {
                        if (board[t-1][cell_no]["is_add"]) {
                            break
                        }
                        sum_cells(board[t-1][cell_no], board[t][cell_no])
                        break
                    } else {
                        break
                    }
                }
            }
        }
    }
    board = remove_is_add_flag(board)
    return board
}

function down_move(board) {
    board = add_is_add_flag(board)

    for (let cell_no = 0 ; cell_no < board.length; cell_no++) {
        for (let line_no = board.length-1; line_no >= 0; line_no--) {
            if (board[line_no][cell_no]["value"] !== 0) {
                let t = line_no
                while (board[t+1] !== undefined) {
                    if (board[t+1][cell_no]["value"] === 0) {
                        board[t+1][cell_no]["value"] = board[t][cell_no]["value"]
                        board[t][cell_no]["value"] = 0
                        t += 1
                    } else if(board[t][cell_no]["value"] === board[t+1][cell_no]["value"]) {
                        if (board[t+1][cell_no]["is_add"]) {
                            break
                        }
                        sum_cells(board[t+1][cell_no], board[t][cell_no])
                        break
                    } else {
                        break
                    }
                }
            }
        }
    }
    board = remove_is_add_flag(board)
    return board
}

function add_is_add_flag(board) {
    const result = []

    for(let line_no = 0; line_no < board.length; line_no++) {
        result.push([])
        for (let cell_no = 0; cell_no < board.length; cell_no++) {
            result[line_no].push({
                "value": board[line_no][cell_no],
                "is_add": false
            })
        }
    }

    return result
}

function remove_is_add_flag(board) {
    const result = []
    for(let line_no = 0; line_no < board.length; line_no++) {
        result.push([])
        for (let cell_no = 0; cell_no < board.length; cell_no++) {
            result[line_no].push(board[line_no][cell_no]["value"])
        }
    }
    return result
}
