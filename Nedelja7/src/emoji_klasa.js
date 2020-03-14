import React from 'react';

class EmojiClass extends React.Component{
    render(){
        return (
        <img src={this.props.url} alt='' id="slika"></img>)
    }
}
export default EmojiClass;