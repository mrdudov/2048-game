export { render }


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
