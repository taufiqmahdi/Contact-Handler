import { Container, Text, Box, Button, Flex, Heading, Avatar, Divider } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const ContactDetail = ({ result, deleteUsersOnContact }) => {
    return (
        <Container maxW='100%'>
            <Flex h='250px' direction={'row'} w='100%'>
                <Box p={5} align='center'>
                    <Avatar size='2xl' name='Dan Abrahmov' src={result.picture.large} />
                    <Box p={3}>
                        <Heading size='md'>
                            {result.name.first + ' ' + result.name.last}
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
                            {result.dob.date}
                        </Text>
                        <Heading size={'sm'} mt={2}>
                            Jenis Kelamin
                        </Heading>
                        <Text>
                            {result.gender === 'female' ? 'Perempuan' : 'Laki-laki'}
                        </Text>
                        <Heading size={'sm'} mt={2}>
                            Alamat Surel
                        </Heading>
                        <Text>
                            {result.email}
                        </Text>
                        <Heading size={'sm'} mt={2}>
                            Nomor Telepon
                        </Heading>
                        <Text>
                            {result.phone}
                        </Text>
                    </Box>
                    <Box ml={2} w='50%'>
                        <Heading size={'sm'} mt={2}>
                            Tempat Tinggal
                        </Heading>
                        <Text>
                            {result.location.street.name + ' ' + result.location.street.number}
                            {<br />}
                            {result.location.city}
                            {<br />}
                            {result.location.state}
                            {<br />}
                            {result.location.postcode}
                            {<br />}
                            {result.location.coordinates.latitude + ' , ' + result.location.coordinates.longitude}
                        </Text>
                    </Box>
                </Flex>
            </Flex>
            <Box align='right'>
                <Button onClick={() => deleteUsersOnContact(result.id)} variant={'ghost'} colorScheme='red' leftIcon={
                    <DeleteIcon />
                } >
                    Hapus Kontak
                </Button>
            </Box>
        </Container>
    );
}

export default ContactDetail;