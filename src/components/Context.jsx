import React, { useContext } from 'react';
import { ToggleTheme } from '../App';
import State from './State';

function Context() {
  const para = 'Made by kalvians';
  const theme = useContext(ToggleTheme);

  const themeStyle = {
    backgroundColor: theme ? 'grey' : 'lightblue',
    color: theme ? 'black' : 'black',
  
  };

  return (
    <div style={themeStyle}>
      <State para={para} />
    </div>
  );
}

export default Context;
