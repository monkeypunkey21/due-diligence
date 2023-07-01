import { Box, Text } from '@chakra-ui/layout'
import {Link} from 'react-router-dom'


const NavBar = () =>
{
     return (
        <header>
            <Box bg="pink" p="4">
                <Box display="flex" alignItems="center" justifyContent="space-between">
                <Link to="/">
                    <Text fontWeight="bold">
                        Home
                    </Text>
                </Link>
                <Link to="/form">
                    <Text fontWeight="bold">
                        Post a sitting
                    </Text>
                </Link>
                <Link to="/login">
                    <Text fontWeight="bold">
                        Login
                    </Text>
                </Link>
            </Box>
        </Box>
        </header>
     )
}

export default NavBar