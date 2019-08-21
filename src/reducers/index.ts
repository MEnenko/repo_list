import { combineReducers } from "redux";
import repo from './repo';
import branch from './branch';

export const rootReducer = combineReducers({
  repo,
  branch
});

export type AppState = ReturnType<typeof rootReducer>;
