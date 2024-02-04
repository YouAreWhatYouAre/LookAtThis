import { useState, useEffect } from "react";
import Hand from "./hand.png";
import "./App.css";
import "./vendor/normalize.css";
import "./vendor/fonts/fonts.css";
import axios from 'axios'


function App() {
  const [visitors, setVisitors] = useState(0);

  const BASEURL = 'https://api.api-ninjas.com/v1/counter?id=visits&hit=true';

  useEffect(() => {
    axios.get(BASEURL, {headers: { 'X-Api-Key': 'ZsuzYGkSeiiSSoGXpGVv0A==OJZmu6EW4aYuL5c1'}}).then((resp) => {
      setVisitors(resp.data.value);
    }).catch(err => console.log(err))
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
          href='https://pay.cloudtips.ru/p/d0125371'
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
