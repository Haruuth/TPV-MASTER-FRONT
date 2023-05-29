import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import { Cervezas } from "./Components/Cervezas/Cervezas";
import { Ginebras } from "./Components/Ginebras/Ginebras";
import { Categorias } from "./Components/Categorias/Categorias";
import Salon from "./Components/Salon/Salon";
import { Cocteles } from "./Components/Cocteles/Cocteles";

function App() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [salonOpen, setSalonOpen] = useState(false);


  const openSalones = () => {
    setSalonOpen(prevState => !prevState);
  };


  const totalCuenta = selectedProduct.reduce(
    (sum, product) => sum + product.precio,
    0
  ).toFixed(2);

  
  const quitProducts = (index) => {
    const updateProducts = [...selectedProduct];
    updateProducts.splice(index, 1 )
    setSelectedProduct(updateProducts);
  }
 

  return (
    <Router>
      <div className="containerApp">
        <div className="App">
          {/* <div className="modal"> */}
          <Salon isOpen={salonOpen} onClose={() => setSalonOpen(false)}></Salon>
          {/* </div> */}

          <div className="textarea">
            <div className="textarea--bloque">
              {/* <p>Cuenta total:</p> */}
              {selectedProduct.map((product, index) => (
                 <div className={`cuenta ${product.seleccionado ? 'seleccionado' : ''}`} key={index}>
                  <p>{product.nombre}</p>
                  <p>{product.precio}</p>
                  <button onClick={() => quitProducts(index)}>❌</button>
                </div>
              ))}
            </div>
            <div className="barraInferior">
              <p className="mesa">
                <strong>Mesa: </strong>
                <strong> ID </strong>
              </p>
              <p className="total">
                <strong>Total: </strong>
                <strong> {totalCuenta} </strong>
              </p>
            </div>
          </div>

          <div className="calculadora">
            <p> CALCULADORA </p>
          </div>

          <div className="categoria">
            <Categorias></Categorias>
          </div>

          <div className="products">
            <Routes>
              <Route
                path="/cervezas"
                element={<Cervezas setSelectedProduct={setSelectedProduct} />}
              />
              <Route path="/ginebras" element={<Ginebras />} />
              <Route
                path="/cocteles"
                element={<Cocteles setSelectedProduct={setSelectedProduct} />}
              />
            </Routes>
          </div>
        </div>
        <div className="botonesLaterales">
          <p>BOTONES LATERALES</p>
          <button onClick={openSalones} className="mesas">MESAS</button>
          <button onClick={() => setSelectedProduct([])}>ANULAR CUENTA</button>

        </div>
      </div>
    </Router>
  );
}

export default App;
