import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Ginebras.scss";


export const Ginebras = () => {
  const [ginebras, setGinebras] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:5000/ginebras").then((res) => {
      console.log(res);
      setGinebras(res.data);
    });
  }, []);


    return (
    <div className="containerProd">
      {ginebras.map((ginebra, id) => (
        <div className="individual1" key={id}>
          <img src={ginebra.image} alt={ginebra.nombre} />
          <p><strong>{ginebra.nombre}</strong></p>
          <p>Precio: {ginebra.precio}</p>
        </div>
      ))}
    </div>
  )
}



// style={{
//   backgroundImage: `url(${ginebras.image})`,
//   backgroundSize: "contain",
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",
//   height: "100px",
//   width: "auto",
// }}