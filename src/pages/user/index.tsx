import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
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
import { ErrorModal } from '../../components/ErrorModal';
import { sortRepoByStars } from '../../utils/common';

export const User = () => {
    const [userDates, setUserDates] = useState<UserDatesProps | null>()
    const [userRepos, setUserRepos] = useState<UserReposProps[] | null>()
    const [title, setTitle] = useState("")
    const [openModal, setOpenModal] = useState(false)
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState('')
    const params = useParams()
    const navigate = useNavigate();

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

                const sortedReposByStarts = sortRepoByStars(repos)

                setUserRepos(sortedReposByStarts)
                setUserDates(userDataProps)
            })
            .catch(error => {
                setOpenModal(true)
                if (error.response?.status === 404) {
                    setTitle("O usuário buscado não existe")

                    return
                }

                if (error.data.message) {
                    setTitle(error.data.message)
                    return
                }

                setTitle("Ocorreu um erro inesperado")
                console.error(error)
            }).finally(() => {
                setLoading(false)
            })
    }, [params?.name])

    const handleKeyEnter = (
        name: string,
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            navigate(`perfil/${name}`);
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false)
        navigate(`/home`)
    }

    return (
        <Styled.Container>
            <Styled.SubContainer>
                <Styled.Header>
                    <Title size={32} />
                    <SearchBar
                        placeHolder={params?.name || ""}
                        handleSetName={(searchTerm) => setName(searchTerm.target.value)}
                        handleKeyDown={(event) => handleKeyEnter(name, event)}
                        borderColor="--purple-100"
                    />
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
                <ErrorModal isOpen={openModal} onClose={handleCloseModal} title={title} />
            </Styled.SubContainer>
        </Styled.Container>
    )
}