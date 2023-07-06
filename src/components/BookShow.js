import React, { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, deleteBook, updateBook }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleClick = () => {
        deleteBook(book.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleUpdateBook = (updatedBook) => {
        console.log(updatedBook);
        updateBook(updatedBook);
        setShowEdit(false);
    }

    return (
        <div className='book-show'>
            {showEdit ? <BookEdit book={book} onUpdate={handleUpdateBook} /> : (
                book.title
                )}
            <div className="actions">
                <button onClick={handleEditClick} className="edit">Delete</button>
                <button onClick={handleClick} className="delete">Delete</button>
            </div>
        </div>
    );
}

export default BookShow;