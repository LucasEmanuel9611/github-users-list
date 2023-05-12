import { useState } from "react"
import { SearchBar } from "../../components/SearchBar"
import { Title } from "../../components/Title"
import * as Styled from "./styles"
import { useNavigate } from "react-router"

export const Home = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate();

    const handleSearch = (name: string) => {
        navigate(`perfil/${name}`);
    };

    const handleKeyEnter = (
        name: string,
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            handleSearch(name);
        }
    };

    return (
        <Styled.Container>
            <Styled.SubContainer>
                <Title size={80} />
                <Styled.SearchContainer>
                    <SearchBar
                        placeHolder="Search"
                        handleSetName={(searchTerm) => setName(searchTerm.target.value)}
                        handleKeyDown={(event) => handleKeyEnter(name, event)}
                        borderColor="--gray-100"
                    />
                    <Styled.SearchButton text="Search" handleClick={() => handleSearch(name)} />
                </Styled.SearchContainer>
            </Styled.SubContainer>
        </Styled.Container>
    )
}