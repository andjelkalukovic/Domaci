import React from 'react'

const Imenik = ({ kontakt }) => {
    let { ime, broj } = kontakt;
    return (<>
        <p>Име контакта: {ime}<p>
            </p> број телефона: {broj}</p>
        <hr></hr>
        </>
    )
}
export default Imenik;