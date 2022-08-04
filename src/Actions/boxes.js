//Actions 

export const add = (box) => (dispatch) => {
    dispatch({ type: 'ADD', payload: box })
}

export const select = (id) => (dispatch) => {
    dispatch({ type: 'SELECT', payload: id })
}

export const move = (direction) => (dispatch) => {
    dispatch({ type: 'MOVE', payload: direction })
}

export const deleteBox = () => (dispatch) => {
    dispatch({ type: 'DELETE' })
}

export const toggleKeyboard = () => (dispatch) => {
    dispatch({ type: 'TOGGLE_KEYBOARD' })
}