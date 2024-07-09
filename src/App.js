import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useCallback, useEffect, useState } from "react";
import { Categorias } from "./Categorias/Categorias";
import Salon from "./Salon/Salon";
import axios from "axios";
import { ModalCobrar } from "./Components/ModalCobrar/ModalCobrar";
import { Productos } from "./Components/Productos/Productos";

function App() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [salonOpen, setSalonOpen] = useState(false);
  const [modalAbierta, setModalAbierta] = useState(false);
  const [selectedMesaID, setSelectedMesaID] = useState("");
  const [selectedMesaInfo, setSelectedMesaInfo] = useState({});

  const handleMesaSelection = (numeroMesa) => {
    setSelectedMesaID(numeroMesa);
    setSelectedProduct(selectedMesaInfo[numeroMesa] || []);
  };

  const handleAbrirModal = () => {
    setModalAbierta(true);
  };

  const handleCloseModal = () => {
    setModalAbierta(false);
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

  const cobrarCuenta = async () => {
    try {
      const metodoPago = document.getElementById("modalidadPago").value;

      if (metodoPago === "Efectivo" || metodoPago === "Tarjeta") {
        const cuenta = {
          num_mesa: selectedMesaID,
          fecha: new Date(),
          hora: new Date().toLocaleTimeString(),
          productos: selectedProduct,
          metodo_pago: metodoPago,
          total: totalCuenta,
        };

        const response = await axios.post(
          "http://localhost:5000/cuentas",
          cuenta
        );

        if (response.status === 200) {
          alert("Cuenta cobrada exitosamente");
          setSelectedProduct([]);
          handleCloseModal();
        }
      } else {
        alert("Método de pago inválido");
      }
    } catch (error) {
      console.error(error);
      alert("Error al cobrar la cuenta");
    }
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
            openSalones={openSalones}
          ></Salon>
          <ModalCobrar
            cobrarCuenta={cobrarCuenta}
            isOpen={modalAbierta}
            onClose={handleCloseModal}
          />

          {/* </div> */}

          <div className="textarea">
            <div className="textareaeee--bloque">
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
                path="/"
                element={
                  <Productos
                    setSelectedProduct={setSelectedProduct}
                    productoURL={"cervezas"}
                  />
                }
              />
              <Route
                path="/cervezas"
                element={
                  <Productos
                    setSelectedProduct={setSelectedProduct}
                    productoURL={"cervezas"}
                  />
                }
              />
              <Route
                path="/ginebras"
                element={
                  <Productos
                    setSelectedProduct={setSelectedProduct}
                    productoURL={"ginebras"}
                  />
                }
              />
              <Route
                path="/cocteles"
                element={
                  <Productos
                    setSelectedProduct={setSelectedProduct}
                    productoURL={"cocteles"}
                  />
                }
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
          <button onClick={modalAbierta ? handleCloseModal : handleAbrirModal}>
            COBRAR CUENTA
          </button>{" "}
        </div>
      </div>
    </Router>
  );
}

export default App;
