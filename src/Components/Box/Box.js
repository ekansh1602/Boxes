//CSS
import './Box.css';

//Actions
import { select, move, deleteBox } from '../../Actions/boxes';

//Redux
import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';

const Box = (props) => {

    const dispatch = useDispatch();

    /****************  TO SELECT A BOX *************/
    const onHandleClick = (event) => {
        event.preventDefault();
        dispatch(select(props.id));
    }

    /************** TO USE A,W,S,D & 9 KEYS FOR TRAVERSAL WITHOUT USECALLBACK (REACT WARNING) *****************/


    // const onHandleKeyPress = (event) => {
    //     console.log(event.key);
    // }

    // const moveBoxUsingKeys = (event) => {
    //     event.preventDefault();
    //     if(event.key === 'a'){
    //         dispatch(move('left'));
    //     }
    //     else if(event.key === 's'){
    //         dispatch(move('down'));
    //     }
    //     else if(event.key === 'd'){
    //         dispatch(move('right'));
    //     }
    //     else if(event.key === 'w'){
    //         dispatch(move('top'));
    //     }
    // }

    /************** TO USE A,W,S,D & 9 KEYS FOR TRAVERSAL WITH USECALLBACK *****************/

    // A - LEFT, S - DOWN, D - RIGHT, W - UP, 9 - DELETE BOX

    // const moveBoxUsingKeys = useCallback((event) => {
    //     event.preventDefault();
    //     if(event.key === 'a'){
    //         dispatch(move('left'));
    //     }
    //     else if(event.key === 's'){
    //         dispatch(move('down'));
    //     }
    //     else if(event.key === 'd'){
    //         dispatch(move('right'));
    //     }
    //     else if(event.key === 'w'){
    //         dispatch(move('top'));
    //     }
    //     else if(event.key === '9'){
    //         dispatch(deleteBox());
    //     }
    // }, [dispatch])


    // useEffect(() => {
    //     window.addEventListener('keypress' ,moveBoxUsingKeys);

    //     return () => {
    //         window.removeEventListener('keypress' ,moveBoxUsingKeys);
    //     };
    // }, [moveBoxUsingKeys])




    /************** TO USE ARROW KEYS FOR TRAVERSAL *****************/

    // ARROWLEFT - LEFT, ARROWDOWN - DOWN, ARROWRIGHT - RIGHT, ARROWUP - UP, BACKSPACE - DELETE BOX

    const moveBoxUsingArrows = useCallback((event) => {
        event.preventDefault();
        if(event.key === 'ArrowLeft'){
            dispatch(move('left'));
        }
        else if(event.key === 'ArrowRight'){
            dispatch(move('right'));
        }
        else if(event.key === 'ArrowDown'){
            dispatch(move('down'));
        }
        else if(event.key === 'ArrowUp'){
            dispatch(move('top'));
        }
        else if(event.key === 'Backspace'){
            dispatch(deleteBox());
        }
    }, [dispatch])



    useEffect(() => {
        window.addEventListener('keydown' ,moveBoxUsingArrows);
        return () => {
            window.removeEventListener('keydown' ,moveBoxUsingArrows);
          };
    }, [moveBoxUsingArrows])

    return(
        <div className="box" 

            style={{  backgroundColor: props.color, margin: '20px', 
            top: `${props.top}px`, left: `${props.left}px`, 
            zIndex: `${props.id}` ,
            border: props.selected ? `3px solid red` : 'none'
        }} 
        // onKeyPress={onHandleKeyPress}
        onClick={onHandleClick} >

            ID - {props.id}

        </div>

    )
}

export default Box;
