import { Heading } from "@chakra-ui/layout"
import {useState, useEffect} from 'react'

const Home = () =>
{

const [posts, setPosts] = useState([])


//on initial render
useEffect(() =>
{
    const fetchPosts = async () =>
    {
        const response = await fetch('http://localhost:4000/api/posts/')
        const json = await response.json()
        setPosts(json)
    }

    fetchPosts()
}
, [])

    return (
        <div>
            <Heading>
                Home
            </Heading>

        </div>
    )
}

export default Home