import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => {
  return (
    <div className='app-container'>
      <GreetingContainer />
      { children }
    </div>
  );
};

export default App;
