import React from 'react';
import BookShow from './BookShow';
import useBooksContext from '../hooks/useBooksContext';

function BookList() {
    const { books } = useBooksContext();

    const mapBooks = () => {
        return books.map(book =>
            <div key={book.id} >
                <BookShow book={book} />
            </div>
        );
    }

    return (
        <div>{
            mapBooks()
        }
        </div>
    );
}

export default BookList;