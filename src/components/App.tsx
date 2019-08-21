import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Repos from './pages/Repos';

export const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Repos />
        </Provider>
    );
};

export default App;
