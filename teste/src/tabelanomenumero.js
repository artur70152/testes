import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [
 tabela 
  , setTt] = useState([{ numero: 1, nome: 'joao', trabalho: 'pescador' },
  { numero: 2, nome: 'artur', trabalho: 'jardineiro' },
  { numero: 3, nome: 'pedro', trabalho: 'engenheiro' },
  { numero: 4, nome: 'aligos', trabalho: 'vagabundo' }]);

  const montarTabela = (num) => {
    return (
      <table border='1' style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>nome</th>
            <th>trabalho</th>
            <th>numero</th>
          </tr>
        </thead>
        <tbody>
          {setTabela(num)}
        </tbody>
      </table>
    );
  };

  const setTabela = (num) => {
    const ll = [];
    if (num===0) {
      setLi('')

    }
    tabela.map((e) => {
      if (e.trabalho === num || num === '') {
        ll.push(
          <tr key={e.trabalho}>
            
            <td>{e.nome}</td>
            <td>{e.trabalho}</td>
            <td>{e.numero}</td>
          </tr>
        );
      }
    });
    //console.log(tabela)
    return ll;
  };

  const [li, setLi] = useState('');
 
  const [nova, setNova] = useState('');

  const handleAdd = (value) => {
    
    const newobj = { numero: ((tabela.length)+1), nome: value[0], trabalho: value[1]};

setTt([...tabela,newobj])
//tabela.push(newobj)
    setNova('');
  };

  return (
    <div>
      <input type='text' onChange={(e) => setLi(e.target.value)} value={li} />
      <input type='text'value={nova} onChange={(e) => setNova(e.target.value)}onKeyPress={(e) => {
    if (e.key === 'Enter') {
      handleAdd(nova.split(','));
    }
  }}
/>
      <button onClick={() => handleAdd(nova.split(','))}>nova cat</button>

      {montarTabela(li)}
    </div>
  );
};

export default Timer;