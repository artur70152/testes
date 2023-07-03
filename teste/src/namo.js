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

  const renderTela = () => {
    if (tela === 1) {
      return (
        <div style={appStyle}>
          <h1></h1>

         
          <div style={buttonContainerStyle}>
            <RandomButton  settela={settela}/>
          </div>
        </div>
      );
    } else if (tela === 2) {
      return (
        <div style={appStyle}>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
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
          </div>
        </div>
      );
    }

    else if (tela === 4) {
      return (
        <div style={appStyle}>
         <div style={buttonContainerStyle}>
            <button style={buttonStyle} onClick={handleSimClick2}>
              clique aqui
            </button>
          </div>
        </div>
      );
    }
  };

  const [tela, settela] = useState(4);

  return <div>{renderTela()}</div>;
};

export default App;