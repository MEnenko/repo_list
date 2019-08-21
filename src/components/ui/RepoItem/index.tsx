import React from 'react';
import {IRepo, IBranch} from 'types';
import Avatar from '@material-ui/core/Avatar';
import styles from './index.module.css';
import BranchList from '../BranchList';

export interface IProps {
    repo: IRepo,
    branches: IBranch[],
    onClick: (repo: IRepo) => void,
  }

const RepoItem: React.FC<IProps> = ({repo, branches, onClick}) => (
    <li className={styles.data}>
        <div>
            <input 
                className={styles.input}
                type="button"
                value={repo.name}
                onClick={onClick.bind(null, repo)}
            />
            {Boolean(branches.length) && <BranchList branches={branches}/>}
        </div>            
        <p>{repo.description}</p>
        <Avatar alt="" src={repo.owner.avatar_url} />
    </li>
);
  
  export default RepoItem;