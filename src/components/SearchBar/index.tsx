import { ChangeEventHandler, useState } from "react";
import { SearchIcon } from "../../assets/SearchIcon"
import * as Styled from "./styles"

type SearchBarProps = {
    placeHolder: string;
    handleSetName: ChangeEventHandler
}

export const SearchBar = ({ placeHolder, handleSetName }: SearchBarProps) => {
    return (
        <Styled.SearchBarContainer >
            <SearchIcon />
            <Styled.InputSearchBar
                placeholder={placeHolder}
                onChange={handleSetName}
            />
        </Styled.SearchBarContainer>
    )
}