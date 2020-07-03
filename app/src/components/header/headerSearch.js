import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function HeaderSearch() {
    return (
        <Fragment>
            <FontAwesomeIcon icon={ faSearch } style={{cursor: "pointer"}} />
        </Fragment>
    )
}

export default HeaderSearch