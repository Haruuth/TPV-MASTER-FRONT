import React, { useState } from "react";
import "./Salon.scss";

const Salon = ({ isOpen, onClose, onMesaSelect, selectedMesaInfo }) => {
  const [diseñoSalon, setDiseñoSalon] = useState(true);
  const [mostrarNuevaMesa, setMostrarNuevaMesa] = useState(false);
  const [mesaSeleccionada] = useState(null);
  // const [setMesaInfo] = useState({});

  const handleMesaSelection = (numeroMesa) => {
    onMesaSelect(numeroMesa);
    onClose(); // Cerrar el componente "Salon" después de seleccionar la mesa
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

  // const guardarMesaSeleccionada = () => {
  //   setMesaInfo((prevState) => ({
  //     ...prevState,
  //     [mesaSeleccionada]: [],
  //   }));
  //   onClose(); // Cerrar el componente "Salon" después de seleccionar la mesa
  // };

  return (
    <div className="contenedor">
      <div className="botones">
        <button className="button" onClick={abrirSalon}>
          SALÓN
        </button>
        <button className="button" onClick={abrirTerraza}>
          TERRAZA
        </button>
        <button className="button" onClick={toggleNuevaMesa}>
          {mostrarNuevaMesa ? "Cancelar" : "Agregar Mesa"}
        </button>
      </div>
      <div className="diseños">
        {diseñoSalon ? (
          <div className="diseñoDeSalon">
            <div className="mitad">
              <div
                id="1"
                className={`mesa ${
                  mesaSeleccionada === "1" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["1"] && selectedMesaInfo["1"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("1")}
              >
                Mesa 1
              </div>

              <div
                id="2"
                className={`mesa ${
                  mesaSeleccionada === "2" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["2"] && selectedMesaInfo["2"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("2")}
              >
                Mesa 2
              </div>
              <div
                id="3"
                className={`mesa ${
                  mesaSeleccionada === "3" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["3"] && selectedMesaInfo["3"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("3")}
              >
                Mesa 3
              </div>
              <div
                id="4"
                className={`mesa ${
                  mesaSeleccionada === "4" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["4"] && selectedMesaInfo["4"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("4")}
              >
                Mesa 4
              </div>
              <div
                id="5"
                className={`mesa ${
                  mesaSeleccionada === "5" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["5"] && selectedMesaInfo["5"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("5")}
              >
                Mesa 5
              </div>
              <div
                id="6"
                className={`mesa ${
                  mesaSeleccionada === "6" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["6"] && selectedMesaInfo["6"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("6")}
              >
                Mesa 6
              </div>
              <div
                id="7"
                className={`mesa ${
                  mesaSeleccionada === "7" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["7"] && selectedMesaInfo["7"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("7")}
              >
                Mesa 7
              </div>
              <div
                id="8"
                className={`mesa ${
                  mesaSeleccionada === "8" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["8"] && selectedMesaInfo["8"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("8")}
              >
                Mesa 8
              </div>
            </div>
            <div className="mitad">
              <div
                id="9"
                className={`mesa ${
                  mesaSeleccionada === "9" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["9"] && selectedMesaInfo["9"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("9")}
              >
                Mesa 9
              </div>
              <div
                id="10"
                className={`mesa ${
                  mesaSeleccionada === "10" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["10"] && selectedMesaInfo["10"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("10")}
              >
                Mesa 10
              </div>
              <div
                id="11"
                className={`mesa ${
                  mesaSeleccionada === "11" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["11"] && selectedMesaInfo["11"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("11")}
              >
                Mesa 11
              </div>
              <div
                id="12"
                className={`mesa ${
                  mesaSeleccionada === "12" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["12"] && selectedMesaInfo["12"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("12")}
              >
                Mesa 12
              </div>
              <div
                id="B1"
                className={`mesa ${
                  mesaSeleccionada === "B1" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["B1"] && selectedMesaInfo["B1"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("B1")}
              >
                Mesa B1
              </div>
              <div
                id="B2"
                className={`mesa ${
                  mesaSeleccionada === "B2" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["B2"] && selectedMesaInfo["B2"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("B2")}
              >
                Mesa B2
              </div>
              <div
                id="B3"
                className={`mesa ${
                  mesaSeleccionada === "B3" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["B3"] && selectedMesaInfo["B3"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("B3")}
              >
                Mesa B3
              </div>
              <div
                id="B4"
                className={`mesa ${
                  mesaSeleccionada === "B4" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["B4"] && selectedMesaInfo["B4"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("B4")}
              >
                Mesa B4
              </div>
              <div
                id="B5"
                className={`mesa ${
                  mesaSeleccionada === "B5" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["B5"] && selectedMesaInfo["B5"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("B5")}
              >
                Mesa B5
              </div>
            </div>
          </div>
        ) : (
          <div className="diseñoDeTerraza">
            <div className="mitad">
              <div
                id="T1"
                className={`mesa ${
                  mesaSeleccionada === "T1" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["T1"] && selectedMesaInfo["T1"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("T1")}
              >
                Mesa T1
              </div>

              <div
                id="T2"
                className={`mesa ${
                  mesaSeleccionada === "T2" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["T2"] && selectedMesaInfo["T2"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("T2")}
              >
                Mesa T2
              </div>
              <div
                id="T3"
                className={`mesa ${
                  mesaSeleccionada === "T3" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["T3"] && selectedMesaInfo["T3"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("T3")}
              >
                Mesa T3
              </div>
              <div
                id="T4"
                className={`mesa ${
                  mesaSeleccionada === "T4" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["T4"] && selectedMesaInfo["T4"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("T4")}
              >
                Mesa T4
              </div>
              <div
                id="T5"
                className={`mesa ${
                  mesaSeleccionada === "T5" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["T5"] && selectedMesaInfo["T5"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("T5")}
              >
                Mesa T5
              </div>
              <div
                id="T6"
                className={`mesa ${
                  mesaSeleccionada === "T6" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["T6"] && selectedMesaInfo["T6"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("T6")}
              >
                Mesa T6
              </div>
              <div
                id="T7"
                className={`mesa ${
                  mesaSeleccionada === "T7" ? "seleccionada" : ""
                } ${
                  selectedMesaInfo["T7"] && selectedMesaInfo["T7"].length > 0
                    ? "con-informacion"
                    : ""
                }`}
                onClick={() => handleMesaSelection("T7")}
              >
                Mesa T7
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Salon;
