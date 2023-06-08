import React from "react";
import "./ModalCobrar.scss"

export const ModalCobrar = ({ cobrarCuenta, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="container">
      <div className="info">
        <p>SOY EL COBRO</p>
        <button className="cobrar" onClick={cobrarCuenta}>Cobrar cuenta</button>
        <button className="cerrar" onClick={onClose}>❌</button>
      </div>
    </div>
  );
};
