import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <div id='notfound'>
                <div className='notfound'>
                    <div className='notfound-404'>
                        <h1>404</h1>
                    </div>
                    <h2>Page Not Found</h2>
                    <p className='mb-5'>
                        The page you are looking might have been removed or had its name changed or its temporry unavailable
                    </p>
                    <Link to="/">Back To homePage</Link>
                </div>
            </div> 
        </>
    );
};

export default Error;