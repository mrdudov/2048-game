export { calc }

function calc(g_board, direction) {
    if (direction == "right") {
        return right_move(g_board)
    } else if (direction == "left") {
        return left_move(g_board)
    } else if (direction == "up") {
        return up_move(g_board)
    } else if (direction == "down") {
        return down_move(g_board)
    } else {
        console.log('error')
    }
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
                        line[t+1]["value"] = 2 * line[t]["value"]
                        line[t+1]["is_add"] = true
                        line[t]["value"] = 0
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
                        line[t-1]["value"] = 2 * line[t]["value"]
                        line[t-1]["is_add"] = true
                        line[t]["value"] = 0
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
                        board[t-1][cell_no]["value"] = 2 * board[t][cell_no]["value"]
                        board[t-1][cell_no]["is_add"] = true
                        board[t][cell_no]["value"] = 0
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
                        board[t+1][cell_no]["value"] = 2 * board[t][cell_no]["value"]
                        board[t+1][cell_no]["is_add"] = true
                        board[t][cell_no]["value"] = 0
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
