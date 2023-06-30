import { Text } from '@chakra-ui/layout'
import {Link} from 'react-router-dom'


const NavBar = () =>
{
     return (
        <header>
            <div>
                <Link to="/">
                    <Text>
                        Home
                    </Text>
                </Link>
                <Link to="/form">
                    <Text>
                        Post a sitting
                    </Text>
                </Link>
            </div>
        </header>
     )
}

export default NavBar