import React from 'react'
import internet from '../../img/aboutUs/internet.png'
import transfer from '../../img/aboutUs/transfer.png'
import head from '../../img/aboutUs/head.png'

function AboutUs() {
    return (
        <div className="about__us">
            <div className="about__us-wrapper">
                <div className="about__us-title">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br></br> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                </div>
                <div className="about__us-cards-wrapper">
                    <AboutUsCards card={services[0]} />
                    <AboutUsCards card={services[1]} />
                    <AboutUsCards card={services[2]} />
                </div>
            </div>
        </div>
    )
}

const services = [
    {image: internet, title: 'Awesome Icons', text: 'Lorem ipsum dolor sit amet, con-', text2: 'sectetur adipisicing elit sed do ', text3: 'eiusmod tempor' },
    {image: transfer, title: 'Awesome Icons', text: 'Lorem ipsum dolor sit amet, con-', text2: 'sectetur adipisicing elit sed do ', text3: 'eiusmod tempor' },
    {image: head, title: 'Awesome Icons', text: 'Lorem ipsum dolor sit amet, con-', text2: 'sectetur adipisicing elit sed do ', text3: 'eiusmod tempor' },
]

function AboutUsCards(props) {
    return (
            <div className="about__us-card">
                <img src={props.card.image} alt=""></img>
                <h3>{props.card.title}</h3>
                <p>{props.card.text}<br></br>{props.card.text2}<br></br>{props.card.text3}</p>
            </div>
    )
}

export default AboutUs