import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Dhiraj', text: 'Learning React is fun!'},
    {id: 'q2', author: 'Kumar', text: 'Learning Java is Great!'},
    {id: 'q3', author: 'Mehta', text: 'Learning Spring is more fun!'}
];

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}/>
    );
}

export default AllQuotes;