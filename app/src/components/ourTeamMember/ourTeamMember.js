import React, { Component } from 'react'
import rounded1 from '../../img/ourTeamMember/rounded1.png'
import rounded2 from '../../img/ourTeamMember/rounded2.png'
import rounded3 from '../../img/ourTeamMember/rounded3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import { faDribbble } from '@fortawesome/free-brands-svg-icons'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class MultipleItems extends Component {
    render() {

        const members = [
            {
                id: 1, rounded1: rounded1, header1: 'John Doe', text1: 'General Manager',
                fb: <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: "30", cursor: "pointer" }} />,
                tw: <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "30", cursor: "pointer" }} />,
                cs: <FontAwesomeIcon icon={faComments} style={{ fontSize: "30", cursor: "pointer" }} />,
                db: <FontAwesomeIcon icon={faDribbble} style={{ fontSize: "30", cursor: "pointer" }} />
            },
            {
                id: 2, rounded2: rounded2, header2: 'Alexa Biru', text2: 'Office Director',
                fb: <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: "30", cursor: "pointer" }} />,
                tw: <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "30", cursor: "pointer" }} />,
                cs: <FontAwesomeIcon icon={faComments} style={{ fontSize: "30", cursor: "pointer" }} />,
                db: <FontAwesomeIcon icon={faDribbble} style={{ fontSize: "30", cursor: "pointer" }} />
            },
            {
                id: 3, rounded3: rounded3, header3: 'Ronobir sing', text3: 'Admin',
                fb: <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: "30", cursor: "pointer" }} />,
                tw: <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "30", cursor: "pointer" }} />,
                cs: <FontAwesomeIcon icon={faComments} style={{ fontSize: "30", cursor: "pointer" }} />,
                db: <FontAwesomeIcon icon={faDribbble} style={{ fontSize: "30", cursor: "pointer" }} />
            },
            {
                id: 4, rounded2: rounded2, header2: 'Alexa Biru', text2: 'Office Director',
                fb: <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: "30", cursor: "pointer" }} />,
                tw: <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "30", cursor: "pointer" }} />,
                cs: <FontAwesomeIcon icon={faComments} style={{ fontSize: "30", cursor: "pointer" }} />,
                db: <FontAwesomeIcon icon={faDribbble} style={{ fontSize: "30", cursor: "pointer" }} />
            },
            {
                id: 5, rounded3: rounded3, header3: 'Ronobir sing', text3: 'Admin',
                fb: <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: "30", cursor: "pointer" }} />,
                tw: <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "30", cursor: "pointer" }} />,
                cs: <FontAwesomeIcon icon={faComments} style={{ fontSize: "30", cursor: "pointer" }} />,
                db: <FontAwesomeIcon icon={faDribbble} style={{ fontSize: "30", cursor: "pointer" }} />
            },
            {
                id: 6, rounded1: rounded1, header1: 'John Doe', text1: 'General Manager',
                fb: <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: "30", cursor: "pointer" }} />,
                tw: <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "30", cursor: "pointer" }} />,
                cs: <FontAwesomeIcon icon={faComments} style={{ fontSize: "30", cursor: "pointer" }} />,
                db: <FontAwesomeIcon icon={faDribbble} style={{ fontSize: "30", cursor: "pointer" }} />
            }
        ];

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                  breakpoint: 1450,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                    breakpoint: 580,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true,
                      arrows: false
                    }
                }
            ]
        };

        return (
            <div className="our__team-member">
                <div className="our__team-member-wrapper">
                    <div className="our__team-member-title">
                        <h3>Our Team Member</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br></br>
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        </p>
                    </div>
                    <div className="our__team-all-members">
                        <div className="our__team-all-members-wrapper">
                            <Slider {...settings}>
                                <div className="our__team-all-members-card">
                                    <img src={members[0].rounded1} alt=""></img>
                                    <h3>{members[0].header1}</h3>
                                    <p>{members[0].text1}</p>
                                    <div className="our__team-all-social-NW">
                                        <div>{members[0].fb}</div>
                                        <div>{members[0].tw}</div>
                                        <div>{members[0].cs}</div>
                                        <div>{members[0].db}</div>
                                    </div>
                                </div>
                                <div className="our__team-all-members-card">
                                    <img src={members[1].rounded2} alt=""></img>
                                    <h3>{members[1].header2}</h3>
                                    <p>{members[1].text2}</p>
                                    <div className="our__team-all-social-NW">
                                        <div>{members[1].fb}</div>
                                        <div>{members[1].tw}</div>
                                        <div>{members[1].cs}</div>
                                        <div>{members[1].db}</div>
                                    </div>
                                </div>
                                <div className="our__team-all-members-card">
                                    <img src={members[2].rounded3} alt=""></img>
                                    <h3>{members[2].header3}</h3>
                                    <p>{members[2].text3}</p>
                                    <div className="our__team-all-social-NW">
                                        <div>{members[2].fb}</div>
                                        <div>{members[2].tw}</div>
                                        <div>{members[2].cs}</div>
                                        <div>{members[2].db}</div>
                                    </div>
                                </div>

                                <div className="our__team-all-members-card">
                                    <img src={members[0].rounded1} alt=""></img>
                                    <h3>{members[0].header1}</h3>
                                    <p>{members[0].text1}</p>
                                    <div className="our__team-all-social-NW">
                                        <div>{members[0].fb}</div>
                                        <div>{members[0].tw}</div>
                                        <div>{members[0].cs}</div>
                                        <div>{members[0].db}</div>
                                    </div>
                                </div>
                                <div className="our__team-all-members-card">
                                    <img src={members[1].rounded2} alt=""></img>
                                    <h3>{members[1].header2}</h3>
                                    <p>{members[1].text2}</p>
                                    <div className="our__team-all-social-NW">
                                        <div>{members[1].fb}</div>
                                        <div>{members[1].tw}</div>
                                        <div>{members[1].cs}</div>
                                        <div>{members[1].db}</div>
                                    </div>
                                </div>
                                <div className="our__team-all-members-card">
                                    <img src={members[2].rounded3} alt=""></img>
                                    <h3>{members[2].header3}</h3>
                                    <p>{members[2].text3}</p>
                                    <div className="our__team-all-social-NW">
                                        <div>{members[2].fb}</div>
                                        <div>{members[2].tw}</div>
                                        <div>{members[2].cs}</div>
                                        <div>{members[2].db}</div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
