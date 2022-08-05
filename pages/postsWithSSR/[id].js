import axios from "axios"
import Home from "../home"
// import url from '../config'

const url = 'https://nextjstodotesting.herokuapp.com'
const One = ({ users }) => {
    return (
        <>
            <Home />
            <h1>With SSR</h1>
            <h1>{users._id}: {users.title}</h1>
            <h1>{users.description}</h1>
        </>
    )
}


// This gets called on every request
export async function getServerSideProps({params}) {
    // Fetch data from external API
    const res = await axios.get(`${url}/api/postWithSSR/${params.id}`)
    const data = res.data.result

    // Pass data to the page via props
    return { props: { users: data } }
}

export default One