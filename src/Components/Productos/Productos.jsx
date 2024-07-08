import React, { useEffect, useState } from "react";
import "./Producto.scss";
import axios from "axios";



export const Productos = ({setSelectedProduct, productoURL }) => {
  const [producto, setProductos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/${productoURL}`).then((res) => {
      console.log(res);
      setProductos(res.data);
    });
  }, []);

  return (
    <>
      <div className="containerProd" key={Math.random()}>
        {producto.map((datos, id) => {
          return (
            <>
              {datos.nombre && datos.precio ? (
                <div 
                  className="individual"
                  key={id}
                  onClick={() =>
                    setSelectedProduct((cuentaProducts) => [
                      ...cuentaProducts,
                      datos,
                    ])
                  }
                >
                  {datos.image ? (
                    <img src={datos.image} alt={datos.nombre} />
                  ) : null}
                  <p>
                    <strong>{datos.nombre}</strong>
                  </p>
                  <p>Precio: {datos.precio}</p>
                </div>
              ) : null}
            </>
          );
        })}
      </div>
    </>
  );
};
