import React from 'react';
import classes from './ResponsesMessages.module.css';
import ResponsesItem from './ResponsesItem/ResponsesItem';

const ResponsesMessages = (props) => {

    let resposnsesElements = props.responsesData.map( response => <ResponsesItem id={response.id} message={response.message} /> );

    return (
        <div className={classes.responsesMessages}>
            { resposnsesElements }
        </div>
    );
}

export default ResponsesMessages;