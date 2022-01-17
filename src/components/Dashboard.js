import { Container, Text, Box, Button, Flex, useColorMode, Heading, Spacer } from '@chakra-ui/react';
import { MoonIcon, SunIcon, PlusSquareIcon, CopyIcon } from '@chakra-ui/icons';


const Navbar = () => {

    return (
        <Flex alignItems='center' direction={'column'} justify={'center'} h='100%' p={5}>
            <CopyIcon boxSize='5em' />
            <Text fontSize='xl' pt={5} >
                Belum ada kontak
            </Text>
        </Flex>
    );
}

export default Navbar;