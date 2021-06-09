import { useState } from 'react';
import './App.css';

function App() {

  const [roverX, setroverX] = useState(0);
  const [roverY, setroverY] = useState(0);
  const [roverZ, setroverZ] = useState("n");
  const [mapX, setMapX] = useState();
  const [mapY, setMapY] = useState();

  const handleCommand = (command) => {

    if (command === "f") {
      if (roverZ === "n") {
          setroverY(roverY + 1);
          
      }
      if (roverZ === "w") {
          setroverX(roverX -1)
          
      }
      if (roverZ === "s") {
          setroverY(roverY-1);
          
      }
      if (roverZ === "e") {
          setroverX(roverX+1)
          
      }
  }
  if (command === "b") {
      if (roverZ === "n") {
          setroverY(roverY-1);
          
      }
      if (roverZ === "w") {
          setroverX(roverX+1)
          
      }
      if (roverZ === "s") {
          setroverY(roverY + 1);
          
      }
      if (roverZ === "e") {
          setroverX(roverX -1)
          
      }
  }
  if (command === "l") {
      if (roverZ === "n") {
          setroverZ('w');
          
      }
      if (roverZ === "w") {
          setroverZ('s');
          
      }
      if (roverZ === "s") {
          setroverZ('e');
          
      }
      if (roverZ === "e") {
          setroverZ('n');
          
      }
  }
  if (command === "r") {
      if (roverZ === "n") {
          setroverZ('e');
          
      }
      if (roverZ === "e") {
          setroverZ('s');
          
      }
      if (roverZ === "s") {
          setroverZ('w');
          
      }
      if (roverZ === "w") {
          setroverZ('n');
          
      }
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Mars Rover Status</h2>
        <p>
          Current X position: {roverX} 
        </p>
        <p>
          Current Y position: {roverY}
        </p>
        <p>
          Current Orientation:{roverZ}
        </p>
        <form>
          <strong>Set Map Size:</strong> <br/>
          <label>
            X Size:
          <input type="number" name="xSize" onChange={e => setMapX(e.target.value)}/>
          </label>
          <label>
            Y Size:
          <input type="number" name="ySize" onChange={e => setMapY(e.target.value)}/>
          </label>
        </form>

        <div>
          <br/>
          <strong>Send Command:</strong><br/>
          <button type="button" value="f"
          onClick={e => handleCommand(e.target.value)}>
            Move Forward
          </button>
          <button type="button"value="b"
          onClick={e => handleCommand(e.target.value)}>
            Move Backwards
          </button>
          <button type="button" value="l"
          onClick={e => handleCommand(e.target.value)}>
            Rotate Left
          </button>
          <button type="button" value="r"
          onClick={e => handleCommand(e.target.value)}>
              Rotate Right
          </button>
        </div>
        </header>
    </div>
  );
}

export default App;
