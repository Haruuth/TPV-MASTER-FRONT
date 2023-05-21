import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cervezas.scss";

export const Cervezas = () => {
  const [cervezas, setCervezas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/cervezas").then((res) => {
      console.log(res);
      setCervezas(res.data);
    });
  }, []);

  return (
    <div className="containerProd">
      {cervezas.map((cerveza, id) => (
        <div className="individual" key={id}>
          <img src={cerveza.image} alt={cerveza.nombre} />
          <p><strong>{cerveza.nombre}</strong></p>
          <p>Precio: {cerveza.precio}</p>
        </div>
      ))}
    </div>
  );
};

// style={{
//   backgroundImage: `url(${cerves.image})`,
//   backgroundSize: "contain",
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",
//   height: "100px",
//   width: "auto",
// }}
