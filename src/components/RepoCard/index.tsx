import dayjs from "../../libs/dayjs.config"
import { StarIcon } from "../../assets/StarIcon"
import { UserReposProps } from "../../types/user"
import * as Styled from "./styles"

export const RepoCard = ({ description, name, stars, updated_at, url }: UserReposProps) => {
    const daysAgo = dayjs(updated_at).fromNow()

    return (
        <Styled.Container>
            <Styled.Title href={url || ""}>{name}</Styled.Title>
            <Styled.Description>{description}</Styled.Description>
            <Styled.StarsAndDateContainer>
                <StarIcon /> <Styled.Description>{stars}</Styled.Description>
                <Styled.Description>•</Styled.Description>
                <Styled.Description>Atualizado {daysAgo}</Styled.Description>
            </Styled.StarsAndDateContainer>
        </Styled.Container>
    )
}