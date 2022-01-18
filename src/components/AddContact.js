import { Container, Box, Flex, Heading, Avatar } from '@chakra-ui/react';

const AddContact = ({ result, addUsersOnContact }) => {
    return (
        <Container _hover={{ background: "gray.50", color: "teal.500" }} as='button' onClick={() => addUsersOnContact(result.id)}>
            <Box>
                <Flex borderStyle={'solid'} minH='60px' py={{ base: 2 }} px={{ base: 4 }} align={'center'} >
                    <Box >
                        <Avatar name='Dan Abrahmov' src={result.picture.thumbnail} />
                    </Box>
                    <Box flex='1' ml={2} align='left'>
                        <Heading size='sm' ml={2} >
                            {result.name.first + ' ' + result.name.last}
                        </Heading>
                    </Box>
                </Flex>
            </Box>
        </Container>
    );
}

export default AddContact;