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
    for (const line of board) {
        for (let cell_i = line.length -1 ; cell_i >= 0; cell_i--) {
            if (line[cell_i] !== 0) {
                let t = cell_i
                while (line[t+1] !== undefined) {
                    if (line[t+1] === 0) {
                        line[t+1] = line[t]
                        line[t] = 0
                    } else if(line[t] === line[t+1]) {
                        line[t+1] = 2 * line[t]
                        line[t] = 0
                        break
                    }
                    t += 1
                } 
            }
        }    
    }
    return board
}

function left_move(board) {
    for (const line of board) {
        for (let cell = 1; cell < line.length; cell++) {
            if (line[cell] !== 0) {
                let t = cell
                while (line[t-1] !== undefined) {
                    if (line[t-1] === 0) {
                        line[t-1] = line[t]
                        line[t] = 0
                    } else  if(line[t] === line[t-1]) {
                        line[t-1] = 2 * line[t]
                        line[t] = 0
                    }
                    t -= 1
                } 
            }
        }    
    }
    return board
}

function up_move(board) {
    for (const line of board) {
        for (let cell = line.length -1 ; cell >= 0; cell--) {
            if (line[cell] !== 0) {

                let t = cell
                while (line[t+1] !== undefined) {
                    if (line[t+1] === 0) {
                        line[t+1] = line[t]
                        line[t] = 0
                    } else  if(line[t] === line[t+1]) {
                        line[t + 1] = 2 * line[t]
                        line[t] = 0
                    }
                    t += 1
                   
                } 

            }
        }    
    }
    return board
}

function down_move(board) {
    for (const line of board) {
        for (let cell = line.length -1 ; cell >= 0; cell--) {
            if (line[cell] !== 0) {

                let t = cell
                while (line[t+1] !== undefined) {
                    if (line[t+1] === 0) {
                        line[t+1] = line[t]
                        line[t] = 0
                    } else  if(line[t] === line[t+1]) {
                        line[t + 1] = 2 * line[t]
                        line[t] = 0
                    }
                    t += 1
                   
                } 

            }
        }    
    }
    return board
}
