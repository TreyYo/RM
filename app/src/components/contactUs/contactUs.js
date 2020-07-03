import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function ContactUs() {
    return (
        <div className="contact__us">
            <div className="contact__us-wrapper">
                <div className="contact__us-title">
                    <h3>Contact Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor?<br></br> 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    </p>
                </div>
                <div className="contact__us-contacts-cards">
                    <div className="contact__us-card">
                        <div className="contact__us-mark">
                            <FontAwesomeIcon 
                                icon={faMapMarkerAlt} 
                                style={{ fontSize: "56", color: "#fff", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} 
                            />
                        </div>
                        <div className="contact__us-mark-text">
                            <p>Nobinagar savar,Dhaka</p>
                            <p>Bangladesh</p>
                        </div>
                    </div>
                    <div className="contact__us-card">
                        <div className="contact__us-mark">
                            <FontAwesomeIcon 
                                icon={faPhoneAlt} 
                                style={{ fontSize: "56", color: "#fff", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} 
                            />
                        </div>
                        <div className="contact__us-mark-text">
                            <p>+8801743331996</p>
                            <p>+8801928737807</p>
                        </div>
                    </div>
                    <div className="contact__us-card">
                        <div className="contact__us-mark">
                            <FontAwesomeIcon 
                                icon={faEnvelope} 
                                style={{ fontSize: "56", color: "#fff", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} 
                            />
                        </div>
                        <div className="contact__us-mark-text">
                            <p>quickmasud@gmail.com</p>
                            <p>quickmasud@yahoo.com</p>
                        </div>
                    </div>
                </div>
                <div className="contact__us-form">
                    <Forms />
                    <button className="contact__us-form-btn">SEND</button>
                </div>
            </div>
        </div>
    )
}

function Forms() {
    return (
        <Fragment>
            <div className="contact__us-form-fields">
                <input className="form__field-one" placeholder="Your NAME"></input>
                <input className="form__field-two" placeholder="Your Email"></input>
            </div>
            <textarea className="form__field-text-area" placeholder="Write Massage"></textarea>
        </Fragment>
    )
}

export default ContactUs