import { useState } from "react"
import { Button } from "../../components/Button"
import { SearchBar } from "../../components/SearchBar"
import { Title } from "../../components/Title"
import * as Styled from "./styles"
import { useNavigate } from 'react-router';

export const Home = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate();

    const handleSetName = (searchTerm: any) => {
        setName(searchTerm.target.value)
    }

    const handleSearch = (name: string) => {
        navigate(`user/${name}`)
    }

    const handleKeyEnter = (name: string, event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch(name);
        }
    }

    return (
        <Styled.Container>
            <Styled.SubContainer>
                <Title size={80} />
                <Styled.SearchContainer>
                    <SearchBar placeHolder="Search" handleSetName={handleSetName} handleKeyDown={(event) => handleKeyEnter(name, event)} />
                    <Button text="Search" handleClick={() => handleSearch(name)} />
                </Styled.SearchContainer>
            </Styled.SubContainer>
        </Styled.Container>
    )
}