export { key_event_handler }

function key_event_handler(callback, arr, g_board_el) {
    return function (e) {
        
        e = e || window.event;

        if (e.keyCode == '38') {
            callback("up", arr, g_board_el)
        }
        else if (e.keyCode == '40') {
            callback("down", arr, g_board_el)
        }
        else if (e.keyCode == '37') {
            callback("left", arr, g_board_el)
        }
        else if (e.keyCode == '39') {
            callback("right", arr, g_board_el)
        }
    }
}
