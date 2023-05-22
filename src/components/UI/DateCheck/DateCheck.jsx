import React, { useState } from 'react';

import moment from 'moment';
import 'moment/locale/pt-br';

const DateCheck = (props) => {

    // const [data, setData] = useState(moment(props.data, "DDMMYYYY").fromNow());

    // var a = new Date(props.data);
    // var b = moment().calendar();
    

    return ( 
            <>
                {props.data}
            </> 
    );
}
 
export default DateCheck;