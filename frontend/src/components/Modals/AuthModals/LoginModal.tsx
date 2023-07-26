import useAuthStore from "../../../state/AuthStore";
import { FormControl, FormLabel, Input, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, Tooltip } from "@chakra-ui/react";
import React, { useState } from "react";

const LoginModal: React.FC = () =>
{
    const {isLoginOpen, closeLoginModal} = useAuthStore((state) => ({isLoginOpen: state.isLoginOpen, closeLoginModal: state.closeLoginModal}));
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [userError, setUserError] = useState('')
    const [passError, setPassError] = useState('')
    const [error, setError] = useState('')


    const handleSubmit = async (event: { preventDefault: () => void; }) =>
    {
        event.preventDefault();

        setUserError('')
        setPassError('')
        setError('')

        if ( !user || !pass)
            return setError('Must fill out all fields')

        const newUser = { 
            username: user, 
            password: pass
        }
        
        const response = await fetch('http://localhost:4000/api/users/login',
        {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        const json = await response.json();

        console.log(json);

        if (response.ok)
        {
            setUser('');
            setPass('');

            closeLoginModal();
        }
        else
        {
            if (json.error)
            {
                if (json.error.includes("Username"))
                    setUserError(json.error);

                if (json.error.includes("password"))
                    setPassError(json.error);
            }
        }


    }

    return (
        <div>
        <Modal isOpen={isLoginOpen} onClose={closeLoginModal} isCentered={true}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Log In</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <FormControl isInvalid={userError != ''}>
                            <FormLabel>Username:</FormLabel>
                            <Tooltip placement='top-end' label={userError} isOpen={userError != ''} hasArrow>
                                <Input onChange={(e) => {setUser(e.target.value)}} value={user}/>
                            </Tooltip>
                        </FormControl>

                        <FormControl isInvalid={passError != ''}>
                            <FormLabel>Password:</FormLabel>
                            <Tooltip placement='top-end' label={passError} isOpen={passError != ''} hasArrow>
                                <Input type='password' onChange={(e) => {setPass(e.target.value)}} value={pass}/>
                            </Tooltip>
                        </FormControl>

                        <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded">Login</button>
                        <Text>{error}</Text>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>    
        </div>
    )
}

export default LoginModal;