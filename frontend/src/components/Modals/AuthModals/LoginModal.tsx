import useAuthStore from "../../../state/AuthStore";
import { Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React from "react";

const LoginModal: React.FC = () =>
{
    const {isLoginOpen, closeLoginModal} = useAuthStore((state) => ({isLoginOpen: state.isLoginOpen, closeLoginModal: state.closeLoginModal}));

    return (
        <div>
        <Modal isOpen={isLoginOpen} onClose={closeLoginModal} isCentered={true}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Log In</ModalHeader>
                <ModalCloseButton/>
            </ModalContent>
        </Modal>    
        </div>
    )
}

export default LoginModal;