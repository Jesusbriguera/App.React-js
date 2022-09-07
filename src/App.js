// import logo from './logo.svg';
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  const saludo = "Hola Mundo";

  return (
    <div>
      <NavBar />

      <ItemListContainer saludo={saludo} greeting="Hola Coder" />

      {/* <ItemDetailContainer /> */}
      {/* <div className="App"><ItemCount/></div>  */}

      {/* <div className="App" style={{marginTop:"100px"}}>Footer</div> */}
    </div>
  );
}

export default App;

{
  /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
}
