import * as Styled from "./styles"

type ButtonProps = {
    text: string
}

export const Button = ({ text }: ButtonProps) => {
    return (
        <Styled.Button>
            {text}
        </Styled.Button>
    )
}