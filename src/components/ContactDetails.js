import { Container, Text, Box, Button, Flex, useColorMode, Heading, Spacer, Avatar, Link, HStack, Divider } from '@chakra-ui/react';
import { DeleteIcon, MoonIcon, SunIcon, PlusSquareIcon, CopyIcon, CloseIcon } from '@chakra-ui/icons';
import ContactDetail from './ContactDetail'
import { indexOf } from 'lodash';


const ContactDetails = ({ results, deleteUsersOnContact }) => {

    return (
        <>

        {results.map(( result ) => (
                <ContactDetail key = {result.id} result={result} deleteUsersOnContact={deleteUsersOnContact} />))}

         {/* <ContactDetail result={results} />  */}

        </>
    );
}

export default ContactDetails;