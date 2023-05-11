import { useState } from "react"
import { Button } from "../../components/Button"
import { SearchBar } from "../../components/SearchBar"
import { Title } from "../../components/Title"
import * as Styled from "./styles"

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
                    <SearchBar placeHolder="Search" handleSetName={handleSetName} />
                    <Button text="Search" />
                </Styled.SearchContainer>
            </Styled.SubContainer>
        </Styled.Container>
    )
}