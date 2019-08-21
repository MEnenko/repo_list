import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

export const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
        <div className="App">

        </div>
    </Provider>
  );
};

export default App;
