import AddContact from "./AddContact";

const AddContacts = ({ results, setUsersOnContact, addUsersOnContact }) => {
    return (
        <>
            {results.map(( result ) => (
                <AddContact key = {result.id} result={result} addUsersOnContact={addUsersOnContact} />))}
                
        </>
    )
}

export default AddContacts;