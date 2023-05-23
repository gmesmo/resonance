import React, { useState } from 'react';

import moment from 'moment';
import 'moment/locale/pt-br';

const DateCheck = (props) => {

    // const [data, setData] = useState(moment(props.data, "DDMMYYYY").fromNow());

    var a = new Date(props.data);
    var b = new Date();
    
    var difference = b.getTime() - a.getTime() ;

    var diff_day = difference / (1000 * 3600 * 24);

    console.log(diff_day);
    if (diff_day < 7) {
        return(true);
    }
    
    return (false);
}
 
export default DateCheck;