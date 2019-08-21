import { GET_REPOS } from "../actions/types";
import { Action, Reducer } from 'redux';
import {IRepo} from '../types';

export interface IRepoState {
  readonly list: IRepo[]
}

interface IGetReposAction extends Action<typeof GET_REPOS> {
  list: IRepo[]
}

const initialState: IRepoState = {
  list: []
};

const reducer: Reducer<IRepoState, IGetReposAction> = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        list: action.list
      };
    default:
      return state;
  }
};

export default reducer;