import React, { Fragment } from 'react';
import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Dhiraj', text: 'Learning React is fun!'},
    {id: 'q2', author: 'Kumar', text: 'Learning Java is Great!'},
    {id: 'q3', author: 'Mehta', text: 'Learning Spring is more fun!'}
];


const QuoteDetails = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if(!quote){
        return <p>No Quote Found</p>
    }
    
    return (
        <Fragment>
           <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
}

export default QuoteDetails;