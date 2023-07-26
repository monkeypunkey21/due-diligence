import { Card, CardHeader, Flex, Heading, CardBody, Stack, Divider, CardFooter, ButtonGroup, Button, Box, Text } from "@chakra-ui/react";
import React from "react"

interface PostDetailsProps {
    post: {
        title: string;
        img?: string;
        body: string;
        //comments: Number;
        //likes: Number;
    };
}

const PostDetails:React.FC<PostDetailsProps> = ({post}: PostDetailsProps) =>
{
    return (
            <Card maxW='sm'>
                <CardHeader >
                    <Flex>
                    <Box>
                        <Heading size='sm'>{post.title}</Heading>
                    </Box>                 
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Text className="overflow-hidden overflow-ellipsis whitespace-nowrap max-w-md">
                            {post.body}
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