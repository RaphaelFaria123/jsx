import React from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {

    return (
        <div className="app">
            <BookList />
            <BookCreate />
        </div>
    );
}

export default App;