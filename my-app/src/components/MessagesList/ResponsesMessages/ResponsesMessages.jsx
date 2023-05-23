import React from 'react';
import classes from './ResponsesMessages.module.css';
import ResponsesItem from './ResponsesItem/ResponsesItem';

const ResponsesMessages = (props) => {

    let ResponsesData = [
        {id: 1, message: "Hey,I'm good and you?"},
        {id: 2, message: "Any plans for weekend?"},
        {id: 3, message: ":)"}
    ]

    return (
        <div className={classes.responsesMessages}>
            <ResponsesItem id={ResponsesData[0].id} message={ResponsesData[0].message} />
            <ResponsesItem id={ResponsesData[1].id} message={ResponsesData[1].message}/>
            <ResponsesItem id={ResponsesData[2].id} message={ResponsesData[2].message}/>
        </div>
    );
}

export default ResponsesMessages;