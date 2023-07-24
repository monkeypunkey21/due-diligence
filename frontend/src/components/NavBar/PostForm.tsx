import React from "react"
import { AddIcon } from "@chakra-ui/icons"
import { IconButton } from "@chakra-ui/react";



const PostForm: React.FC = () =>
{
    return (
        <div>
            <IconButton isRound={true} colorScheme="blue" variant="outline" aria-label="Make a Post" icon={<AddIcon/>}/>
        </div>
    )
}

export default PostForm;