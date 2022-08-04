//CSS
import './Container.css';

//Components
import Box from '../Box/Box';

//Redux
import { useSelector } from 'react-redux';

const Container = () => {

    //Global State
    const state = useSelector((store) => store.boxes);

    //console.log(state);

    //Rendering all the boxes
    return(
        <div className="container">
            {
                state.boxes.map((item, id) => {
                    return(
                        <Box id={item.id} color={item.color} key={id} selected={item.selected} top={item.top} left={item.left} />
                    )
                })
            }
        </div>
    )
}

export default Container;