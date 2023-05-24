import React from 'react';

const NumberVerify = (props) => {

    if (props.number > 0) {
        return(props.children);
    }

    return (<></>);
}
 
export default NumberVerify;