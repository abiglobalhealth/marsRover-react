import React from 'react';
import Button from '../../components/button/button';
import Text from '../../components/text/text';
import { COMMANDS} from '../../state/actions';
import { useStateContext } from '../../state';

import '../../App.css';

const Home = () => {
  const { FORWARDS, BACKWARDS, ROTATE_R, ROTATE_L } = COMMANDS;
  const [{ orientation, position }, dispatch] = useStateContext();
  const { roverZ } = orientation;
  const { roverY, roverX } = position;

  const handlerDispatch = (type) => {
    dispatch({ type, roverZ });
  }

  const buttons = [
    { id: 1, onClick: () => handlerDispatch(FORWARDS) , title: 'Move Forward' },
    { id: 2, onClick: () => handlerDispatch(BACKWARDS) , title: 'Move Backwards' },
    { id: 3, onClick: () => handlerDispatch(ROTATE_L) , title: 'Rotate Left' },
    { id: 4, onClick: () => handlerDispatch(ROTATE_R), title: 'Rotate Right' }
  ];

  const texts = [
    { id: 1, text: `Current X position: ${roverX}`},
    { id: 2, text: `Current Y position: ${roverY}`},
    { id: 3, text: `Current Orientation:${roverZ}`}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h2>Mars Rover Status</h2>
        {texts.map((t) => {
          const { id, text } = t;
          return <Text text={text} key={id} />;
        })}
        <div>
          <br/>
          <strong>Send Command:</strong><br/>
          {buttons.map((button) => {
            const { onClick, title, id } = button;
            return <Button key={id} onClick={onClick} title={title} />;
          })}
        </div>
        </header>
    </div>
  )
}


export default Home;
