import { useNavigate } from "react-router";

export const handleSearch = (name: string) => {
  const navigate = useNavigate();

  navigate(`user/${name}`);
};

export const handleKeyEnter = (
  name: string,
  event: React.KeyboardEvent<HTMLInputElement>
) => {
  if (event.key === "Enter") {
    handleSearch(name);
  }
};
