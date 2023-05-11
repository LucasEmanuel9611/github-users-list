export type GithubUserDatesResponse = {
  avatar_url: string;
  name: string;
  company: string | null;
  blog: string | null;
  bio: string | null;
  twitter_username: string | null;
  followers: string | null;
  following: string | null;
  email: string | null;
};

export type GithubUserReposResponse = {
  name: string;
  description: string | null;
  updated_at: string | null;
  stargazers_count: number | null;
};
