import { Input, InputGroup, InputRightElement, Container, Text, Box, Button, Flex, useColorMode, Heading, Spacer, Avatar, Link, HStack, Divider } from '@chakra-ui/react';
import { SearchIcon, MoonIcon, SunIcon, PlusSquareIcon, CopyIcon, CloseIcon } from '@chakra-ui/icons';


const ContactAvailable = ({ onAdd, result, contactDetailID }) => {

    return (
        <Flex _hover={{ background: "gray.50", color: "teal.500" }} as='button' borderStyle={'solid'} w='100%' minH='60px' py={{ base: 2 }} px={{ base: 4 }} align={'center'} 
        onClick={() => contactDetailID(result.id)} >
            <Box>
                <Avatar as={Link} href={'#'} name='Dan Abrahmov' src={result.picture.thumbnail} />
            </Box>
            <Box flex='1' ml={2}>
                <Heading align='left' size='sm' ml={2}>
                    {result.name.first + ' ' + result.name.last}
                </Heading>
            </Box>
        </Flex>
    );
}

export default ContactAvailable;