import axios from 'axios'
import Link from 'next/link'
import Home from "../home"
import AddPost from './addPeople'

const url = 'https://nextjstodotesting.herokuapp.com'
const People = ({ users }) => {
    return (
        <>
            <Home />
            <h1>With True</h1>
            <AddPost />
            <ul>
                {users?.map(data => {
                    return <li key={data.id}><Link href={`/postsWithTrue/${data._id}`}><p>Id: {data._id}, Title: {data.title}, Description: {data.description}</p></Link></li>
                })}
            </ul>
        </>
    )
}

export async function getStaticProps() {
    const res = await axios.get(`${url}/api/postWithTrue`)
    const list = await res.data.result

    // Pass post data to the page via props
    return { props: { users: list } }
}

export default People