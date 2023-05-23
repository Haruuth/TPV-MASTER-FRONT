import React, { useState } from "react";
import "../Salon/Salon.scss";

const Salon = ({ isOpen, onClose }) => {
  const [diseñoSalon, setDiseñoSalon] = useState(true);

  if (!isOpen) {
    return null;
  }

  const abrirSalon = () => {
    setDiseñoSalon(true);
  };

  const abrirTerraza = () => {
    setDiseñoSalon(false);
  };

  return (
    <div className="contenedor">
      <div className="botones">
        <button className="button" onClick={onClose}>❌</button>
        <button className="button" onClick={abrirSalon}>SALÓN</button>
        <button className="button" onClick={abrirTerraza}>TERRAZA</button>
      </div>
      <div className="diseños">
        {diseñoSalon ? (
          <div className="diseñoDeSalon">
            <div className="mitad">
              <div id="Mesa9" className="mesa">
                Mesa9
              </div>
              <div id="Mesa10" className="mesa">
                Mesa10
              </div>
              <div id="Mesa11" className="mesa">
                Mesa11
              </div>
              <div id="Barr1" className="mesa">
                Barr1
              </div>
              <div id="Barr2" className="mesa">
                Barr2
              </div>
              <div id="Barr3" className="mesa">
                Barr3
              </div>
              <div id="Barr4" className="mesa">
                Barr4
              </div>
              <div id="Barr5" className="mesa">
                Barr5
              </div>
            </div>
            <div className="mitad">
              <div id="Mesa8" className="mesa">
                Mesa8
              </div>
              <div id="Mesa6" className="mesa">
                Mesa6
              </div>
              <div id="Mesa5" className="mesa">
                Mesa5
              </div>
              <div id="Mesa12" className="mesa">
                Mesa12
              </div>
              <div id="Mesa4" className="mesa">
                Mesa4
              </div>
              <div id="Mesa3" className="mesa">
                Mesa3
              </div>
              <div id="Mesa2" className="mesa">
                Mesa2
              </div>
              <div id="Mesa1" className="mesa">
                Mesa1
              </div>
            </div>
          </div>
        ) : (
          <div className="diseñoDeTerraza">AQUI VA LA TERRAZA</div>
        )}
      </div>
    </div>
  );
};

export default Salon;
