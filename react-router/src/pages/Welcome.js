import React from 'react';
import { Route } from 'react-router-dom';

const Welcome = (props) => {
    return (
        <div>
            <h1>The Welcome Page</h1>
            <Route path='/welcome/new-user'>
                <h1>Welcome! new user!</h1>
            </Route>
        </div>
    );
}

export default Welcome;