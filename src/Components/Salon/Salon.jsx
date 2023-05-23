import React, { useState } from "react";
import "../Salon/Salon.scss";

const Salon = ({ isOpen, onClose }) => {
const [diseñoSalon, setDiseñoSalon] = useState(false)

  if (!isOpen) {
    return null;
  }

  const abrirSalon = () => {
    setDiseñoSalon(true)
    }

  const abrirTerraza = () => {
    setDiseñoSalon(false)
    }
  

  return (
    <div className="container">
      <div className="botones">
        <button onClick={onClose}>❌</button>
        <button onClick={abrirSalon}>SALÓN</button>
        <button onClick={abrirTerraza}>TERRAZA</button>
      </div>
      <div className="diseños">

      {diseñoSalon ? 
      (
      <div className="diseñoDeSalon"> 
      AQUI VA EL SALON
      </div>
      ):( 
      <div className="diseñoDeTerraza">
      AQUI VA LA TERRAZA
      </div>
      )}

      

      </div>
    </div>
  );
};

export default Salon;
