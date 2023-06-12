import React from 'react';

const CidadeSelect = ({ cidade, onChange }) => {
  const cidades = [
    'Belo Horizonte',
    'Belém',
    'Brasília',
    'Campinas',
    'Curitiba',
    'Duque de Caxias',
    'Fortaleza',
    'Goiânia',
    'Guarulhos',
    'Jaboatão dos Guararapes',
    'João Pessoa',
    'Maceió',
    'Manaus',
    'Natal',
    'Nova Iguaçu',
    'Osasco',
    'Porto Alegre',
    'Recife',
    'Ribeirão Preto',
    'Rio de Janeiro',
    'Salvador',
    'Santo André',
    'Serra',
    'São Bernardo do Campo',
    'São Gonçalo',
    'São Luís',
    'São Paulo'
  ];

  return (
    <div className="col mb-3">
      <label htmlFor="cidade">Cidade</label>
      <select 
        className="form-control" 
        id="cidade" 
        name="cidade" 
        value={cidade} 
        onChange={onChange}
      >
        <option>Selecione uma cidade</option>
        {cidades.map(cidade => (
          <option key={cidade} value={cidade}>
            {cidade}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CidadeSelect;
