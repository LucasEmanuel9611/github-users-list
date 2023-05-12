import { UserReposProps } from "../../types/user"
import { RepoCard } from "../RepoCard"
import * as Styled from "./styles"

type UserListReposProps = {
    repos: UserReposProps[]
}

export const UserListRepos = ({ repos }: UserListReposProps) => {
    return (
        <Styled.ReposContainer>
            {repos.map(repo => (
                <RepoCard {...repo} />
            ))}
        </Styled.ReposContainer>
    )
}