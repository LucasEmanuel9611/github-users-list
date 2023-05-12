import { ChangeEventHandler, KeyboardEventHandler } from "react";
import { SearchIcon } from "../../assets/SearchIcon"
import * as Styled from "./styles"

type SearchBarProps = {
    placeHolder: string;
    handleSetName: ChangeEventHandler<HTMLInputElement>
    handleKeyDown: KeyboardEventHandler<HTMLInputElement>
    borderColor: string;
}

export const SearchBar = ({ placeHolder, handleSetName, handleKeyDown, borderColor }: SearchBarProps) => {

    return (
        <Styled.SearchBarContainer $borderColor={borderColor}>
            <SearchIcon />
            <Styled.InputSearchBar
                placeholder={placeHolder}
                onChange={handleSetName}
                onKeyDown={handleKeyDown}
            />
        </Styled.SearchBarContainer>
    )
}