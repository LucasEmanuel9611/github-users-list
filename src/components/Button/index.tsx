import { MouseEventHandler } from "react"
import * as Styled from "./styles"

type ButtonProps = {
    text: string
    handleClick?: MouseEventHandler
    className?: string;
}

export const Button = ({ text, handleClick, className }: ButtonProps) => {
    return (
        <Styled.Button className={className} onClick={handleClick}>
            {text}
        </Styled.Button>
    )
}