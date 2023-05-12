import { useState } from "react"
import { SearchBar } from "../../components/SearchBar"
import { Title } from "../../components/Title"
import * as Styled from "./styles"
import { handleKeyEnter, handleSearch } from "../../utils/services"

export const Home = () => {
    const [name, setName] = useState('')

    const handleSetName = (searchTerm: any) => {
        setName(searchTerm.target.value)
    }

    return (
        <Styled.Container>
            <Styled.SubContainer>
                <Title size={80} />
                <Styled.SearchContainer>
                    <SearchBar
                        placeHolder="Search"
                        handleSetName={handleSetName}
                        handleKeyDown={(event) => handleKeyEnter(name, event)}
                    />
                    <Styled.SearchButton text="Search" handleClick={() => handleSearch(name)} />
                </Styled.SearchContainer>
            </Styled.SubContainer>
        </Styled.Container>
    )
}