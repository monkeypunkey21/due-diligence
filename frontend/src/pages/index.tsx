import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Text, Box, Heading, SimpleGrid, Center } from '@chakra-ui/react'
import PostDetails from '../components/PostDetails/PostDetails'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })

interface Post {
  _id: string;
  title: string;
  body: string;
}

interface HomeProps{
  posts: Post[]
}
const Home: React.FC<HomeProps> = ({ posts } : HomeProps) => {

  return (
    <Center h='vh'>
      <Box w='80%'>
        <Heading>Posts</Heading>
        <SimpleGrid columns={2} spacing={10}>
         {posts.map((post) =>
          (<li key={post._id}><PostDetails post={post} /></li>)
          )}
        </SimpleGrid>
      </Box>
    </Center>
  )
}

export async function getStaticProps()
{
  const response = await fetch('http://localhost:4000/api/posts', {
    method: "GET",
    credentials: 'include'
  })

  const posts: Post[] = await response.json();

  return {
    props:
  {
    posts,
  }, }

}

export default Home;