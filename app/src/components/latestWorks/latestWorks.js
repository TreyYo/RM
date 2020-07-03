import React from 'react'
import portfolio1 from '../../img/latestWorks/portfolio1.png'
import portfolio2 from '../../img/latestWorks/portfolio2.png'
import portfolio3 from '../../img/latestWorks/portfolio3.png'
import portfolio4 from '../../img/latestWorks/portfolio4.png'
import portfolio5 from '../../img/latestWorks/portfolio5.png'
import portfolio6 from '../../img/latestWorks/portfolio6.png'

class LatestWorks extends React.Component {
    constructor(props) {
        super(props);
        this.toggPictures = this.toggPictures.bind(this);
    }

    toggPictures(event) {
        let targetbtn = event.target.textContent;
        switch (targetbtn) {
            case 'WEB DESIGN':
                let allpictures = document.querySelectorAll(".portfolio__btn");
                allpictures.forEach(el => { el.style.visibility='hidden'; })
                let pictures = document.querySelectorAll("div[filter='wd']");
                pictures.forEach(el => { el.style.visibility='visible'; })
                break;
            case 'UI/UX DESIGN':
                let allpictur = document.querySelectorAll(".portfolio__btn");
                allpictur.forEach(el => { el.style.visibility='hidden'; })
                let pictur = document.querySelectorAll("div[filter='ud']");
                pictur.forEach(el => { el.style.visibility='visible'; })
                break;
            case 'MOCKUPS': 
                let allpic = document.querySelectorAll(".portfolio__btn");
                allpic.forEach(el => { el.style.visibility='hidden'; })
                let pic = document.querySelectorAll("div[filter='ms']");
                pic.forEach(el => { el.style.visibility='visible'; })
                break;
            case 'ALL':
                let allpics = document.querySelectorAll(".portfolio__btn");
                allpics.forEach(el => { el.style.visibility='visible'; })
                break;
            default:
                break;
        }
    } 

    render() {
        return (
            <div className="latest__works">
                <div className="latest__works-wrapper">
                    <div className="latest__works-title">
                        <h3>Latest Works</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br></br> 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        </p>
                    </div>
                    <div className="latest__works-view">
                        <div className="latest__works-view-btns">
                            <LatestWorksViewBtn filter="all" nameBtn="ALL" click={this.toggPictures} />
                            <LatestWorksViewBtn filter="wd" nameBtn="WEB DESIGN" click={this.toggPictures} />
                            <LatestWorksViewBtn filter="ud" nameBtn="UI/UX DESIGN" click={this.toggPictures} />
                            <LatestWorksViewBtn filter="ms" nameBtn="MOCKUPS" click={this.toggPictures} />
                        </div>
                    </div>
                    <div className="latest__works-view-puctures">
                        <WorksViewPuctures filter="wd" portfolio={portfolio1} />
                        <WorksViewPuctures filter="ms" portfolio={portfolio2} />
                        <WorksViewPuctures filter="wd" portfolio={portfolio3} />
                        <WorksViewPuctures filter="ms" portfolio={portfolio4} />
                        <WorksViewPuctures filter="ud" portfolio={portfolio5} />
                        <WorksViewPuctures filter="ud" portfolio={portfolio6} />
                    </div>
                    <LatestWorksViewAllBtn nameBtn="VIEW ALL" />
                </div>
            </div>
        )
    }
}

function LatestWorksViewBtn(props) {
    return ( 
        <button filter={props.filter} className="works__view-button" onClick={props.click}>{props.nameBtn}</button>
    )
}

function WorksViewPuctures(props) {
    return (
        <div filter={props.filter} className="portfolio__btn">
            <img src={props.portfolio} alt=""></img>
            <div className="portfolio__text">
                <h3>Hand Watch</h3>
                <p>ui/ux design</p>
            </div>
        </div>
    )
}

function LatestWorksViewAllBtn(props) {
    return(
        <button className="latest__works-allbtn works__view-button">{props.nameBtn}</button>
    )
}

export default LatestWorks