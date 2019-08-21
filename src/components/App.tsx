import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Repos from './pages/Repos';
import ErrorMessage from './ui/ErrorMessage';

export const App: React.FC = () => {

    return (
        <Provider store={store}>
            <Repos />
            <ErrorMessage />
        </Provider>
    );
};

export default App;
