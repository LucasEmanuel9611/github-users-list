import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";
import { SearchIcon } from "../../assets/SearchIcon"
import * as Styled from "./styles"

type SearchBarProps = {
    placeHolder: string;
    handleSetName: ChangeEventHandler
    handleKeyDown: KeyboardEventHandler<HTMLInputElement>
}

export const SearchBar = ({ placeHolder, handleSetName, handleKeyDown }: SearchBarProps) => {

    return (
        <Styled.SearchBarContainer >
            <SearchIcon />
            <Styled.InputSearchBar
                placeholder={placeHolder}
                onChange={handleSetName}
                onKeyDown={handleKeyDown}
            />
        </Styled.SearchBarContainer>
    )
}