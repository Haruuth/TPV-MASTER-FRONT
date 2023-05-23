import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import { Cervezas } from "./Components/Cervezas/Cervezas";
import { Ginebras } from "./Components/Ginebras/Ginebras";
import { Categorias } from "./Components/Categorias/Categorias";
import Salon from "./Components/Salon/Salon";
// import { Productos } from "./Components/Productos/Productos";

function App() {
  // const [rones, setRones] = useState([]);
  // const [whiskey, setWhiskey] = useState([]);
  // const [vodka, setVodka] = useState([]);
  const [salonOpen, setSalonOpen] = useState(false);

  const openSalones = () => {
    setSalonOpen(true);
  };
  // const closeSalones = () => {
  //   setSalonOpen(false);
  // }

  return (
    <Router>
      <div className="containerApp">
        <div className="App">

          {/* <div className="modal"> */}
          <Salon isOpen={salonOpen} onClose={() => setSalonOpen(false)}></Salon>
          {/* </div> */}

          <div className="textarea">
            <p>TEXTAREA</p>
          </div>

          <div className="calculadora">
            <p> CALCULADORA </p>
          </div>


          <div className="categoria">
            <Categorias></Categorias>
          </div>

          <div className="products">
            <Routes>
              <Route path="/cervezas" element={<Cervezas />} />
              <Route path="/ginebras" element={<Ginebras />} />
            </Routes>
          </div>
        </div>
        <div className="botonesLaterales">
          <p>BOTONES LATERALES</p>
          <button onClick={openSalones} className="mesas">
            MESAS
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;
