import React from 'react';
import {IBranch} from 'types';
  
export interface IProps {
    branches: IBranch[],
}
  
const BranchList: React.FC<IProps> = ({branches}) => (
  <ul>
    {branches.map(({name}) => (
      <li key={name}>
        {name}
      </li>
    ))}
  </ul>
);

export default BranchList;
