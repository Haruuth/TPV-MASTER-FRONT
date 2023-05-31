import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useCallback, useEffect, useState } from "react";
import { Cervezas } from "./Components/Cervezas/Cervezas";
import { Ginebras } from "./Components/Ginebras/Ginebras";
import { Categorias } from "./Components/Categorias/Categorias";
import Salon from "./Components/Salon/Salon";
import { Cocteles } from "./Components/Cocteles/Cocteles";

function App() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [salonOpen, setSalonOpen] = useState(false);
  const [selectedMesaID, setSelectedMesaID] = useState("");
  const [selectedMesaInfo, setSelectedMesaInfo] = useState({});

  const handleMesaSelection = (numeroMesa) => {
    setSelectedMesaID(numeroMesa);
    setSelectedProduct(selectedMesaInfo[numeroMesa] || []);
  };

  const updateSelectedMesaInfo = useCallback(() => {
    setSelectedMesaInfo((prevState) => ({
      ...prevState,
      [selectedMesaID]: selectedProduct,
    }));
  }, [selectedMesaID, selectedProduct]);

  useEffect(() => {
    updateSelectedMesaInfo();
  }, [selectedProduct, selectedMesaID, updateSelectedMesaInfo]);

  
  useEffect(() => {
    const savedMesaInfo = localStorage.getItem("selectedMesaInfo");
    const savedSelectedProduct = localStorage.getItem("selectedProduct");
    
    if (savedMesaInfo) {
      setSelectedMesaInfo(JSON.parse(savedMesaInfo));
    }
    
    if (savedSelectedProduct) {
      setSelectedProduct(JSON.parse(savedSelectedProduct));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedMesaInfo", JSON.stringify(selectedMesaInfo));
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
  }, [ selectedProduct, selectedMesaInfo]);
  
  // useEffect(() => {
  //   const savedMesaInfo = localStorage.getItem("selectedMesaInfo");
  //   if (savedMesaInfo) {
  //     setSelectedMesaInfo(JSON.parse(savedMesaInfo));
  //   }
  // }, []);


  const openSalones = () => {
    setSalonOpen((prevState) => !prevState);
  };

  const totalCuenta = selectedProduct
    .reduce((sum, product) => sum + product.precio, 0)
    .toFixed(2);

  const quitProducts = (index) => {
    const updatedProducts = [...selectedProduct];
    updatedProducts.splice(index, 1);
    setSelectedProduct(updatedProducts);
  };

 
  return (
    <Router>
      <div className="containerApp">
        <div className="App">
          {/* <div className="modal"> */}
          <Salon
            onMesaSelect={handleMesaSelection}
            isOpen={salonOpen}
            onClose={() => setSalonOpen(false)}
            selectedMesaInfo={selectedMesaInfo}
          ></Salon>

          {/* </div> */}

          <div className="textarea">
            <div className="textarea--bloque">
              {/* <p>Cuenta total:</p> */}
              {selectedProduct.map((product, index) => (
                <div
                  className={`cuenta ${
                    product.seleccionado ? "seleccionado" : ""
                  }`}
                  key={index}
                >
                  <p>{product.nombre}</p>
                  <p>{product.precio}</p>
                  <button onClick={() => quitProducts(index)}>❌</button>
                </div>
              ))}
            </div>
            <div className="barraInferior">
              <p className="mesa1">
                <strong>Mesa: </strong>
                <strong> {selectedMesaID} </strong>
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
          <button onClick={openSalones} className="mesas">
            MESAS
          </button>
          <button onClick={() => setSelectedProduct([])}>ANULAR CUENTA</button>
        </div>
      </div>
    </Router>
  );
}

export default App;

