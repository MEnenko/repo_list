import { GET_REPOS, GET_REPOS_ERROR } from './types';
import { Dispatch } from 'redux';
import {getReposBySearch} from '../api/github';

// get all repos
export const getRepos = (query: string) => async (dispatch: Dispatch) => {
  console.log('getRepos() ran');
  try {
    const res = await getReposBySearch(query);
    const data = await res.json();
    console.log('repos data from action:', data);
    
    dispatch({
      type: GET_REPOS,
      list: data.items
    });
  } catch(err) {
    dispatch({
      type: GET_REPOS_ERROR,
      payload: err
    });
  };
};

export const resetRepos = () => async (dispatch: Dispatch) => {
  dispatch({
    type: GET_REPOS,
    list: [],
  });
};