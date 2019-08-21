export const getReposBySearch = async (str: string) => {
    return await fetch(`https://api.github.com/search/repositories?q=${str}&per_page=5`);
}

export const getRepoBranches = async (url: string) => {
    return await fetch(`${url}`);
}