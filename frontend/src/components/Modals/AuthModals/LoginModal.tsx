import useAuthStore from "../../../state/AuthStore";
import { FormControl, FormLabel, Input, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const LoginModal: React.FC = () =>
{
    const {isLoginOpen, closeLoginModal} = useAuthStore((state) => ({isLoginOpen: state.isLoginOpen, closeLoginModal: state.closeLoginModal}));
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')


    const handleSubmit = async () =>
    {

        if ( !user || !pass)
            setError('Must fill out all fields')

        const newUser = { 
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
    }

    return (
        <div>
        <Modal isOpen={isLoginOpen} onClose={closeLoginModal} isCentered={true}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Log In</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <FormControl>
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

export default LoginModal;