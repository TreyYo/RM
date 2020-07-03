import React, { Fragment } from 'react'
import rounded1 from '../../img/ourTeamMember/rounded1.png'
import rounded2 from '../../img/ourTeamMember/rounded2.png'
import rounded3 from '../../img/ourTeamMember/rounded3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import { faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'


class OurTeamMember extends React.Component {
    constructor() {
        super();

        this.state = {
            images: [[rounded1, rounded2, rounded3],[rounded3, rounded2, rounded1]],
            currImgIndex: 0,
        }
        this.moveSlider = this.moveSlider.bind(this);
    }

    moveSlider(event) {
        event.preventDefault();
        let newIndex = this.state.currImgIndex;
        if(event.currentTarget.dataset.direction === 'next') {
            this.setState({currImgIndex: ++newIndex})
            if(newIndex > this.state.images.length - 1) {
                this.setState({currImgIndex: 0})
            }
        } else {
            this.setState({currImgIndex: --newIndex}) 
                if(newIndex < 0) {
                    this.setState({currImgIndex: this.state.images.length - 1}) 
                }
        }
    }

    render() {
        return(
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
                            <a className="our__team-prew" data-direction="prev" href="/" onClick={this.moveSlider}> <FontAwesomeIcon icon={ faReply } style={{fontSize: "45", cursor: "pointer"}}/></a>
                                <div className="our__team-all-members-slider">
                                    <CreateMembersCard 
                                        images={this.state.images[this.state.currImgIndex]}
                                    />
                                </div>
                            <a className="our__team-next" data-direction="next" href="/" onClick={this.moveSlider}> <FontAwesomeIcon icon={ faShare } style={{fontSize: "45", cursor: "pointer"}}/></a>
                        </div>
                        <div className="our__team-all-dots">
                            <span className="our__team-dot our__team-dot-active"></span>
                            <span className="our__team-dot"></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class CreateMembersCard extends React.Component {
    render() {
        let test = this.props.images;
        console.log(test);


        const members = [
            {id: 1, rounded: test[0], header: 'John Doe', text: 'General Manager', 
                fb: <FontAwesomeIcon icon={ faFacebookF } style={{fontSize: "30", cursor: "pointer"}}/>,
                tw: <FontAwesomeIcon icon={ faTwitter} style={{fontSize: "30", cursor: "pointer"}}/>,
                cs: <FontAwesomeIcon icon={ faComments} style={{fontSize: "30", cursor: "pointer"}}/>,
                db: <FontAwesomeIcon icon={ faDribbble} style={{fontSize: "30", cursor: "pointer"}}/>
            },
            {id: 2, rounded: test[1], header: 'Alexa Biru', text: 'Office Director', 
                fb: <FontAwesomeIcon icon={ faFacebookF } style={{fontSize: "30", cursor: "pointer"}}/>,
                tw: <FontAwesomeIcon icon={ faTwitter} style={{fontSize: "30", cursor: "pointer"}}/>,
                cs: <FontAwesomeIcon icon={ faComments} style={{fontSize: "30", cursor: "pointer"}}/>,
                db: <FontAwesomeIcon icon={ faDribbble} style={{fontSize: "30", cursor: "pointer"}}/> 
            },
            {id: 3, rounded: test[2], header: 'Ronobir sing', text: 'Admin', 
                fb: <FontAwesomeIcon icon={ faFacebookF } style={{fontSize: "30", cursor: "pointer"}}/>,
                tw: <FontAwesomeIcon icon={ faTwitter} style={{fontSize: "30", cursor: "pointer"}}/>,
                cs: <FontAwesomeIcon icon={ faComments} style={{fontSize: "30", cursor: "pointer"}}/>,
                db: <FontAwesomeIcon icon={ faDribbble} style={{fontSize: "30", cursor: "pointer"}}/> 
            }
        ]

        return (
            <Fragment>
            {members.map((el) => {
                    return (
                    <div className="our__team-all-members-card" key={el.id}>
                            <img src={el.rounded} alt=""></img>
                            <h3>{el.header}</h3>
                            <p>{el.text}</p>
                        <div className="our__team-all-social-NW">
                            <div>{el.fb}</div>
                            <div>{el.tw}</div>
                            <div>{el.cs}</div>
                            <div>{el.db}</div>
                        </div>
                    </div>
                    )
                })
            }
        </Fragment>
        )
    }
}
   
export default OurTeamMember