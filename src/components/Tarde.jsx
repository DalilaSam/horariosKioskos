import React, { useState } from 'react';

export default function Tarde() {
  const [encendido, setEncendido] = useState('');
  const [apagado, setApagado] = useState('');
  const [error, setError] = useState('');

  const compararHoras = (h1, h2) => {
    const [h1h, h1m] = h1.split(':').map(Number);
    const [h2h, h2m] = h2.split(':').map(Number);
    return h1h * 60 + h1m - (h2h * 60 + h2m);
  };

const handleGuardar = () => {
  setError('');

  if (!encendido || !apagado) {
    setError('Selecciona ambas horas.');
    return;
  }

  const minHora = '14:45';
  const maxHora = '23:15';

  if (encendido < minHora) {
    setError('La hora mínima de encendido es 14:45.');
    return;
  }

  if (apagado > maxHora) {
    setError('La hora máxima de apagado es 23:15.');
    return;
  }

  const diff = compararHoras(encendido, apagado);

  if (diff === 0) {
    setError('La hora de encendido y apagado no pueden ser iguales.');
  } else if (diff > 0) {
    setError('La hora de encendido no puede ser posterior a la de apagado.');
  } else {
    alert(`Guardado correctamente:\nEncendido: ${encendido}\nApagado: ${apagado}`);
  }
};


  return (
    <div>
      <div className='kioskos'>
        <h1>Tarde</h1>
        <select className="selectKiosko" name="kiosko" id="">
          <option value="default">Seleccione kiosko</option>
          <option value="kiosko1">Kiosko edificio principal</option>
          <option value="kiosko2">Ni idea de donde está</option>
          <option value="kiosko3">Vete a saber donde mierdas está</option>
        </select>
        <div className='horarios'>
          <input
            className="timeInput"
            type="time"
            value={encendido}
            onChange={e => setEncendido(e.target.value)}
            min="14:45"
            max="22:45"
          />
          <input
            className="timeInput"
            type="time"
            value={apagado}
            onChange={e => setApagado(e.target.value)}
            min="14:45"
            max="22:45"
          />
        </div>
        <button onClick={handleGuardar}>Guardar</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
