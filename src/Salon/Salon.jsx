import React, { useState } from "react";
import "./Salon.scss";

const Salon = ({
  isOpen,
  onClose,
  onMesaSelect,
  selectedMesaInfo,
  openSalones,
}) => {
  const [diseñoSalon, setDiseñoSalon] = useState(true);
  const [mostrarNuevaMesa, setMostrarNuevaMesa] = useState(false);
  const [mesaSeleccionada] = useState(null);

  const handleMesaSelection = (numeroMesa) => {
    onMesaSelect(numeroMesa);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  const abrirSalon = () => {
    setMostrarNuevaMesa(false);
    setDiseñoSalon(true);
  };

  const abrirTerraza = () => {
    setMostrarNuevaMesa(false);
    setDiseñoSalon(false);
  };

  const toggleNuevaMesa = () => {
    setMostrarNuevaMesa(!mostrarNuevaMesa);
  };

  const generarMesas = () => {
    const mesas = [];
    const cantidadMesasSalon = 17;

    for (let i = 1; i <= cantidadMesasSalon; i++) {
      const numeroMesa = i <= 12 ? i : `B${i - 12}`;
      const isSelected = mesaSeleccionada === numeroMesa;
      const hasInfo =
        selectedMesaInfo[numeroMesa] && selectedMesaInfo[numeroMesa].length > 0;

      mesas.push(
        <div
          key={numeroMesa}
          id={numeroMesa}
          className={`mesa ${isSelected ? "seleccionada" : ""} ${
            hasInfo ? "con-informacion" : ""
          }`}
          onClick={() => handleMesaSelection(numeroMesa)}
        >
          Mesa {numeroMesa}
        </div>
      );
    }

    return mesas;
  };

  const generarMesasTerraza = () => {
    const mesas = [];
    const cantidadMesasTerraza = 7;

    for (let i = 1; i <= cantidadMesasTerraza; i++) {
      const numeroMesa = `T${i}`;
      const isSelected = mesaSeleccionada === numeroMesa;
      const hasInfo =
        selectedMesaInfo[numeroMesa] && selectedMesaInfo[numeroMesa].length > 0;

      mesas.push(
        <div
          key={numeroMesa}
          id={numeroMesa}
          className={`mesa ${isSelected ? "seleccionada" : ""} ${
            hasInfo ? "con-informacion" : ""
          }`}
          onClick={() => handleMesaSelection(numeroMesa)}
        >
          Mesa {numeroMesa}
        </div>
      );
    }

    return mesas;
  };

  return (
    <div className="contenedor">
      <div class="cerrar">
        <button onClick={openSalones}>❌</button>
      </div>
      <div className="botones">
        <button className="button" onClick={abrirSalon}>
          SALÓN
        </button>
        <button className="button" onClick={abrirTerraza}>
          TERRAZA
        </button>
        <button className="button" onClick={toggleNuevaMesa}>
          {mostrarNuevaMesa ? "CANCELAR" : "AGREGAR MESA"}
        </button>
      </div>
      <div className="diseños">
        {diseñoSalon ? (
          <div className="diseñoDeSalon">
            <div className="mitad">{generarMesas().slice(0, 8)}</div>
            <div className="mitad">{generarMesas().slice(8)}</div>
          </div>
        ) : (
          <div className="diseñoDeTerraza">
            <div className="mitad">{generarMesasTerraza()}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Salon;
