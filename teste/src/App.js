import React, { useState } from 'react';




const RandomButton = ({settela}) => {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [moveCount, setMoveCount] = useState(0);

  const handleMouseEnter = () => {
    if (moveCount < 3) {
      const randomX = Math.random() * (window.innerWidth - 1080);
      const randomY = Math.random() * (window.innerHeight - 900);

      setPosition({ x: randomX, y: randomY });
      setMoveCount(moveCount + 1);
    } else {
      settela(3);
      const randomX = Math.random() * (window.innerWidth - 1080);
      const randomY = Math.random() * (window.innerHeight - 900);

      setPosition({ x: randomX, y: randomY });
    }
  };
  return (
    <button
      onMouseEnter={handleMouseEnter}
      style={{ position: 'absolute', top: position.y, left: position.x }}
    >
      Não
    </button>
  );
};




const App = () => {
  const h1Style = {
    fontFamily: 'Caveat cursive', // Defina a fonte de escrita de pena desejada
  };
  const appStyle = {
    backgroundColor: 'lightpink',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const buttonContainerStyle = {

    marginBottom: '20px',
    position: 'relative',
   
  };

  const buttonStyle = {
    position: 'relative',
    zIndex: 1,
 
  };

  const handleSimClick = () => {
    settela(2);
  };
  const handleSimClick2 = () => {
    settela(1);
  };
  const handleSimClick3 = () => {
    settela(4);
  };
  const handleSimClick4 = () => {
    settela(5);
  };
  const handleSimClick5 = () => {
    settela(6);
  };


  const renderTela = () => {
    if (tela === 1) {
      return (
        <div style={appStyle}>
          <h1>Quer namorar comigo?</h1>
       
         
          <div style={buttonContainerStyle}>
            <RandomButton  settela={settela}/>
          </div>
        </div>
      );
    } else if (tela === 2) {
      return (
        <div style={appStyle}>
          <h1>te amo meu bem...</h1>
          <h1>datezinho ?</h1>
          <h1>ou</h1>
          <h1>filminho mind hunter kkk ?</h1>
        </div>
      );
    }
    else if (tela === 3) {
      return (
        <div style={appStyle}>
         <div style={buttonContainerStyle}>
            <button style={buttonStyle} onClick={handleSimClick}>
              Sim
            </button>
            <div style={buttonContainerStyle}>
            <RandomButton  settela={settela}/>
          </div>
          </div>
        </div>
      );
    }

    else if (tela === 4) {
      return (
        <div style={appStyle}>
           <h1 style={h1Style} >tive essa vontade no dia em que voce me pediu para olhar a lua...</h1>
           <h1 style={h1Style} >a minha primeira, única e eterna Marcelle eu pergunto...</h1>
         <div style={buttonContainerStyle}>
            <button style={buttonStyle} onClick={handleSimClick2}>
              clique aqui
            </button>
          </div>
        </div>
      );
    }

    else if (tela === 5) {
      return (
        <div style={appStyle}>
           <h1 style={h1Style}>nao achei que ia conseguir gostar de alguém de novo...</h1>
           <h1 style={h1Style}>acho que gosto ate dos seus defeitos....</h1>
         <div style={buttonContainerStyle}>
            <button style={buttonStyle} onClick={handleSimClick3}>
              clique aqui
            </button>
          </div>
        </div>
      );
    }
    else if (tela === 6) {
      return (
        <div style={appStyle}>
           <h1 style={h1Style} > veio de todas as vezes que voce ignorou algum preconceito ou jovialidade minha por minha causa...</h1>
         <div style={buttonContainerStyle}>
            <button style={buttonStyle} onClick={handleSimClick4}>
              clique aqui
            </button>
          </div>
        </div>
      );
    }
    else if (tela === 7) {
      return (
        <div style={appStyle}>
           <h1 style={h1Style}>essa vontade veio por todo o seu ânimo e força de vontade em me ver depois de um dia cansativo...</h1>
         <div style={buttonContainerStyle}>
            <button style={buttonStyle} onClick={handleSimClick5}>
              clique aqui
            </button>
          </div>
        </div>
      );
    }
  };

  const [tela, settela] = useState(7);

  return <div>{renderTela()}</div>;
};

export default App;