import * as Styled from "./styles"

type UserFieldProps = {
    icon: JSX.Element
    name: string | null
}

export const UserField = ({ icon, name }: UserFieldProps) => {

    return name ? (
        <Styled.UserFieldInfo>
            {icon}
            <Styled.Text>{name}</Styled.Text>
        </Styled.UserFieldInfo>
    ) : <></>
}