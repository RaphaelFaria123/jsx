import React, { useState } from 'react';

function BookEdit({ book, onUpdate }) {
    const [title, setTitle] = useState(book.title);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title) {
            const updatedBook = {
                ...book,
                title
            };
            onUpdate(updatedBook);
        }
    }

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    return (
        <div>
            <div>Update book</div>
            <form onSubmit={handleSubmit} className='book-edit'>
                <div>
                    <label>Title:</label> <br />
                    <input value={title} type="text" onChange={handleChange} />
                    <button type="submit">Update</button>
                </div>
            </form >
        </div >
    );
}

export default BookEdit;