import { Button, Flex } from "@chakra-ui/react";
import React from "react";

const AuthContent: React.FC = () =>
{
    return (
        <div>
            <Flex justify='center' align='center'>
                <Button mr='2'>Log In</Button>
                <Button>Sign Up</Button>
            </Flex>
        </div>
    )
}

export default AuthContent;