import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const listCity = [
  "Bogota",
  "Cali",
  "Bogota",
  "Medellin",
  "Bogota",
  "Medellin",
  "Bogota",
  "Cali",
  "Bogota",
  "Neiva",
  "Bogota",
  "Cali",
  "Bogota",
  "Medellin",
];

export const SecondQuestion = () => {
  const [state, setState] = useState([]);

  const compareObj = (a, b) => {
    if (a.info.cantidad > b.info.cantidad) {
      return -1;
    }
    if (a.info.cantidad < b.info.cantidad) {
      return 1;
    }
    // a debe ser igual b
    return 0;
  };

  const mostrar = () => {
    let info = {};

    const dataArr = new Set(listCity);

    const data = [...dataArr].map((item, index) => {
      let counter = 0;
      listCity.forEach((x) => {
        if (item === x) {
          info = { info: { ciudad: item, cantidad: (counter = counter + 1) } };
        }
      });
      return info;
    });

    const result = data.sort(compareObj);

    setState(result);
  };

  return (
    <div>
      <p>Punto b.</p>
      <ul>
        {state.length > 0
          ? state.map((item, index) => (
              <li key={index} style={{ listStyle: "none" }}>
                {item.info.ciudad} - {item.info.cantidad}
              </li>
            ))
          : null}
      </ul>

      <Button variant="primary"  onClick={mostrar}>Mostrar</Button>
    </div>
  );
};
