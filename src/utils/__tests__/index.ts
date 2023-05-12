import { UserReposProps } from "../../types/user";
import { sortRepoByStars } from "../common";

describe("sortRepoByStars", () => {
  const repos: UserReposProps[] = [
    {
      name: "repo1",
      description: "Description 1",
      updated_at: "2022-01-01",
      stars: 10,
      url: "https://github.com/repo1",
    },
    {
      name: "repo2",
      description: "Description 2",
      updated_at: "2022-02-01",
      stars: 5,
      url: "https://github.com/repo2",
    },
    {
      name: "repo3",
      description: "Description 3",
      updated_at: "2022-03-01",
      stars: 15,
      url: "https://github.com/repo3",
    },
    {
      name: "repo4",
      description: "Description 4",
      updated_at: null,
      stars: null,
      url: null,
    },
  ];

  it("deve ordenar corretamente o array de repositórios por estrelas", () => {
    const sortedRepos = sortRepoByStars(repos);
    expect(sortedRepos).toEqual([
      {
        name: "repo3",
        description: "Description 3",
        updated_at: "2022-03-01",
        stars: 15,
        url: "https://github.com/repo3",
      },
      {
        name: "repo1",
        description: "Description 1",
        updated_at: "2022-01-01",
        stars: 10,
        url: "https://github.com/repo1",
      },
      {
        name: "repo2",
        description: "Description 2",
        updated_at: "2022-02-01",
        stars: 5,
        url: "https://github.com/repo2",
      },
      {
        name: "repo4",
        description: "Description 4",
        updated_at: null,
        stars: null,
        url: null,
      },
    ]);
  });
});
