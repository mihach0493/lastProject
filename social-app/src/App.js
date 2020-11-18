import logo from './logo.svg';
import './App.css';
import Nav from './Navigation/Nav.Component';
import Popup from './Popup/Popup.Component';
import { useState, useEffect } from 'react';
import SocialApp from './SocialApp';



function App() {

  const [showPopup, setShowPopup] = useState(false);

  const popupShow = () => {
    setShowPopup(true);
    // console.log('dziala');
  }

  useEffect(() => {
    let popupTimerID;

    if (!showPopup) {
      popupTimerID = setTimeout(popupShow, 3000);
    }


    return (() => {
      clearInterval(popupTimerID)
    });
  }, [showPopup]);

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Social-App</h1>
      </header>
      {showPopup && <Popup />}
      <SocialApp />
    </div>
  );
}

export default App;
