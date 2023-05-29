import React, { useEffect, useState } from 'react'
import axios from "axios";


export const Cocteles = ({ setSelectedProduct }) => {
  const [cocteles, setCocteles] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/cocteles").then((res) => {
      console.log(res);
      setCocteles(res.data);
    });
  }, []);

  return (
    <div className="containerProd">
      {cocteles.map((cocteles, id) => (
        <div className="individual" key={id} onClick={() => setSelectedProduct(cuentaProducts =>[...cuentaProducts, cocteles])}>
          <img src={cocteles.image} alt={cocteles.nombre} />
          <p><strong>{cocteles.nombre}</strong></p>
          {/* <p>Precio: {cocteles.precio}</p> */}
        </div>
      ))}
    </div>
  )
}
