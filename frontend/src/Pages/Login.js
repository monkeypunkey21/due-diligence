import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import { method } from 'lodash'
import {useState, useEffect} from 'react'

const Login = () =>
{
    const [email, setEmail] = useState('')
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')

    const validateEmail = () =>
    {   
        const emailRegex = /@gmail\.com$/
        const isMatch = emailRegex.test(email)
        console.log("hi")
        return isMatch
    }

    const validatePass = ({pass}) =>
    {
        const passRegex = /\w{6,}/
        /* return passRegex.test(pass) */
        return true
    }
    
    const handleSubmit = async () =>
    {
        
        if (!email || !user || !pass){
            setError('Must fill out all fields')
            return
        }

        else if (!validateEmail()) {
            setError('Must have valid gmail');
            return;
        }


        else if (!validatePass({pass: pass}))
            return setError('Must have password longer than 6 characters')

        const newUser = {
            email: email, 
            username: user, 
            password: pass
        }

        const response = await fetch('http://localhost:4000/api/users/',
        {
            method: "POST",
            body: JSON.stringify(newUser),
            headers:
            {
            'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (response.ok)
        {
            setEmail('')
            setUser('')
            setPass('')
            setError('')
        }

    }
    
    const petImages = [
        'https://media.istockphoto.com/id/520497434/photo/close-up-of-red-cat-curled-up-sleeping-in-bed.jpg?s=612x612&w=0&k=20&c=s_0kCPw3sAq70fSWCNRKDUa6SFCraRdVaIxYpLiRnDg=',
        // Add more pet images here
      ];
    
      const randomPetImage = petImages[Math.floor(Math.random() * petImages.length)];


    return (
            <Flex>
              <Box flex="3" display="flex" justifyContent="center" alignItems="center">
            <img
             src={randomPetImage}
            alt="Random Pet"
            style={{ width: 'auto', height: '100vh', objectFit: 'cover' }}
            />
      </Box>
              <Box justifyContent="center" textAlign='center' flex="1.5
              " p="2">
                <Heading textAlign="center" mb="10">Sign In</Heading>
                <FormControl >
                  <FormLabel m="4">Email:</FormLabel>
                  <Input placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} value={email} />
                  <FormLabel m="4">Username:</FormLabel>
                  <Input placeholder="Username" onChange={(e) => setUser(e.target.value)} value={user} />
                  <FormLabel m="4">Password:</FormLabel>
                  <Input placeholder="Password" onChange={(e) => setPass(e.target.value)} value={pass} />
        
                  <Button colorScheme="blue" m="8" onClick={handleSubmit}>Submit</Button>
                  <Text fontWeight="bold" color="#de2626" >{error}</Text>
                </FormControl>
              </Box>
            </Flex>
    )
        
}

export default Login