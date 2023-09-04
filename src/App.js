
import './App.css';
import Main from './components/public/Main';
import { Footer } from './components/public/footer';
import { Header } from './components/public/header';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>

    </div>
  );
}

export default App;


/*<div classNameName="App">
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/