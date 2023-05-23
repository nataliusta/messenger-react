import React from 'react';
import classes from './ResponsesMessages.module.css';
import ResponsesItem from './ResponsesItem/ResponsesItem';

const ResponsesMessages = (props) => {

    let responsesData = [
        {id: 1, message: "Hey,I'm good and you?"},
        {id: 2, message: "Any plans for weekend?"},
        {id: 3, message: ":)"}
    ]

    let resposnsesElements = responsesData.map( response => <ResponsesItem id={response.id} message={response.message} /> );

    return (
        <div className={classes.responsesMessages}>
            { resposnsesElements }
        </div>
    );
}

export default ResponsesMessages;