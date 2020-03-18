import React from 'react'
import Imenik from './Imenik'

const Kontakti = ({ kontakti }) => {
    return (<>
            {kontakti.map(el => <Imenik kontakt={el}/>)}
            </>
    )
}
export default Kontakti;