import { FollowersIcon } from "../../assets/FollowersIcon"
import { HeartIcon } from "../../assets/HeartIcon"
import { LinkIcon } from "../../assets/LinkIcon"
import { MailIcon } from "../../assets/MailIcon"
import { PlaceIcon } from "../../assets/PlaceIcon"
import { TowerIcon } from "../../assets/TowerIcon"
import { TwitterIcon } from "../../assets/TwitterIcon"
import userImg from "../../assets/png/user.png"
import { UserDatesProps } from "../../types/user"
import { UserField } from "../UserField"
import * as Styled from "./styles"

export const UserCard = ({
    avatar,
    bio,
    blog,
    company,
    email,
    followers,
    following,
    name,
    location,
    twitter_username
}: UserDatesProps) => {
    return (
        <Styled.Container>
            <Styled.UserContainer>
                <Styled.UserInfoContainer>
                    <Styled.UserAvatar
                        src={avatar || userImg}
                    />
                    <Styled.UserNameContainer>
                        <Styled.UserName>{name}</Styled.UserName>
                        <Styled.UserBio>{name}</Styled.UserBio>
                    </Styled.UserNameContainer>
                </Styled.UserInfoContainer>
                <Styled.Bio>{bio}</Styled.Bio>
                <Styled.FollowContainer>
                    <UserField icon={<FollowersIcon />} name={`${followers} seguidores`} />
                    <UserField icon={<HeartIcon />} name={`${following} seguindo`} />
                </Styled.FollowContainer>
                <Styled.SocialDates>
                    <UserField icon={<TowerIcon />} name={company} />
                    <UserField icon={<PlaceIcon />} name={location} />
                    <UserField icon={<MailIcon />} name={email} />
                    <UserField icon={<LinkIcon />} name={blog} href={blog || ""} />
                    <UserField icon={<TwitterIcon />} name={twitter_username} href={`https://twitter.com/${twitter_username}`} />
                </Styled.SocialDates>
            </Styled.UserContainer>
            {blog && <Styled.BlogButton href={blog}>Contato</Styled.BlogButton>}
        </Styled.Container>
    )
}