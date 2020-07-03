import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import rectangle1 from '../../img/blog/rectangle1.png'
import rectangle2 from '../../img/blog/rectangle2.png'
import rectangle3 from '../../img/blog/rectangle3.png'

class Blog extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        }
    }

    render() {
        return (
            <div className="blog">
            <div className="blog__wrapper">
                <div className="blog__title">
                    <h3>Blog</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br></br> 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    </p>
                </div>
                <div className="blog__main">
                    <div className="blog__main-news">
                        <img src={rectangle1} alt=""></img>
                        <div className="blog__main-seo">
                            <a className="seo-vestibulum" href="/">SEO Quis Vestibulum</a>
                            <div className="seo-cal-and-date">
                                <span><FontAwesomeIcon icon={faCalendarAlt} style={{ fontSize: "22", cursor: "pointer", marginRight: "8"}} />{ this.state.date.getDate() + "." + this.state.date.getMonth() + "." + this.state.date.getFullYear() }</span>
                                <span><FontAwesomeIcon icon={faFile} style={{ fontSize: "22", cursor: "pointer", marginRight: "8"}} /> Development</span>
                            </div>
                            <p>Dolore magna aliqua. Ut enim ad minim veniam, quis nos-<br></br>
                                trud exercitation ullamco laboris nisi ut aliquip ex ea com-<br></br>
                                modo consequat...
                            </p>
                        </div>
                    </div>
                    <div className="blog__main-news blog__main-news-right">
                        <img src={rectangle2} alt=""></img>
                        <div className="blog__main-seo">
                            <a className="seo-vestibulum" href="/">SEO Quis Vestibulum</a>
                            <div className="seo-cal-and-date">
                                <span><FontAwesomeIcon icon={faCalendarAlt} style={{ fontSize: "22", cursor: "pointer", marginRight: "8"}} /> 14.0702017</span>
                                <span><FontAwesomeIcon icon={faFile} style={{ fontSize: "22", cursor: "pointer", marginRight: "8"}} /> Development</span>
                            </div>
                            <p>Dolore magna aliqua. Ut enim ad minim veniam, quis nos-<br></br>
                                trud exercitation ullamco laboris nisi ut aliquip ex ea com-<br></br>
                                modo consequat...
                            </p>
                        </div>
                    </div>
                    <div className="blog__main-news">
                        <img src={rectangle3} alt=""></img>
                        <div className="blog__main-seo">
                            <a className="seo-vestibulum" href="/">SEO Quis Vestibulum</a>
                            <div className="seo-cal-and-date">
                                <span><FontAwesomeIcon icon={faCalendarAlt} style={{ fontSize: "22", cursor: "pointer", marginRight: "8"}} /> 14.0702017</span>
                                <span><FontAwesomeIcon icon={faFile} style={{ fontSize: "22", cursor: "pointer", marginRight: "8"}} /> Development</span>
                            </div>
                            <p>Dolore magna aliqua. Ut enim ad minim veniam, quis nos-<br></br>
                                trud exercitation ullamco laboris nisi ut aliquip ex ea com-<br></br>
                                modo consequat...
                            </p>
                        </div>
                    </div>
                </div>
                <a className="blog__btn latest__works-allbtn" href="/">MORE VIEW</a>
            </div>
        </div>
        )
    }
}

export default Blog