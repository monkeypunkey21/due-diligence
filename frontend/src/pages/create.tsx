import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Card,
  CardBody,
  Textarea,
  CardHeader,
  Heading,
  Box,
  Button,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

const createPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [titleError, setTitleError] = useState("");
  const [bodyError, setBodyError] = useState("");

  const handleSubmit = async () => {
    if (!title) return setTitleError("Must have a title");
    else if (!body) return setBodyError("Must have a body");

    const response = await fetch("http://localhost:4000/api/posts/", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        title,
        body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (response.ok) {
      setTitle("");
      setBody("");
      setTitleError("");
      setBodyError("");
    } else {
      console.log("issue");
    }
    console.log(json);
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        p={5}
        maxWidth="800px"
        mx="auto"
        bgColor="white"
        boxSize="lg"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={4} align="center">
          <Heading justifyContent="center">Create a Post</Heading>
          <Input
            isInvalid={titleError != ""}
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            size="md"
          />
          <Textarea
            isInvalid={bodyError != ""}
            placeholder="Text"
            onChange={(e) => {
              setBody(e.target.value);
            }}
            value={body}
            height="300px"
          />
          <Button onClick={handleSubmit} colorScheme="blue">
            Post
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default createPost;
