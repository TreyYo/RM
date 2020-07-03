import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile} from '@fortawesome/free-solid-svg-icons'

function OurServices() {
    return (
        <div className="our__services">
            <div className='our__services-wrapper'>
                <div className='our__services-title'>
                    <h3>Our Services</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br></br>
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    </p>
                </div>
                <div className="our__services-content">
                    <ServicesContent cards={contentServices[0]}  />
                    <ServicesContent cards={contentServices[1]}  />
                    <ServicesContent cards={contentServices[2]}  />
                    <ServicesContent cards={contentServices[3]}  />
                    <ServicesContent cards={contentServices[4]}  />
                    <ServicesContent cards={contentServices[5]}  />
                </div>
            </div>
        </div>
    )
}

const contentServices = [
    {mobile: <FontAwesomeIcon icon={ faMobile } style={{fontSize: 50}}/> , title: 'Research', text: 'At vero eos et accusamus et iusto', textA: 'odio dignissimos ducimus qui blan-', textB: 'ditiis praesentium voluptatum iti', textC: 'atque corrupti quos.', btn: <Btn />},
    {mobile: <FontAwesomeIcon icon={ faMobile } style={{fontSize: 50}}/> , title: 'Portfolio', text: 'At vero eos et accusamus et iusto', textA: 'odio dignissimos ducimus qui blan-', textB: 'ditiis praesentium voluptatum iti', textC: 'atque corrupti quos.', btn: <Btn />},
    {mobile: <FontAwesomeIcon icon={ faMobile } style={{fontSize: 50}}/> , title: 'Support', text: 'At vero eos et accusamus et iusto', textA: 'odio dignissimos ducimus qui blan-', textB: 'ditiis praesentium voluptatum iti', textC: 'atque corrupti quos.', btn: <Btn />},
    {mobile: <FontAwesomeIcon icon={ faMobile } style={{fontSize: 50}}/> , title: 'Documentation', text: 'At vero eos et accusamus et iusto', textA: 'odio dignissimos ducimus qui blan-', textB: 'ditiis praesentium voluptatum iti', textC: 'atque corrupti quos.', btn: <Btn />},
    {mobile: <FontAwesomeIcon icon={ faMobile } style={{fontSize: 50}}/> , title: 'Development', text: 'At vero eos et accusamus et iusto', textA: 'odio dignissimos ducimus qui blan-', textB: 'ditiis praesentium voluptatum iti', textC: 'atque corrupti quos.', btn: <Btn />},
    {mobile: <FontAwesomeIcon icon={ faMobile } style={{fontSize: 50}}/> , title: 'Design', text: 'At vero eos et accusamus et iusto', textA: 'odio dignissimos ducimus qui blan-', textB: 'ditiis praesentium voluptatum iti', textC: 'atque corrupti quos.', btn: <Btn />}
]

function ServicesContent(props) {
    return (
        <Fragment>
            <div className="our__services-card">
                {props.cards.mobile}
                <h3>{props.cards.title}</h3>
                <p>{props.cards.text}<br></br>{props.cards.textA}<br></br>{props.cards.textB}<br></br>{props.cards.textC}</p>
                {props.cards.btn}
            </div>
        </Fragment>
    )
}

function Btn() {
    return(
        <Fragment>
            <a className="test" href='/'>READ MORE</a>
        </Fragment>
    )
}

export default OurServices