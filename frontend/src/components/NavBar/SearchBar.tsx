import { Input, Text, Flex, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React from "react";

const SearchBar: React.FC = () =>
{
    return (
        <Flex flexGrow={1} marginRight={2} align='center' ml={2}>
            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                children={<Search2Icon marginBottom={1} color='orange'/>}/>
                <Input
                placeholder="Search for a ticker"
                size='md'
                type="search"
                />
            </InputGroup>
        </Flex>
    )
}

export default SearchBar;