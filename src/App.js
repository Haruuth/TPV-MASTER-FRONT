import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useCallback, useEffect, useState } from "react";
import { Categorias } from "./Categorias/Categorias";
import Salon from "./Salon/Salon";
import axios from "axios";
import { ModalCobrar } from "./Components/ModalCobrar/ModalCobrar";
import { Productos } from "./Components/Productos/Productos";
import BotonesLaterales from "./Components/BotonesLaterales/botonesLaterales";
import { Drawer } from "@mui/material";
// import { Button } from "@mui/material";

function App() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [salonOpen, setSalonOpen] = useState(false);
  const [modalAbierta, setModalAbierta] = useState(false);
  const [selectedMesaID, setSelectedMesaID] = useState("");
  const [selectedMesaInfo, setSelectedMesaInfo] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMesaSelection = (numeroMesa) => {
    setSelectedMesaID(numeroMesa);
    setSelectedProduct(selectedMesaInfo[numeroMesa] || []);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  // const handleAbrirModal = () => {
  //   setModalAbierta(true);
  // };

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

  // const closeSalones = () => {
  //   setSalonOpen(false);
  // };

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

  const handleAnularCuenta = () => {
    setSelectedProduct([]);
  };

  return (
    <Router>
      <div className="w-full flex">
        <div class="flex flex-wrap w-full max-h-screen overflow-hidden">
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
          <div className="relative bg-[#ff0e0eee] w-[60%] h-[40%] ">
            <div className="w-full h-[80%] overflow-y-scroll">
              {selectedProduct.map((product, index) => (
                <div
                  className={`flex justify-between ${
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
            <div class="absolute w-full flex items-center justify-between bg-black border-2 border-orange-500 text-white p-2">
              <p className="flex justify-between w-[10%]">
                <strong>Mesa: </strong>
                <strong> {selectedMesaID} </strong>
              </p>
              <p className="flex justify-between w-[10%]">
                <strong>Total: </strong>
                <strong> {totalCuenta} </strong>
              </p>
            </div>
          </div>
          <div className="bg-[#282c34] w-[40%] h-[40%]">
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
        <div className="flex">
      {/* Botón para abrir el Drawer */}
      <div className="flex items-center">
        <button
          onClick={handleDrawerOpen}
          className="h-10 w-10 p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
        >
        </button>
      </div>

      {/* Drawer de Material-UI */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <div style={{ width: '250px', padding: '20px' }}>
          <h2>Contenido del Drawer</h2>
          <BotonesLaterales
            handleAnularCuenta={handleAnularCuenta}
            handleCobrarCuenta={cobrarCuenta}
            closeDrawer={handleDrawerClose}
          />
        </div>
      </Drawer>
    </div>
      </div>
    </Router>
  );
}

export default App;
