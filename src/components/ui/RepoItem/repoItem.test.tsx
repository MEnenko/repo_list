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

it('should call onClick collback on button click', () => {
    const repo = { 
        id: 2,
        name: '',
        description: '',
        branches_url: '1234567890',
        owner: {
            avatar_url: ''
        }
    };

    const mockOnClick = jest.fn();
    const repoItem = Enzyme.shallow(
        <RepoItem repo={repo} branches={[]} selectedRepoId={2} getBranchs={mockOnClick}/>
    );

    const input = repoItem.find('input');
    input.simulate('click');

    expect(mockOnClick.mock.calls[0][0]).toBe('1');
    expect(mockOnClick.mock.calls[0][1]).toBe(2);
    expect(mockOnClick.mock.calls.length).toBe(1);
});