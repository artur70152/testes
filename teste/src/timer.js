const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      let interval = null;
  
      if (isActive) {
        interval = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }
  
      return () => {
        clearInterval(interval);
      };
    }, [isActive, seconds]);
  
    const startTimer = () => {
      setIsActive(true);
    };
  
    const stopTimer = () => {
      setIsActive(false);
      setSeconds(0);
    };
  
    return (
      <div>
        <h1>Timer: {seconds}s</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
      </div>
    );
  };
  //    apiKey:'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',

  export default Timer;