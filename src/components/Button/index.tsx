import { MouseEventHandler } from "react"
import * as Styled from "./styles"

type ButtonProps = {
    text: string
    handleClick?: MouseEventHandler
}

export const Button = ({ text, handleClick }: ButtonProps) => {
    return (
        <Styled.Button onClick={handleClick}>
            {text}
        </Styled.Button>
    )
}