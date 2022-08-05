import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Home from "../home"
import AddPost from './addPeople'
// import url from '../config'

const url = 'https://nextjstodotesting.herokuapp.com'
const People = () => {
  const [users, setUsers] = useState()

  useEffect( async () => {
    const res = await axios.get(`${url}/api/post`)
    setUsers(res.data.result)
  },[])

    return (
        <>
        <Home />            
        <h1>With Normal</h1>
        <AddPost />
        <ul>
        {users?.map(data => {
            return <li key={data.id}><Link href={`/posts/${data._id}`}><p>Id: {data._id}, Title: {data.title}, Description: {data.description}</p></Link></li>
        })}
        </ul>
        </>
    )
}

export default People