import React from 'react';
import classes from './ResponsesMessages.module.css';
import ResponsesItem from './ResponsesItem/ResponsesItem';

const ResponsesMessages = (props) => {
    return (
        <div className={classes.responsesMessages}>
            <ResponsesItem message="Hey,I'm good and you?" />
            <ResponsesItem message="Any plans for weekend?"/>
            <ResponsesItem message=":)"/>
        </div>
    );
}

export default ResponsesMessages;