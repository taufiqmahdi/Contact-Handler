import { Container, Text, Box, Button, Flex, useColorMode, Heading, Spacer, Avatar, Link, HStack, Divider } from '@chakra-ui/react';
import { DeleteIcon, MoonIcon, SunIcon, PlusSquareIcon, CopyIcon, CloseIcon } from '@chakra-ui/icons';


const ContactDetail = ({ result }) => {

    return (
        <Container maxW='100%'>
            <Flex h='250px' direction={'row'} w='100%'>
                <Box p={5} align='center'>
                    <Avatar size='2xl' name='Dan Abrahmov' src='https://randomuser.me/api/portraits/women/26.jpg' />
                    <Box p={3}>
                        <Heading size='md'>
                            Claudia Davis
                        </Heading>
                    </Box>
                </Box>
                <Divider orientation='vertical' />
                <Flex flex='1' direction={'row'} p={5} >
                    <Box w='50%'>
                        <Heading size={'sm'} mt={2}>
                            Tanggal Lahir
                        </Heading>
                        <Text>
                            26 Januari 1952
                        </Text>
                        <Heading size={'sm'} mt={2}>
                            Jenis Kelamin
                        </Heading>
                        <Text>
                            Perempuan
                        </Text>
                        <Heading size={'sm'} mt={2}>
                            Alamat Surel
                        </Heading>
                        <Text>
                            claudia.davis@example.com
                        </Text>
                        <Heading size={'sm'} mt={2}>
                            Nomor Telepon
                        </Heading>
                        <Text>
                            (318)-587-4856
                        </Text>
                    </Box>
                    <Box ml={2} w='50%'>
                        <Heading size={'sm'} mt={2}>
                            Tempat Tinggal
                        </Heading>
                        <Text>
                            2047 Spring St
                        </Text>
                    </Box>
                </Flex>
            </Flex>
            <Box align='right'>
                <Button variant={'ghost'} colorScheme='red' onClick={''} leftIcon={
                    <DeleteIcon />
                    } > 
                    Hapus Kontak
                </Button>
            </Box>
            
        </Container>
    );
}

export default ContactDetail;