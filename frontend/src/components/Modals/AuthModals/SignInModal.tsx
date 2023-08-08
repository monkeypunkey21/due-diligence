import useAuthStore from "../../../state/AuthStore";
import { FormControl, FormLabel, Input, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { userAgent } from "next/server";
import React, { useState } from "react";

const SigninModal: React.FC = () =>
{
    const {isSigninOpen, closeSignInModal} = useAuthStore((state) => ({isSigninOpen: state.isSignInOpen, closeSignInModal: state.closeSignInModal}));

    const [email, setEmail] = useState('')
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (event: { preventDefault: () => void; }) =>
    {

        event.preventDefault();

        if (!email || !user || !pass)
            setError('Must fill out all fields')

        const newUser = {
            email, 
            username: user, 
            password: pass
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

        closeSignInModal();

    }


    return (
        <div>
        <Modal isOpen={isSigninOpen} onClose={closeSignInModal} isCentered={true}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Sign Up</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <form onSubmit={handleSubmit} className="space-y-4">
                    <FormControl>
                        <FormLabel>Email:</FormLabel>
                        <Input onChange={(e) => {setEmail(e.target.value)}} value={email}/>
                    </FormControl>

                    <FormControl>

                        <FormLabel>Username:</FormLabel>
                        <Input onChange={(e) => {setUser(e.target.value)}} value={user}/>
                    </FormControl>

                    <FormControl>

                        <FormLabel>Password:</FormLabel>
                        <Input onChange={(e) => {setPass(e.target.value)}} value={pass}/>
                    </FormControl>
                    <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded">Sign Up</button>
                        <Text>{error}</Text>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>    
        </div>
    )
}

export default SigninModal;