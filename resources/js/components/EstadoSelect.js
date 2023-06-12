import React from 'react';

const EstadoSelect = ({ estado, onChange }) => {
  const estados = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'
  ];

  return (
    <div className="col mb-3">
      <label htmlFor="estado">Estado</label>
      <select 
        className="form-control" 
        id="estado" 
        name="estado" 
        value={estado} 
        onChange={onChange}
      >
        <option>Selecione um estado</option>
        {estados.map(estado => (
          <option key={estado} value={estado}>
            {estado}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EstadoSelect;

