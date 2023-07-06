import React, { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

const App = () => {
    const [books, setBooks] = useState([]);
    const baseURL = 'http://localhost:3001/books';

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const res = await axios.get(baseURL);
            setBooks(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const createBook = (title) => {
        const book = {
            title
        };

        axios.post(baseURL, book)
            .then(res => {
                setBooks([...books, res.data]);
            })
            .catch(err => console.log(err));
    }

    const deleteBook = (id) => {
        axios.delete(`${baseURL}/${id}`)
            .then(res => {
                const newBooks = books.filter(book => book.id !== id);
                setBooks(newBooks);
            })
            .catch(err => console.log(err));
    }

    const updateBook = (updatedBook) => {
        axios.put(`${baseURL}/${updatedBook.id}`, updatedBook)
            .then(res => {
                const updatedBooks = books.map((book) => {
                    if (book.id === updatedBook.id) {
                        return { ...updatedBook, ...res.data };
                    }
                    return book;
                });

                setBooks(updatedBooks);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="app">
            <BookList books={books} deleteBook={deleteBook} updateBook={updateBook} />
            <BookCreate onCreate={createBook} />

        </div>
    );
}

export default App;