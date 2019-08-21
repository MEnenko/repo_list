import React from 'react';
import * as I from '../../../types';
import Avatar from '@material-ui/core/Avatar';
import styles from './index.module.css';
import BranchList from '../BranchList';

export interface IProps {
    repo: I.IRepo,
    branches: I.IBranch[],
    selectedRepoId: number,
    getBranchs: (url: string, numRepo: number) => void,
  }

const RepoItem: React.FC<IProps> = ({repo, branches, selectedRepoId, getBranchs}) => (
    <li className={styles.data}>
        <div>
            <input 
                className={styles.input}
                type="button"
                value={repo.name}
                onClick={() => getBranchs(repo.branches_url.slice(0,-9), repo.id)}
            />
            {repo.id === selectedRepoId && branches.length && <BranchList branches={branches}/>}
        </div>            
        <p>{repo.description}</p>
        <Avatar alt="Remy Sharp" src={repo.owner.avatar_url} />
    </li>
);
  
  export default RepoItem;