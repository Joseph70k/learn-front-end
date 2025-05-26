import { useState } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  return (
    <div>
      <h1>Current Time</h1>
    </div>
  );
}

export default App;