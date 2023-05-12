export type UserDatesProps = {
  avatar: string | null;
  name: string;
  company: string | null;
  blog: string | null;
  bio: string | null;
  twitter_username: string | null;
  followers: string | null;
  following: string | null;
  email: string | null;
  location: string | null;
};

export type UserReposProps = {
  name: string;
  description: string | null;
  updated_at: string | null;
  stars: number | null;
  url: string | null;
};
