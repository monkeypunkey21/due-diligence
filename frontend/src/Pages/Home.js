import { SimpleGrid } from "@chakra-ui/layout"
import {useState, useEffect} from 'react'
import PostDetails from '../Components/PostDetails'

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
        
        if (response.ok)
            setPosts(json)
    }

    fetchPosts()
}
, [])


    return (
        <div>
           <SimpleGrid columns={2} spacing={10}>
            {posts && posts.map((post) =>
                (
                    <PostDetails
                    key = {post._id}
                    post = {post}
                    ></PostDetails>
                )
            )}
            </SimpleGrid>
            </div>
        )
}

export default Home