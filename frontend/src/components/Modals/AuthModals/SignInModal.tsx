import useAuthStore from "../../../state/AuthStore";
import { Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React from "react";

const SigninModal: React.FC = () =>
{
    const {isSigninOpen, closeSignInModal} = useAuthStore((state) => ({isSigninOpen: state.isSignInOpen, closeSignInModal: state.closeSignInModal}));

    return (
        <div>
        <Modal isOpen={isSigninOpen} onClose={closeSignInModal} isCentered={true}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Sign In</ModalHeader>
                <ModalCloseButton/>
            </ModalContent>
        </Modal>    
        </div>
    )
}

export default SigninModal;