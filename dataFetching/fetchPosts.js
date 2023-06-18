import axios from "axios"

const getPosts = async () => await axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>res.data)

export default getPosts