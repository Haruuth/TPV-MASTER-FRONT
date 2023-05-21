import React from 'react';
import Salon from '../../Components/Salon/Salon';

const SalonPage = ({ onTableSelect }) => {
  return (
    <div className="container">
      <h1>Salón</h1>
      <Salon onTableSelect={onTableSelect} />
    </div>
  );
};

export default SalonPage;
