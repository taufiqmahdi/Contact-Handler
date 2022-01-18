import './App.css';
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import ContactAvailables from './components/ContactAvailables'
import ContactDetails from './components/ContactDetails';
import { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import Users from './components/Users'
import AddContacts from './components/AddContacts'

function App() {

    const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure()
    const { isOpen: isDetailOpen, onOpen: onDetailOpen, onClose: onDetailClose } = useDisclosure()

    const [results, setResults] = useState([])
    const [addedContacts, setAddedContacts] = useState([])

    const fetchData = async (id) => {
        return Users[id]
    }

    const addUsers = async (id) => {
        const contactToAdd = await fetchData(id)
        setResults([...results, contactToAdd])
    }

    const fetchAddedData = async (id) => {
        return Users[id]
    }

    const addedUsers = async (id) => {
        const contactToBeAdded = await fetchAddedData(id)
        onDetailOpen()
        setAddedContacts([contactToBeAdded])
    }

    const deleteUsers = async (id) => {
        onDetailClose()
        setResults(results.filter((result) => result.id !== id))
    }

    return (
        <div className="App">

            <Modal isOpen={isAddOpen} onClose={onAddClose} isCentered>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>Pilih Kontak</ModalHeader>
                    <ModalCloseButton size='lg' />
                    <ModalBody>
                        <AddContacts results={Users} addUsersOnContact={addUsers} />
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
                        <ContactDetails results={addedContacts} deleteUsersOnContact={deleteUsers} />
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>

            <Navbar onAdd={onAddOpen} />

            {(results).length > 0 ? (
                <ContactAvailables contactDetailID={addedUsers} /* contactDetailID={addedUsers} */ results={results} />
            ) : <Dashboard />}
            
        </div>
    );
}

export default App;