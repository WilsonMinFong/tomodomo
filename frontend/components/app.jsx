import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => {
  return (
    <div>
      Tomodomo
      <GreetingContainer />
      { children }
    </div>
  );
};

export default App;
