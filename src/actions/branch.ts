
import { GET_BRANCHES, GET_BRANCHES_ERROR } from './types';
import { Dispatch } from 'redux';
import {getRepoBranches} from '../api/github';

// get all branches for repo
export const getBranches = (url: string) => async (dispatch: Dispatch) => {
    console.log('getBranches() ran');
    try {
      const res = await getRepoBranches(url)
      const data = await res.json();
      
      console.log('repos data from action:', data);
      dispatch({
        type: GET_BRANCHES,
        list: data
      });
    } catch(err) {
      dispatch({
        type: GET_BRANCHES_ERROR,
        list: err
      });
    }
  }