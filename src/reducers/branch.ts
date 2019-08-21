import { GET_BRANCHES } from "../actions/types";
import { Action, Reducer } from 'redux';
import {IBranch} from 'types';

export interface IRepoBranchState {
  readonly list: IBranch[]
}

interface IGetRepoBranches extends Action<typeof GET_BRANCHES> {
  list: IBranch[]
}

const initialState: IRepoBranchState = {
  list: []
};

export const reducer: Reducer<IRepoBranchState, IGetRepoBranches> = (state = initialState, action) => {
  switch (action.type) {
    case GET_BRANCHES:
      return {
        ...state,
        list: action.list
      };
    default:
      return state;
  }
};

export default reducer;