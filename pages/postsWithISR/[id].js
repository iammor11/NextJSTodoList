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

export async function getStaticPaths() {
    const res = await axios.get(`${url}/api/postWithFalse`)
    const list = res.data.result
    const paths = list?.map((data) => ({
        params: { id: data._id.toString() },
    }))

    // Pass post data to the page via props
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const request = await axios.get(`${url}/api/postWithFalse/${params.id}`)
    const movie = request.data.result
    return {
        props: {
            users: movie
        }
    }
}

export default One