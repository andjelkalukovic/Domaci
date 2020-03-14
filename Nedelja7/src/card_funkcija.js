import React from 'react';
import Emoji from './emoji_funkcija';
import Desc from './description_funkcija';

const Card = (props) => {
    return (<>
        <Desc str={props.str}></Desc>
        <Emoji url={props.url}></Emoji>
    </>
    )
}
export default Card;