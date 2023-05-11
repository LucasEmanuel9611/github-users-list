import { useEffect } from 'react';
import { useParams } from 'react-router';
import { api } from '../../libs/axios';
import { useState } from "react"
import { GithubUserDatesResponse, GithubUserReposResponse } from '../../types/github';
import { UserDatesProps, UserReposProps } from '../../types/user';
import * as Styled from "./styles"
import { Title } from '../../components/Title';
import { SearchBar } from '../../components/SearchBar';

export const User = () => {
    const [userDates, setUserDates] = useState<UserDatesProps | null>()
    const [userRepos, setUserRepos] = useState<UserReposProps[] | null>()
    const params = useParams()

    useEffect(() => {
        api.get<GithubUserDatesResponse>(`/${params?.name}`).then((reponse) => {
            const userDataReponse = reponse.data

            setUserDates({
                avatar: userDataReponse.avatar_url,
                name: userDataReponse.name,
                company: userDataReponse.company,
                blog: userDataReponse.blog,
                bio: userDataReponse.bio,
                twitter_username: userDataReponse.twitter_username,
                followers: userDataReponse.followers,
                following: userDataReponse.following,
                email: userDataReponse.email,
            })
        }),
            api.get<GithubUserReposResponse[]>(`${params?.name}/repos`).then((reponse) => {
                const reposDataReponse = reponse.data
                const repos: UserReposProps[] = []

                reposDataReponse.map((repo) => {
                    repos.push({
                        name: repo.name,
                        description: repo.description,
                        updated_at: repo.updated_at,
                        stars: repo.stargazers_count
                    })
                })
                setUserRepos(repos)
            })
    }, [])

    return (
        <Styled.Container>
            <Styled.SubContainer>
                <Styled.Header>
                    <Title size={32} />
                    <SearchBar
                        placeHolder={params?.name || ""}
                        handleSetName={() => { }}
                        handleKeyDown={() => { }} />
                </Styled.Header>
            </Styled.SubContainer>
        </Styled.Container>
    )
}