import { Center, Flex } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"
import AuthContent from "./AuthContent"
import SearchBar from "./SearchBar"
import PostForm from './PostForm'

const NavBar : React.FC = () =>
{

    //change: if logged in show Profile 
    return (
        <Flex bg='white' padding='6px 12px' height='60px' justifyItems='center'>
            <Flex align='center'>
                <Link href = '/'>Home</Link>
            </Flex>
            <SearchBar/>
            <Link href = '/create'>
                <PostForm/>
            </Link>
            <AuthContent/> 
        </Flex>
    );
}

export default NavBar