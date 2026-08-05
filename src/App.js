import { useState } from 'react';
import './App.css';
import {
  NORTH,
  WEST,
  SOUTH,
  EAST,
  FORWARD,
  BACKWARD,
  LEFT,
  RIGHT,
  GO_NORTH,
  GO_WEST,
  GO_SOUTH,
  GO_EAST,
  GO_FORWARD,
  GO_BACKWARD,
} from './constants.config';

const RoverLocation = ({ x, y, z }) => (
  <div>
    <h3>Current location:</h3>
    <p>
      Current X position: {x} 
    </p>
    <p>
      Current Y position: {y}
    </p>
    <p>
      Current Orientation:{z}
    </p>
  </div>
);

function App() {

  const [roverX, setroverX] = useState(0);
  const [roverY, setroverY] = useState(0);
  const [roverZ, setroverZ] = useState(NORTH);
  const [mapX, setMapX] = useState();
  const [mapY, setMapY] = useState();

  const orientationMap = {
    [NORTH]: {
       [LEFT]: WEST,
       [RIGHT]: EAST,
    },
    [WEST]: {
       [LEFT]: SOUTH,
       [RIGHT]: NORTH,
    },
    [SOUTH]: {
       [LEFT]: EAST,
       [RIGHT]: WEST,
    },
    [EAST]: {
       [LEFT]: NORTH,
       [RIGHT]: SOUTH,
    },
  }

  const changeOrientation = (current, direction) =>
    orientationMap[current][direction];

  const moveForward = (value, limit) => {
    if (value + 1 >= limit) {
      return 0;
    }
    return value + 1;
  }

  const moveBackward = (value, limit) => {
    if (value - 1 < 0) {
      return limit - 1;
    }
    return value - 1;
  }

  const moveForwardX = () => {
    setroverX(previous =>
      moveForward(previous, mapX));
  }

  const moveBackwardX = () => {
    setroverX(previous =>
      moveBackward(previous, mapX));
  }

  const moveForwardY = () => {
    setroverY(previous =>
      moveForward(previous, mapY));
  }

  const moveBackwardY = () => {
    setroverY(previous =>
      moveBackward(previous, mapY));
  }

  const handleCommand = (command) => {

    if (command === FORWARD) { // +
      if (roverZ === NORTH) { // +
        moveForwardY();
      }
      if (roverZ === WEST) {
        moveBackwardX();
      }
      if (roverZ === SOUTH) {
        moveBackwardY();
      }
      if (roverZ === EAST) { // +
        moveForwardX();
      }
  }
  if (command === BACKWARD) { // -
      if (roverZ === NORTH) {
          moveBackwardY();
      }
      if (roverZ === WEST) {
          moveForwardX();
      }
      if (roverZ === SOUTH) {
          moveForwardY();
      }
      if (roverZ === EAST) {
          moveBackwardX();
          
      }
    }
    if (
      command === LEFT ||
      command === RIGHT
    ) {
      setroverZ(orientation =>
        changeOrientation(orientation, command)
      );
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Mars Rover Status</h2>
      </header>

      <nav>
        <RoverLocation
          x={roverX}
          y={roverY}
          z={roverZ}
        />

        <div>
          <h3>Set Map Size:</h3>
          <label for="xSize">
            X Size:
          <input type="number" name="xSize" onChange={e => setMapX(e.target.value)}/>
          </label>
          <label for="ySize">
            Y Size:
          <input type="number" name="ySize" onChange={e => setMapY(e.target.value)}/>
          </label>
        </div>

        <div>
          <h3>Send Command:</h3>
          <button type="button" value={FORWARD}
          onClick={e => handleCommand(e.target.value)}>
            Move Forward
          </button>
          <button type="button"value={BACKWARD}
          onClick={e => handleCommand(e.target.value)}>
            Move Backwards
          </button>
          <button type="button" value={LEFT}
          onClick={e => handleCommand(e.target.value)}>
            Rotate Left
          </button>
          <button type="button" value={RIGHT} 
          onClick={e => handleCommand(e.target.value)}>
              Rotate Right
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;
