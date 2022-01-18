import ContactDetail from './ContactDetail'

const ContactDetails = ({ results, deleteUsersOnContact }) => {
    return (
        <>
        {results.map((result) => (
                <ContactDetail key = {result.id} result={result} deleteUsersOnContact={deleteUsersOnContact} />))}
        </>
    );
}

export default ContactDetails;