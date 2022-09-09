// import logo from './logo.svg';
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/DetailContainer/Detail/ItemDetailContainer";

function App() {
  const saludo = "Hola Mundo";

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer saludo={saludo} greeting="Hola Coder" />}
        />
        <Route path='/categoria/:categoriaId' element={ <ItemListContainer saludo={saludo} greeting='hello' />}/>
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route />
      </Routes>
      {/* <div className="App"><ItemCount/></div>  */}
      {/* <div className="App" style={{marginTop:"100px"}}>Footer</div> */}
    </BrowserRouter>
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
