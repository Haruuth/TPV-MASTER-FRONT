import React, { useState } from "react";

import "./Salon.scss";
// import Draggable from "react-draggable";


const Salon = ({ isOpen }) => {
  const [diseñoSalon, setDiseñoSalon] = useState(true);
  const [mostrarNuevaMesa, setMostrarNuevaMesa] = useState(false);
//   const [mesas, setMesas] = useState([]);


//FUNCION PARA GENERAR MESAS
//   const generarMesas = () => {
//     const nuevasMesas = [];
//     const totalMesas = 17;

//     for (let i = 1; i <= totalMesas; i++) {
//       const mesa = {
//         id: i,
//         numero: i,
//         nombre: `Mesa ${i}`,
//         seleccionada: false,
//         estado: "Libre",
//         pedidos: [],
//         cuenta: 0,
        // Otras propiedades relevantes a tu caso
//       };
//       nuevasMesas.push(mesa);
//     }

//     setMesas(nuevasMesas);
//   };

//   useEffect(() => {
//     generarMesas();
//   }, []);


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

  // const NuevaMesa = () => {
  //   const handleDrag = (e, data) => {
      
      // Manejar el evento de arrastre de la nueva mesa
  //   };

  //   return (
  //     <Draggable onStop={handleDrag}>
  //       <div className="mesa nueva-mesa">Nueva Mesa</div>
  //     </Draggable>
  //   );
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

              {/* <Draggable> */}
                <div id="Mesa9" className="mesa">
                  Mesa9
                </div>
              {/* </Draggable> */}
              {/* <Draggable>{mostrarNuevaMesa && <NuevaMesa />}</Draggable> */}
              {/* <Draggable> */}
                <div id="Mesa10" className="mesa">
                  Mesa10
                </div>
              {/* </Draggable> */}
              {/* <Draggable> */}
                <div id="Mesa11" className="mesa">
                  Mesa11
                </div>
              {/* </Draggable> */}
              {/* <Draggable> */}
                <div id="Barr1" className="mesa">
                  Barr1
                </div>
              {/* </Draggable> */}
              {/* <Draggable> */}
                <div id="Barr2" className="mesa">
                  Barr2
                </div>
              {/* </Draggable> */}
              {/* <Draggable> */}
                <div id="Barr3" className="mesa">
                  Barr3
                </div>
              {/* </Draggable> */}
              {/* <Draggable> */}
                <div id="Barr4" className="mesa">
                  Barr4
                </div>
              {/* </Draggable> */}
              {/* <Draggable> */}
                <div id="Barr5" className="mesa">
                  Barr5
                </div>
              {/* </Draggable> */}
            </div>
            <div className="mitad">
              {/* <Draggable> */}
                <div id="Mesa8" className="mesa">
                  Mesa8
                </div>
              {/* </Draggable> */}
              {/* <Draggable> */}
                <div id="Mesa6" className="mesa">
                  Mesa6
                </div>
              {/* </Draggable> */}
              {/* <Draggable> */}
                <div id="Mesa5" className="mesa">
                  Mesa5
                </div>
              {/* </Draggable> */}
              {/* <Draggable> */}
                <div id="Mesa12" className="mesa">
                  Mesa12
                </div>
              {/* </Draggable> */}
              {/* <Draggable> */}
                <div id="Mesa4" className="mesa">
                  Mesa4
                </div>
              {/* </Draggable> */}
              {/* <Draggable> */}
                <div id="Mesa3" className="mesa">
                  Mesa3
                </div>
              {/* </Draggable> */}
              {/* <Draggable> */}
                <div id="Mesa2" className="mesa">
                  Mesa2
                </div>
              {/* </Draggable> */}
              {/* <Draggable> */}
                <div id="Mesa1" className="mesa">
                  Mesa1
                </div>
              {/* </Draggable> */}

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
