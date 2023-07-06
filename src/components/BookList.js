import React from 'react';
import BookShow from './BookShow';

function BookList({ books, deleteBook, updateBook }) {
    const mapBooks = () => {
        return books.map(book =>
            <div key={book.id} >
                <BookShow book={book} deleteBook={deleteBook} updateBook={updateBook}/>
            </div>
        );
    }

    return (<div>{mapBooks()}</div>);
}

export default BookList;