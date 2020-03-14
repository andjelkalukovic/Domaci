import React from 'react';
import EmojiClass from './emoji_klasa';
import DescClass from './description_klase';

class CardClass extends React.Component{
    render(){
        return (<>
        <EmojiClass url={this.props.url}></EmojiClass>
        <DescClass str={this.props.str}></DescClass>
        </>)
    }
}
export default CardClass;