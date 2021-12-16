import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import Solar from './components/SolarSystem';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Solar />
        <Missions />
      </>
    );
  }
}

export default App;
