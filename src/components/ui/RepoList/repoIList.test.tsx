import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RepoList from '../RepoList';
Enzyme.configure({ adapter: new Adapter() });

it('should run without failure with empty params', () => {
    const repoList = Enzyme.shallow(
        <RepoList repos={[]} branches={[]} selectedRepoId={0} onRepoSelect={()=> {}}/>
    );

    expect(repoList.find('ul').children()).toHaveLength(0);
});

it('should put repos param', () => {
    const repos = [
        { 
            id: 1212,
            name: 'Mac',
            description: 'blablacar',
            branches_url: 'https:/car',
            owner: {
                avatar_url: 'max'
            }
    }];

    const repoList = Enzyme.shallow(
        <RepoList repos={repos} branches={[]} selectedRepoId={0} onRepoSelect={()=> {}}/>
    )

    expect(repoList.find('ul').children()).toHaveLength(1);
});