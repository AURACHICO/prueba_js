import { useState } from "react";
import "./App.css";
import { FirstQuestion } from "./components/FirstQuestion";
import { SecondQuestion } from "./components/SecondQuestion";
import Button from 'react-bootstrap/Button';






const arrayData = [
  [1, 2],
  [3, 4],
  [5, 6],
];

function App() {
  const [state, setState] = useState({
    listArrayNumber: arrayData,
  });

  const transformaDataArray = () => {

    const copyArray = [...state.listArrayNumber];

    const result = copyArray.flatMap((item) => item);

    setState((prev) => ({ ...prev, listArrayNumber: result }));

  };

  return (
    <div className="App">

       <FirstQuestion/>

       <SecondQuestion/>

      <div>
        <p>Punto c.</p>
        <p>{JSON.stringify(state.listArrayNumber)}</p>

        <Button variant="success" onClick={transformaDataArray}>Transformar</Button>
        <Button variant="danger"
          onClick={() =>
            setState((prev) => ({ ...prev, listArrayNumber: arrayData }))
          }
        >
          Regrsar
        </Button>

      </div>
    </div>
  );
}

export default App;
