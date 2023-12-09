import Hand from "./hand.png";
import "./App.css";

function App() {
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
          <span className='container__quantity-number'> xxx</span>
        </p>
      </div>
      <div className='contacts'>
        <a
          className='contacts__telega'
          href='https://t.me/nuncame'
          target='_blank'
          rel='noreferrer'
        >
          @vii
        </a>
        <a
          className='contacts__telega'
          href='https://t.me/DmitryAlabam'
          target='_blank'
          rel='noreferrer'
        >
          @alabam
        </a>
      </div>
    </div>
  );
}

export default App;
