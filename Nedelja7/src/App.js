import React from 'react';
import './App.css';
import Forma from './forma_funkcija';
import FormaKlase from './forma_klasa';
import Card from './card_funkcija';
import CardClass from './card_klasa';
import './klase.css';

function App() {
  return (<>
    <Forma props={'Dugme preko funkcije'}></Forma>
    <br></br>
    <br></br>
    <FormaKlase text={'Dugme preko klase'}></FormaKlase>
    <hr></hr>
    <br></br>
    <Card str='String preko funkcije' 
    url='https://fcw.com/-/media/GIG/FCWNow/Topics/Concepts/smiley.png'></Card>
    <br></br>
    <br></br>
    <CardClass str='String preko klase'
    url='https://exquisite-smile.com/wp-content/uploads/2018/01/whitesmile.png'></CardClass>
    </>
  );
}

export default App;
