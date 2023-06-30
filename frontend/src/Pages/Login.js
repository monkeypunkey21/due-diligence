import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import {useState, useEffect} from 'react'

const Login = () =>
{
    const [email, setEmail] = useState('')
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = async () =>
    {
        if (!email || !user || !pass)
            setError('Must fill out all fields')

        const newUser = {
            email, 
            user, 
            pass
        }
        const response = await fetch('http://localhost:4000/api/users/',
        {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (response.ok)
        {
            setEmail('')
            setUser('')
            setPass('')
        }

    }
    
    return (
        <FormControl>
            <FormLabel>Email:</FormLabel>
            <Input onChange={(e) => {setEmail(e.target.value)}}
            value={email}/>
            <FormLabel>Username:</FormLabel>
            <Input onChange={(e) => {setUser(e.target.value)}}
            value={user}/>
            <FormLabel>Password:</FormLabel>
            <Input onChange={(e) => {setPass(e.target.value)}}
            value={pass}/>

            <Button onClick={handleSubmit}>Submit</Button>
            <Text>{error}</Text>
        </FormControl>
    )
}

export default Login