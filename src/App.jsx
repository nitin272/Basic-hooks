import React, { useState, createContext } from 'react';
import Context from './components/Context';

export const ToggleTheme = createContext();

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleToggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <ToggleTheme.Provider value={isDarkTheme}>
      <button onClick={handleToggleTheme}>Toggle</button>
      <Context />
    </ToggleTheme.Provider>
  );
}

export default App;
