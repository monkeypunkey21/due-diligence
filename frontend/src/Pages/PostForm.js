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
            <Input placeholder='Make it interesting!' onChange={(e) => {setTitle(e.target.value)}}
            value={title}/>
            <FormLabel>Message: </FormLabel>
            <Input placeholder='Include pay and stuff' onChange={(e) => {setMessage(e.target.value)}}
            value={message}/>
            <FormLabel>Location: </FormLabel>
            <Input placeholder='Include pay and stuff' onChange={(e) => {setLocation(e.target.value)}}
            value={location}/>
        </FormControl>
    )
}

export default PostForm