import axios from "axios"
import Home from "../home"
import { useEffect, useState } from 'react'
// import url from '../config'


const url = 'https://nextjstodotesting.herokuapp.com'
const One = () => {
    const [users, setUsers] = useState()

    useEffect(async () => {
        const params = ''
        const res = await axios.get(`${url}/api/post/${params}`)
        setUsers(res.data.result)
    }, [])
console.log({users})
    return (
        <>
            <Home />
            <h1>With Normal</h1>
            {users ? <><h1>{users[0]._id}: {users[0].title}</h1>
            <h1>{users[0].description}</h1></> : <p>Loading...</p>}
        </>
    )
}

export default One