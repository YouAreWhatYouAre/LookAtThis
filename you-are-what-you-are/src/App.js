import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className='App'>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Кто двинется - **дор
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
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
