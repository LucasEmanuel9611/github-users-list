import * as Styled from "./styles"

type UserFieldProps = {
    icon: JSX.Element
    name: string | null
    href?: string
}

export const UserField = ({ icon, name, href }: UserFieldProps) => {

    return name ? (
        <Styled.UserFieldInfo>
            {icon}
            {href ?
                <Styled.TextLink href={href}>{name}</Styled.TextLink>
                :
                <Styled.Text>{name}</Styled.Text>
            }
        </Styled.UserFieldInfo>
    ) : <></>
}