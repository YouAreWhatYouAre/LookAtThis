import { useState, useEffect } from "react";
import Hand from "./hand.png";
import "./App.css";
import "./vendor/normalize.css";
import "./vendor/fonts/fonts.css";
import axios from 'axios'

const BASEURL = 'https://api.api-ninjas.com/v1/counter?id=visits&hit=true';

function App() {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    axios.get(BASEURL, {headers: { 'X-Api-Key': 'ZsuzYGkSeiiSSoGXpGVv0A==OJZmu6EW4aYuL5c1'}}).then((resp) => {
      console.log(resp);
      setVisitors(resp.data.value);
  
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
          <span className='container__quantity-number'> {visitors > 0 ? visitors : '...'}</span>
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
