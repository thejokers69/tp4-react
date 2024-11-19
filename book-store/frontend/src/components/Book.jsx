function Book({ book }) {
    const { id = 'N/A', title = 'Java Programming', price = '30', author = 'Anonymous', publicationDate = 'Unknown' } = book || {};

    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{price}</td>
            <td>{author}</td>
            <td>{publicationDate}</td>
            <td>
                <button>Details</button>
            </td>
        </tr>
    );
}

export default Book;