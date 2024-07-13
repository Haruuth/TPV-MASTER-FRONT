import React from "react";
import Button from '@mui/material/Button';

const BotonesLaterales = ({ handleAnularCuenta, handleCobrarCuenta, closeDrawer }) => {
    return (
      <div className="flex w-full flex-col">
        <p>BOTONES LATERALES</p>
        <Button onClick={closeDrawer} className="mesas" variant="contained" color="primary">
          Close ➡️
        </Button>
        <Button onClick={handleAnularCuenta}>ANULAR CUENTA</Button>
        <Button onClick={handleCobrarCuenta}>COBRAR CUENTA</Button>
      </div>
    );
  };

  export default BotonesLaterales;
