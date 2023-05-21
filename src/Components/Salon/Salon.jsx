import React, { useState } from 'react';
import '../Salon/Salon.scss';

const Salon = ({ onTableSelect }) => {
  const [selectedTable, setSelectedTable] = useState(null);

  const handleTableClick = (tableNumber) => {
    setSelectedTable(tableNumber);
    if (onTableSelect) {
      onTableSelect(tableNumber);
    }
  };

  const tables = Array(12) // Cambia este número según la cantidad de mesas que necesites
    .fill()
    .map((_, index) => index + 1);

  return (
    <div className="salon">
      <h2>Selecciona una mesa</h2>
      <div className="table-grid">
        {tables.map((tableNumber) => (
          <button
            key={tableNumber}
            className={`table-btn ${
              selectedTable === tableNumber ? 'table-selected' : ''
            }`}
            onClick={() => handleTableClick(tableNumber)}
          >
            Mesa {tableNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Salon;
