import React, { useState, useEffect } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedRegion, setSelectedRegion] = useState({
    locale: 'en-US',
    timeZone: 'America/New_York'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>🌐 World Clock</h1>
      <p>Select a city to view the current time in that location:</p>

      <select
        onChange={(e) => {
          const [locale, timeZone] = e.target.value.split('|');
          setSelectedRegion({ locale, timeZone });
        }}
      >
        <option value="en-US|America/New_York">🇺🇸 New York (English)</option>
        <option value="fr-FR|Europe/Paris">🇫🇷 Paris (Français)</option>
        <option value="ko-KR|Asia/Seoul">🇰🇷 Seoul (한국어)</option>
        <option value="ja-JP|Asia/Tokyo">🇯🇵 Tokyo (日本語)</option>
        <option value="de-DE|Europe/Berlin">🇩🇪 Berlin (Deutsch)</option>
      </select>

      <h2>
        {currentTime.toLocaleTimeString(selectedRegion.locale, {
          timeZone: selectedRegion.timeZone,
        })}
      </h2>

      <h3>
        {currentTime.toLocaleDateString(selectedRegion.locale, {
          timeZone: selectedRegion.timeZone,
        })}
      </h3>
    </div>
  );
}

export default App;
