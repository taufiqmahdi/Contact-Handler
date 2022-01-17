import { Container, Text, Box, Button, Flex, useColorMode, Heading, Spacer, Avatar, Link, HStack, Divider } from '@chakra-ui/react';
import { DeleteIcon, MoonIcon, SunIcon, PlusSquareIcon, CopyIcon, CloseIcon } from '@chakra-ui/icons';
import ContactDetail from './ContactDetail'
import { indexOf } from 'lodash';


const ContactDetails = ({ results }) => {

    return (
        <>

        {/* {results.map(( result,  index ) => (
                <ContactDetail key = {index} result={result} />))} */}

        {/* <ContactDetail result={results} /> */}

        { results.gender }
        </>
    );
}

export default ContactDetails;