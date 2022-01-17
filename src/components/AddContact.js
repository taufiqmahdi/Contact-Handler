import { ModalFooter, ModalBody, ModalOverlay, useDisclosure, Modal, Container, Text, Box, Button, Flex, useColorMode, Heading, Spacer, Avatar, Link, HStack, Divider, ModalContent } from '@chakra-ui/react';
import { MoonIcon, SunIcon, PlusSquareIcon, CopyIcon, CloseIcon } from '@chakra-ui/icons';


const AddContact = ({ result, isOpen, onOpen, onClose, onTutup, setUsersOnContact, addUsersOnContact }) => {

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

        
        

        




    
        // <Modal isOpen={isOpen} onClose={onClose}>
        //     <ModalOverlay />
        //     <ModalContent>
        //     <Container h='100%' pt={5}>
        //         <Box>
        //             <Flex borderStyle={'solid'} minH='60px' py={{ base: 2 }} px={{ base: 4 }} align={'center'} borderBottom='2px'>
        //                 <Text p={2}>
        //                     Pilih Kontak
        //                 </Text>
        //                 <Spacer />
        //                 <Button onClick={onTutup} >
        //                     <CloseIcon />
        //                 </Button>
        //             </Flex>
        //             <Divider />
        //             <Flex borderStyle={'solid'} minH='60px' py={{ base: 2 }} px={{ base: 4 }} align={'center'} >
        //                 <Box>
        //                     <Avatar as={Link} href={'#'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        //                 </Box>
        //                 <Box flex='1' ml={2}>
        //                     <Heading size='sm' as={Link} href={'#'} ml={2}>
        //                         Dan Abrahmov
        //                     </Heading>
        //                 </Box>
        //             </Flex>
        //             <Divider />
        //             <Flex borderStyle={'solid'} minH='60px' py={{ base: 2 }} px={{ base: 4 }} align={'center'} >
        //                 <Box>
        //                     <Avatar as={Link} href={'#'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        //                 </Box>
        //                 <Box flex='1' ml={2}>
        //                     <Heading size='sm' as={Link} href={'#'} ml={2}>
        //                         Dan Abrahmov
        //                     </Heading>
        //                 </Box>
        //             </Flex>
        //             <Divider />
        //             <Flex borderStyle={'solid'} minH='60px' py={{ base: 2 }} px={{ base: 4 }} align={'center'} >
        //                 <Box>
        //                     <Avatar as={Link} href={'#'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        //                 </Box>
        //                 <Box flex='1' ml={2}>
        //                     <Heading size='sm' as={Link} href={'#'} ml={2}>
        //                         Dan Abrahmov
        //                     </Heading>
        //                 </Box>
        //             </Flex>



        //             {/* <Flex alignItems='center' direction={'column'} justify={'center'} h='100%' p={5}>
        //             <CopyIcon boxSize='5em' />
        //             <Text fontSize='xl' pt={5} >
        //                 Belum ada kontak
        //             </Text>
        //         </Flex> */}
        //         </Box>
        //     </Container>
        //     <ModalFooter></ModalFooter>
        //     </ModalContent>
        // </Modal>
    );
}

export default AddContact;