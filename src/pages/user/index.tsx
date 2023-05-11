import { useParams } from 'react-router';


export const User = () => {
    const params = useParams()

    return (
        <h1>hello wolrd {params?.name}</h1>
    )
}