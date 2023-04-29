import React from 'react';
import './App.css';
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import {BodyContainer} from "./Components/Body/BodyContainer";
import {FooterContainer} from "./Components/Footer/FooterContainer";

function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <BodyContainer/>
      <FooterContainer/>
    </div>
  );
}

export default App;
