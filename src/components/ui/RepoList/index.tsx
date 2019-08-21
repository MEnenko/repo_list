import React from 'react';
import {IRepo, IBranch} from 'types';
import RepoItem from '../RepoItem';

export interface IProps {
  repos: IRepo[],
  branches: IBranch[],
  openRepoId: any,
  getBranchsRepo: (url: string, repoId: number) => void,
}
  
const ReposList: React.FC<IProps> = ({repos, branches, openRepoId, getBranchsRepo}) => (
  <ul>
    {repos && repos.map((repo) => (
      <RepoItem 
        key={repo.id}
        repo={repo}
        selectedRepoId={openRepoId}
        branches={branches}
        getBranchs={getBranchsRepo}
      />
    ))}
  </ul>
);

export default ReposList;
