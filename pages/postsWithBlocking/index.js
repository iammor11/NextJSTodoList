import axios from 'axios'
import Link from 'next/link'
import Home from "../home"
import AddPost from './addPeople'
// import url from '../config'

const url = 'https://nextjstodotesting.herokuapp.com'
const People = ({ users }) => {
    return (
        <>
            <Home />
            <AddPost />
            <ul>
                {users?.map(data => {
                    return <li key={data.id}><Link href={`/postsWithBlocking/${data._id}`}><p>Id: {data._id}, Title: {data.title}, Description: {data.description}</p></Link></li>
                })}
            </ul>
        </>
    )
}

export async function getStaticProps() {
    // const res1 = await axios.get(`'https://nextjstodotesting.herokuapp.com/api/postWithBlocking`)
    console.log({url})
    const res = await axios.get(`${url}/api/postWithBlocking`)
    console.log({res})
    const list = await res.data.result

    // Pass post data to the page via props
    return { props: { users: list } }
}

export default People