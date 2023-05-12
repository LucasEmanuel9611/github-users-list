import { useState } from "react"
import { SearchBar } from "../../components/SearchBar"
import { Title } from "../../components/Title"
import * as Styled from "./styles"
import { handleKeyEnter, handleSearch } from "../../utils/services"

export const Home = () => {
    const [name, setName] = useState('')

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