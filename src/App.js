import './App.css';
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import AddContact from './components/AddContact'
import ContactAvailable from './components/ContactAvailable'
import ContactDetail from './components/ContactDetail';
import ContactDetails from './components/ContactDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Heading, Container, Box, Flex, Text, Spacer, Button, Divider, Avatar, Link, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import Users from './components/Users'
import AddContacts from './components/AddContacts'
import { findIndex } from 'lodash';

function App() {

    const [showAddContact, setShowAddContact] = useState(false)
    const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure()
    const { isOpen: isDetailOpen, onOpen: onDetailOpen, onClose: onDetailClose } = useDisclosure()

    const addContacts = [];

    // const addContact = () => {
    //   ''
    // }

    // const usersWithID = (Users) => {
    //     Users.forEach((Users, i) => {
    //         Users.id = i + 1;
    //       })

    //       return setResults
    // }

    const [results, setResults] = useState(Users)
    // const [results, setResults] = useState([])

    const [usersOnContact, setUsersOnContact] = useState([])

    const addUsersOnContact = () => {
        setUsersOnContact([ ...usersOnContact, setUsersOnContact ])
    }

    const addIdentifier = () => {
        Users.forEach((Users, i) => {
            Users.id = i + 1;
          })
    }

    return (
        <Router>
            <div className="App">
                {/* <Navbar onAdd={() => setShowAddContact(!showAddContact)} /> */}
                <Navbar onAdd={onAddOpen} />

                <Modal isOpen={isAddOpen} onClose={onAddClose} isCentered>
                    <ModalOverlay />
                    <ModalContent >
                        <ModalHeader>Pilih Kontak</ModalHeader>
                        <ModalCloseButton size='lg' />
                        <ModalBody>
                            <AddContacts results={results} setUsersOnContact={addUsersOnContact} />
                            {/* <Container /* h='100%' pt={5}  > */}
                            {/* <Box> */}
                            {/* <Flex borderStyle={'solid'} minH='60px' py={{ base: 2 }} px={{ base: 4 }} align={'center'} borderBottom='2px'>
                        <Text p={2}>
                            Pilih Kontak
                        </Text>
                        <Spacer />
                        <Button onClick={onAddClose} >
                            <CloseIcon />
                        </Button>
                    </Flex>
                    <Divider /> */}
                            {/* <Flex borderStyle={'solid'} minH='60px' py={{ base: 2 }} px={{ base: 4 }} align={'center'} >
                                        <Box>
                                            <Avatar as={Link} href={'#'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                        </Box>
                                        <Box flex='1' ml={2}>
                                            <Heading size='sm' as={Link} href={'#'} ml={2}>
                                                Dan Abrahmov
                                            </Heading>
                                        </Box>
                                    </Flex>
                                    <Divider />
                                    <Flex borderStyle={'solid'} minH='60px' py={{ base: 2 }} px={{ base: 4 }} align={'center'} >
                                        <Box>
                                            <Avatar as={Link} href={'#'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                        </Box>
                                        <Box flex='1' ml={2}>
                                            <Heading size='sm' as={Link} href={'#'} ml={2}>
                                                Dan Abrahmov
                                            </Heading>
                                        </Box>
                                    </Flex>
                                    <Divider />
                                    <Flex borderStyle={'solid'} minH='60px' py={{ base: 2 }} px={{ base: 4 }} align={'center'} >
                                        <Box>
                                            <Avatar as={Link} href={'#'} name='Dan Abrahmov' src={results[0].picture.thumbnail} />
                                        </Box>
                                        <Box flex='1' ml={2}>
                                            <Heading size='sm' as={Link} href={'#'} ml={2}>
                                                {results[0].name.first + ' ' + results[0].name.last}
                                            </Heading>
                                        </Box>
                                    </Flex> */}



                            {/* <Flex alignItems='center' direction={'column'} justify={'center'} h='100%' p={5}>
                    <CopyIcon boxSize='5em' />
                    <Text fontSize='xl' pt={5} >
                        Belum ada kontak
                    </Text>
                </Flex> */}
                            {/* </Box>
                            </Container> */}
                        </ModalBody>
                        <ModalFooter></ModalFooter>
                    </ModalContent>
                </Modal>

                <Modal isOpen={isDetailOpen} onClose={onDetailClose} isCentered size='3xl'>
                    <ModalOverlay />
                    <ModalContent >
                        <ModalHeader>Detail Kontak</ModalHeader>
                        <ModalCloseButton size='lg' />
                        <ModalBody>
                            <ContactDetail />
                            
                        </ModalBody>
                        <ModalFooter></ModalFooter>
                    </ModalContent>
                </Modal>

                {/* { Users.map((User) => (
                   User.name.first + User.name.last
                ))} */}

                {(Users).length > 0 ? (
                    <ContactAvailable onAdd={onDetailOpen} results={Users}  />
                ) : <Dashboard />}

                <Routes>
                    <Route path='/' exact element={(
                        <>
                            {/* {results.length > 0 ? (
                                <ContactAvailable tasks={tasks} onDelete=
                                    {deleteTask} onToggle={toggleReminder} />
                            ) : ('No Tasks To Show')} */}
                        </>
                    )} />

                </Routes>


                {/* <Dashboard />
                <ContactAvailable onAdd={onDetailOpen} /> */}
                { /* <AddContact />
        <ContactAvailable /> 
        <ContactDetail />*/}
            </div>
        </Router>
    );



}



export default App;