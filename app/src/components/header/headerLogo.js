import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

function HeaderLogo() {
    return(
        <Fragment>
           <FontAwesomeIcon icon={ faReact } style={{fontSize: "45", color: "0FE4EF", cursor: "pointer"}}/>
        </Fragment>
    )
}

export default HeaderLogo