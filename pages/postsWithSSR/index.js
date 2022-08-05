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
            <h1>With SSR</h1>
            <AddPost />
            <ul>
                {users?.map(data => {
                    return <li key={data.id}><Link href={`/postsWithSSR/${data._id}`}><p>Id: {data._id}, Title: {data.title}, Description: {data.description}</p></Link></li>
                })}
            </ul>
        </>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await axios.get(`${url}/api/postWithSSR`)
    const data = res.data.result

    // Pass data to the page via props
    return { props: { users: data } }
}
export default People