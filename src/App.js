import { Anchor, Button, Footer, Grommet, Header, Main, Menu, Text } from 'grommet';
import React from 'react';
import HomeScreen from './screens/Home/HomeScreen';

const theme = {
  global: {
    colors: {
      container: "#ffffff",
      brand: "#8FBC8F",
      secondary: "#90EE90",
      tertiary: "#98FB98",
      quaternary: "#3CB371"
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
    <Grommet theme={theme} full background={'container'}>
      <Main>
        <HomeScreen />
      </Main>
    </Grommet>
  );
}

export default App;
