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
    setSalonOpen(true);
  };

  const totalCuenta = selectedProduct.reduce(
    (sum, product) => sum + product.precio,
    0
  );

  const toggleSeleccionado = (index) => {
    const updatedProducts = [...selectedProduct];
    updatedProducts[index].seleccionado = !updatedProducts[index].seleccionado;
    setSelectedProduct(updatedProducts);
  };
  const quitProducts = (index) => {
    const updateProducts = [...selectedProduct];
    updateProducts.splice(index, 1 )
    setSelectedProduct(updateProducts);
  }
  // const cambiarPrecio = (index, precio) => {
  //   const updatedProducts = [...selectedProduct];
  //   updatedProducts[index].precioModificado = precio;
  //   setSelectedProduct(updatedProducts);
  // };

  // const cambiarCantidad = (index, cantidad) => {
  //   const updatedProducts = [...selectedProduct];
  //   updatedProducts[index].cantidadModificada = cantidad;
  //   setSelectedProduct(updatedProducts);
  // };


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
                 <input
                   type="checkbox"
                   checked={product.seleccionado}
                   onChange={() => toggleSeleccionado(index)}
                 />
                  <p>{product.nombre}</p>
                  <p>{product.precio}</p>
                  <button onClick={() => quitProducts(index)}>❌NONI</button>
                </div>
              ))}
            </div>
            <div className="barraInferior">
              <p className="mesa">
                <strong>Mesa: </strong>
              </p>
              <p className="total">
                <strong>Total: {totalCuenta} </strong>
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
