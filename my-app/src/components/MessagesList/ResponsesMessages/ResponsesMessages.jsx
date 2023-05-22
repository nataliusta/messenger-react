import React from 'react';
import classes from './ResponsesMessages.module.css';
import ResponsesItem from './ResponsesItem/ResponsesItem';

const ResponsesMessages = () => {
    return (
        <div className={classes.responsesMessages}>
            <ResponsesItem />
        </div>
    );
}

export default ResponsesMessages;