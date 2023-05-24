import React from "react";
import Draggable from "react-draggable";
import "../Salon/Salon.scss";

const NuevaMesa = () => {
  const handleDrag = (e, { deltaX, deltaY }) => {
    
    
  };

  return (
    <Draggable onStop={handleDrag}>
      <div className="mesa nueva-mesa">Nueva Mesa</div>
    </Draggable>
  );
};

export default NuevaMesa;
