import ContactAvailable from "./ContactAvailable";
import { Input, InputGroup, InputRightElement, Container, Box, Flex, Spacer, Divider } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const ContactAvailables = ({ results, contactDetailID }) => {
    return (
        <Container maxWidth='95%' h='100%' pt={5} >
            <Box >
                <Flex borderStyle={'solid'} minH='60px' py={{ base: 2 }} px={{ base: 4 }} align={'center'} >
                    <Spacer />
                    <InputGroup width='260px'>
                        <InputRightElement
                            pointerEvents='none'
                            children={<SearchIcon color='gray.300' />}
                        />
                        <Input placeholder='Search contact' />
                    </InputGroup>
                </Flex>
                <Divider />
                    <>
                    {results.map(( result ) => (
                    <ContactAvailable key = {result.id} result={result} contactDetailID={contactDetailID} />))}
                    </>
                <Divider />
            </Box>
        </Container>
    )
}

export default ContactAvailables;