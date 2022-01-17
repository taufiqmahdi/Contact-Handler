import { Input, InputGroup, InputRightElement, Container, Text, Box, Button, Flex, useColorMode, Heading, Spacer, Avatar, Link, HStack, Divider } from '@chakra-ui/react';
import { SearchIcon, MoonIcon, SunIcon, PlusSquareIcon, CopyIcon, CloseIcon } from '@chakra-ui/icons';


const ContactAvailable = ({ onAdd, results }) => {

    return (
        <Container maxWidth='100%' h='100%' pt={5} >
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
                <Flex _hover={{ background: "gray.50", color: "teal.500" }} as='button' borderStyle={'solid'} w='100%' minH='60px' py={{ base: 2 }} px={{ base: 4 }} align={'center'} onClick={onAdd} >
                    <Box>
                        <Avatar as={Link} href={'#'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                    </Box>
                    <Box flex='1' ml={2}>
                        <Heading align='left' size='sm' ml={2}>
                            Dan Abrahmov
                        </Heading>
                    </Box>
                </Flex>
                <Divider />

                




                {/* <Flex alignItems='center' direction={'column'} justify={'center'} h='100%' p={5}>
                    <CopyIcon boxSize='5em' />
                    <Text fontSize='xl' pt={5} >
                        Belum ada kontak
                    </Text>
                </Flex> */}
            </Box>

            {/* {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />))} */}

        </Container>
    );
}

export default ContactAvailable;