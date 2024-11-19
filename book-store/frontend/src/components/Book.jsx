function Book({Book}){
    return (<tr>
        <td>{Book.title}</td>
        <td>{Book.price}</td>
        <td>{Book.date_publication}</td>
        <td>{Book.author}</td>
    </tr>)
}
export default Book