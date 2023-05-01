import React from 'react';
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import {BodyContainer} from "./Components/Body/BodyContainer";
import {FooterContainer} from "./Components/Footer/FooterContainer";
import s from "./App.module.scss"
import {Balls} from "./Common/Ball/Balls";

function App() {
  return (
      <>
          <div className={s.App}>
              <HeaderContainer/>
              <BodyContainer/>
              <FooterContainer/>
          </div>
          <Balls/>
      </>

  );
}

export default App;
