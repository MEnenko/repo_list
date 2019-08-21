import React from 'react';
import {IRepo, IBranch} from 'types';
import RepoItem from '../RepoItem';

export interface IProps {
  repos: IRepo[],
  branches: IBranch[],
  onRepoSelect: (repo: IRepo) => void,
  selectedRepoId: number,
}
  
const ReposList: React.FC<IProps> = ({repos, branches, selectedRepoId, onRepoSelect}) => (
  <ul>
    {repos.map((repo) => {
      const currentRepoBranches = selectedRepoId === repo.id ? branches : [];

      return (
        <RepoItem 
          key={repo.id}
          repo={repo}
          branches={currentRepoBranches}
          onClick={onRepoSelect}
        />
      )
    })}
  </ul>
);

export default ReposList;
