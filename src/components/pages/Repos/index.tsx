import React, { useState } from 'react';
import Search from '../../ui/Search';
import RepoList from '../../ui/RepoList';
import { useDispatch, useSelector } from "react-redux";
import {AppState} from '../../../reducers/index';
import { getRepos, resetRepos } from '../../../actions/repo';
import { getBranches } from '../../../actions/branch';

export const Repos: React.FC = () => {
    const [serchText, setSerchText] = useState('');
    const [openRepoId, setOpenRepoId] = useState(undefined);
    const repos = useSelector(({repo}: AppState) => repo.list);
    const branches = useSelector(({branch}: AppState) => branch.list);
    const dispatch = useDispatch();

    const handleChange = (text: string) => {
        if(!serchText) {
            dispatch(resetRepos());
        }

        setSerchText(text);
    };

    const handleSubmit = () => {
        if (serchText) {
            dispatch(getRepos(serchText));
        };
    };

    const handleGetBranchRepo = async (url: string, repoId: any) => {
        await dispatch(getBranches(url));
        if (openRepoId === repoId) {
            await setOpenRepoId(undefined);
        } else {
            await setOpenRepoId(repoId);
        }; 
    };

    return (
        <div>
            <Search 
                value={serchText}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <RepoList
                repos={repos}
                branches={branches}
                openRepoId={openRepoId}
                getBranchsRepo={handleGetBranchRepo}
            />
        </div>
    );
};

export default Repos;
