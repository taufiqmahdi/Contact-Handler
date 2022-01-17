import { IconButton, Container, Text, Box, Button, Flex, useColorMode, Heading, Spacer } from '@chakra-ui/react';
import { MoonIcon, SunIcon, PlusSquareIcon } from '@chakra-ui/icons';


const Navbar = ({ onAdd }) => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex borderBottom={1} borderStyle={'solid'} minH='60px' py={{ base: 2 }} px={{ base: 4 }} align={'center'} >
            <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', /* md: 'none' */ }} >
                <Heading size='md' alignSelf='center'>
                    Kelola Kontak
                </Heading>
                <Spacer />
                <Button onClick={onAdd} leftIcon={
                    <PlusSquareIcon />
                    } > 
                    Tambah Kontak
                </Button>
                <Button onClick={toggleColorMode} ml={2}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
            </Flex>
        </Flex>
    );
}

export default Navbar;