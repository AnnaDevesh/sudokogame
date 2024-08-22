import React from 'react';

const Error = ({ errorHandler }) => {
    if (!errorHandler.hasError) return null;

    return (
        <div className="error-container">
            <p className="error-message">{errorHandler.message}</p>
        </div>
    );
};

export default Error;
