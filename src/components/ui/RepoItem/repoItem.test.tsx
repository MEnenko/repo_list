import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RepoItem from '../RepoItem';
Enzyme.configure({ adapter: new Adapter() });

it('should run without failure with empty params', () => {
    const repo = { 
        id: 1,
        name: '',
        description: '',
        branches_url: '',
        owner: {
            avatar_url: ''
        }
    };
    const repoItem = Enzyme.shallow(
        <RepoItem repo={repo} branches={[]} selectedRepoId={2} getBranchs={(ul, id)=> {}}/>
    );

    expect(repoItem.find('ul').children()).toHaveLength(0);
});
