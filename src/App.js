//CSS
import './App.css';

//Components
import Container from './Components/Container/Container';

//Actions
import { add, toggleKeyboard } from './Actions/boxes';

//Redux
import { useDispatch, useSelector } from 'react-redux';

function App() {
  
  const dispatch = useDispatch();
  const state = useSelector((store) => store.boxes);

  const onHandleAdd = (event) => {
    event.preventDefault();
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    const color = `rgb(${red}, ${green}, ${blue})`;

    //Initial Position of the box
    const top = Math.floor(Math.random()*150)
    const left = Math.floor(Math.random()*150)

    const box = {
      color: color,
      id: state.boxes.length,
      selected: false,
      top: top,
      left: left,
    }

    // Action to add the box
    dispatch(add(box));
  }

  const onHandleToggle = (event) => {
    event.preventDefault();
    dispatch(toggleKeyboard());
  }




  return (
    <div className="app">

      <div className="info">
        <span className="info-title" style={{ color: 'red'}}>1. Toogle Button to use keyboard controls.</span>
        <span className="info-title">2. Use Arrow Keys on the keyboard to move the box.</span>
        <span className="info-title">3. Selected box will be highlighted by a red border</span>
        <span className="info-title">4. Press delete/backspace to delete any selected box</span>
      </div>

      <div className="button">
        <button onClick={onHandleAdd} className="add">ADD BOX</button>
      </div>

      <div className="keyboard">

        <span className="keyboard-title">
          Toggle to use the keyboard
        </span>

        <button className="keyboard-button" style={ state.keyboardActive ? { backgroundColor: 'green' } : { backgroundColor: 'tomato' }} onClick={onHandleToggle}>
          { state.keyboardActive ? 'ON' : 'OFF'}
        </button>

      </div>


      <Container />

    </div>
  );
}

export default App;
