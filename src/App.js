import { Grommet } from 'grommet';
import React from 'react';

const theme = {
  global: {
    colors: {
      brand: "#8FBC8F"

    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full background={'brand'}>

    </Grommet>
  );
}

export default App;
