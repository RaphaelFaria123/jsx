import React, { useState } from 'react';

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title) {
            onCreate(title);
            setTitle('');
        }
    }

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    return (
        <div className='book-create'>
            <h1>Add a book</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label> <br />
                    <input value={title} type="text" onChange={handleChange} />
                    <button type="submit">Create</button>
                </div>
            </form >
        </div >
    );
}

export default BookCreate;