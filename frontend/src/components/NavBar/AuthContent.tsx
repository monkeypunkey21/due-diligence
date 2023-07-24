import useAuthStore from "../../state/AuthStore";
import { Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import LoginModal from '../Modals/AuthModals/LoginModal'
import SignInModal from '../Modals/AuthModals/SignInModal'


const AuthContent: React.FC = () =>
{

    const {isLoginOpen, isSignInOpen, openSignInModal, openLoginModal} = useAuthStore();


    return (
        <div>
            <Flex justify='center' align='center'>
                <Button onClick={() => openLoginModal()} bgColor="orange.100" mr='2'>Log In</Button>
                <Button onClick={() => openSignInModal()} bgColor="orange.100">Sign Up</Button>
            </Flex>
            {isLoginOpen && <LoginModal/>}
            {isSignInOpen && <SignInModal/>}


        </div>
    )
}

export default AuthContent;