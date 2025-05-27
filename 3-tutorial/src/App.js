import { useState, useEffect } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>🕒 Current Time</h1>
      <h2>{currentTime.toLocaleTimeString()}</h2>
      <h3>{currentTime.toLocaleDateString()}</h3>
    </div>
  );
}

export default App;
