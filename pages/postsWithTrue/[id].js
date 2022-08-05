import axios from "axios"
import Home from "../home"
// import url from '../config'

const url = 'https://nextjstodotesting.herokuapp.com'
const One = ({ users }) => {
    console.log({users})
    return (
        <>
            <Home />
            <h1>With True</h1>
            {users ? <><h1>{users._id}: {users.title}</h1>
            <h1>{users.description}</h1></> : <p>Loading...</p>}
        </>
    )
}

export async function getStaticPaths() {
    const res = await axios.get(`${url}/api/postWithTrue`)
    const list = res.data.result
    const paths = list?.map((data) => ({
        params: { id: data._id.toString() },
    }))

    // Pass post data to the page via props
    return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
    const request = await axios.get(`${url}/api/postWithTrue/${params.id}`)
    const movie = request.data.result
    console.log({movie})
    return {
        props: {
            users: movie
        }
    }
}

export default One