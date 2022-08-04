//Reducer are functions that takes intitial state and action object as argument and returns the changed state based on the action type

export const boxes = (state = { boxes: [], keyboardActive: false }, action) => {
    switch(action.type) {
        case 'ADD':
            return { ...state, boxes: [...state.boxes, action.payload] };

        case 'SELECT':
            return { 
                ...state, 
                boxes: state.boxes.map((item) => {
                    if(item.id === action.payload){
                        item.selected = true;
                    }
                    else{
                        item.selected = false;
                    }
                    return item;
                })
            }

        case 'MOVE':
            let distance = Math.floor(Math.random() * 50);
            return { 
                ...state,
                boxes: state.boxes.map((item) => {
                    if(item.selected === true && state.keyboardActive === true){
                        if(action.payload === 'top'){
                            //console.log(item.id+" "+item.top);
                            item.top = item.top - distance >= 0 ? item.top - distance : 0;
                        }
                        else if(action.payload === 'down'){
                            //console.log(item.top);
                            item.top = item.top + distance <= 400 ? item.top + distance : 400;
                        }
                        else if(action.payload === 'left'){
                            //console.log(item.left);
                            item.left = item.left - distance >= 0 ? item.left - distance : 0;
                        }
                        else if(action.payload === 'right'){
                            //console.log(item.left);
                            item.left = item.left + distance <= 900 ? item.left + distance : 900;
                        }
                    }
                    return item;
                })
            }

        case 'DELETE':
            return{
                ...state,
                boxes: state.boxes.filter((item) => {
                    //Only return boxes which are not selected
                    return !item.selected
                })
            }

        case 'TOGGLE_KEYBOARD':
            return{
                ...state,
                keyboardActive: !state.keyboardActive
            }
            
        default:
            return state;
    }
}
