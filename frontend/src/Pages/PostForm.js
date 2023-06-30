import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
  } from '@chakra-ui/react'
import {useState} from 'react'

const PostForm = () =>
{
    const [location, setLocation] = useState("")
    const [message, setMessage] = useState('')
    const [title, setTitle] = useState('')

    return (
        <FormControl>
            <FormLabel>Post Title:</FormLabel>
            <Input placeholder='Make it interesting!'/>
            <FormLabel>Message: </FormLabel>
            <Input placeholder='Include pay and stuff'/>
        </FormControl>
    )
}

export default PostForm