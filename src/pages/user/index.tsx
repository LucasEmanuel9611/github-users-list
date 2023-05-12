import { useEffect } from 'react';
import { useParams } from 'react-router';
import { api } from '../../libs/axios';
import { useState } from "react"
import { GithubUserDatesResponse, GithubUserReposResponse } from '../../types/github';
import { UserDatesProps, UserReposProps } from '../../types/user';
import * as Styled from "./styles"
import { Title } from '../../components/Title';
import { SearchBar } from '../../components/SearchBar';
import { UserCard } from '../../components/UserCard';
import { UserListRepos } from '../../components/UserListRepos';
import { LoadingSpinner } from '../../components/LoadingSpinner';

export const User = () => {
    const [userDates, setUserDates] = useState<UserDatesProps | null>()
    const [userRepos, setUserRepos] = useState<UserReposProps[] | null>()
    const [loading, setLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        Promise.all([
            api.get<GithubUserDatesResponse>(`/${params?.name}`),
            api.get<GithubUserReposResponse[]>(`${params?.name}/repos`)
        ])
            .then(([userDatesResponse, userReposResponse]) => {
                const userData = userDatesResponse.data
                const reposData = userReposResponse.data
                const repos: UserReposProps[] = []

                const userDataProps: UserDatesProps = {
                    avatar: userData.avatar_url,
                    name: userData.name,
                    company: userData.company,
                    blog: userData.blog,
                    bio: userData.bio,
                    twitter_username: userData.twitter_username,
                    followers: userData.followers,
                    following: userData.following,
                    email: userData.email,
                    location: userData.location,
                }

                reposData.map((repo) => {
                    repos.push({
                        name: repo.name,
                        description: repo.description,
                        updated_at: repo.updated_at,
                        stars: repo.stargazers_count,
                        url: repo.html_url,
                    })
                })

                const sortedRepos = repos.sort((a, b) => {
                    const starsA = a.stars ?? 0
                    const starsB = b.stars ?? 0

                    if (starsA > starsB) {
                        return -1
                    }
                    if (starsA < starsB) {
                        return 1
                    }
                    return 0
                })

                setUserRepos(sortedRepos)
                setUserDates(userDataProps)
            })
            .catch(error => {
                console.error(error)
            }).finally(() => {
                setLoading(false)
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
                {loading ?
                    <LoadingSpinner />
                    :
                    <Styled.ContentContainer>
                        <Styled.UserAccountContainer>
                            {userDates &&
                                <UserCard {...userDates} />
                            }

                        </Styled.UserAccountContainer>
                        {userRepos &&
                            <UserListRepos repos={userRepos} />
                        }
                    </Styled.ContentContainer>
                }
            </Styled.SubContainer>
        </Styled.Container>
    )
}