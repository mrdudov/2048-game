export { on_move, render }


function calc(g_board, direction) {
 return [
        [0, 0, 0, 2],
        [0, 0, 0, 2],
        [0, 0, 0, 4],
        [0, 0, 0, 0],
    ]
}

function on_move(direction,  arr, g_board_el) {
    const gb = calc(arr, direction)
    render(gb, g_board_el)
}


function render(arr, board) {
    board.innerHTML = ''
    for (const line of arr) {
        for (const cell of line) {
            let cell_el = document.createElement('div')
            cell_el.classList.add('cell')
            if (cell !== 0) {
                cell_el.innerHTML = cell
            }
            board.append(cell_el) 
        }
    }
}
