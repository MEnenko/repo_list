import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Store } from 'redux';
import { rootReducer } from '../reducers';

export const store: Store = createStore(rootReducer, {}, applyMiddleware(thunk));
