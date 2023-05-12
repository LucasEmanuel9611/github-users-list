import { UserReposProps } from "../types/user";

export const sortRepoByStars = (repos: UserReposProps[]) => {
  const sortedRepos = repos.sort((a, b) => {
    const starsA = a.stars ?? 0;
    const starsB = b.stars ?? 0;

    if (starsA > starsB) {
      return -1;
    }
    if (starsA < starsB) {
      return 1;
    }
    return 0;
  });

  return sortedRepos;
};
