import axios from "axios";
import { useState } from "react";
// import url from '../config'

const url = 'https://nextjstodotesting.herokuapp.com'
const AddPost = () => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const handleChange = (e, setValue) => {
        setValue(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post(`${url}/api/post`, { title, description })
    }

    return (
        <form onSubmit={handleSubmit}><br /><br />
            <input type="text" placeholder="Title" onChange={(e) => handleChange(e, setTitle)} required /><br /><br />
            <input type="text" placeholder="Description" onChange={(e) => handleChange(e, setDescription)} required /><br /><br />
            <input type="submit" value="Submit" />
        </form>
    )
}
export default AddPost