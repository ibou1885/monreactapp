import React from 'react'
import { Image } from 'react-bootstrap'

import Background from '../Assets/logo.svg'

const FondEcran = () => {



    return (
        <div style={{ 
             backgroundImage: `url(${Background})`,
              width:"1000",
              height:"auto"
              
              }} >

          { /* <Image src={Logo} width="600" /> */}

        </div>
    )
}

export default FondEcran
