import { useState, useEffect } from "react";
import Hand from "./hand.png";
import "./App.css";
import "./vendor/normalize.css";
import "./vendor/fonts/fonts.css";
import countapi from "countapi-js";

function App() {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    countapi.visits().then((result) => {
      console.log(result.value);
      setVisitors(result.value);
    });
  }, []);

  return (
    <div className='App'>
      <img className='background-img' src={Hand} alt='hand' />
      <div className='container'>
        <p className='container__main-caption'>Ты пидор!</p>
        <p className='container__additional-caption'>
          Любопытный, мне нравится
        </p>
        <p className='container__quantity-caption'>
          Попалось:
          <span className='container__quantity-number'> {visitors}</span>
        </p>
      </div>
      <div className='contacts'>
        <a
          className='contacts__donut'
          href='https://pay.mysbertips.ru/32518683'
          target='_blank'
          rel='noreferrer'
        >
          <span className='contacts__text'>Донат</span>
        </a>
      </div>
    </div>
  );
}

export default App;
