import "./App.css";

function App() {
  return (
    <div className='App'>
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
    </div>
  );
}

export default App;
