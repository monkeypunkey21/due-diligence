import useAuthStore from "../../../state/AuthStore";
import { FormControl, FormLabel, Input, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const SigninModal: React.FC = () =>
{
    const {isSigninOpen, closeSignInModal} = useAuthStore((state) => ({isSigninOpen: state.isSignInOpen, closeSignInModal: state.closeSignInModal}));

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
        <div>
        <Modal isOpen={isSigninOpen} onClose={closeSignInModal} isCentered={true}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Sign In</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <FormControl>
                        <FormLabel>Email:</FormLabel>
                        <Input onChange={(e) => {setEmail(e.target.value)}} value={email}/>
                        <FormLabel>Username:</FormLabel>
                        <Input onChange={(e) => {setUser(e.target.value)}} value={user}/>
                        <FormLabel>Password:</FormLabel>
                        <Input onChange={(e) => {setPass(e.target.value)}} value={pass}/>

                        <Button onClick={handleSubmit}>Create Account</Button>
                        <Text>{error}</Text>
                    </FormControl>
                </ModalBody>
            </ModalContent>
        </Modal>    
        </div>
    )
}

export default SigninModal;