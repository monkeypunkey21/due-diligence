import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Stack, Image, Divider, Box, Button, Flex, IconButton, ButtonGroup } from '@chakra-ui/react'

const PostDetails = ({post, key}) =>
{

    return (
            <Card maxW='sm'>
                <CardHeader >
                    <Flex>
                    <Box>
                        <Heading size='sm'>Post</Heading>
                        <Text>in {post.location}</Text>
                    </Box>                 
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Image
                    src='https://i.pinimg.com/736x/b2/13/6a/b2136ab4fdaa032b5ebdf2642ccaad00.jpg'
                    borderRadius='lg'              
                    />
                    <Stack mt='6' spacing='3'>
                        <Text>
                            {post.message}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider/>
                <CardFooter>
                    <ButtonGroup>
                        <Button variant='solid' colorScheme='pink'>
                            Message
                        </Button>
                        <Button variant='solid' colorScheme='pink'>
                            Comment
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
    )

}

export default PostDetails