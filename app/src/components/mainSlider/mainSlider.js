import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft, faAngleDown} from '@fortawesome/free-solid-svg-icons'
import logoSlider from '../../img/mainSlider/logoSlider.jpg'
import logoSliderM from '../../img/mainSlider/logoSliderM.png'
import logoSliderT from '../../img/mainSlider/logoSliderT.png'

class MainSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [logoSlider, logoSliderM, logoSliderT],
            currImgIndex: 0,
            text:[<SliderText />, <SliderTextM />, <SliderTextT />]
        }
        this.moveImg = this.moveImg.bind(this);
    }

    moveImg(event) {
        event.preventDefault();
        let newIndex = this.state.currImgIndex
        if (event.currentTarget.dataset.direction === 'next') {
            this.setState({currImgIndex: ++newIndex});
            if(newIndex > this.state.images.length -1) {
                this.setState({currImgIndex: 0});
            }
        } else {
            this.setState({currImgIndex: --newIndex});
            if(newIndex < 0) {
                this.setState({currImgIndex: this.state.images.length -1});
            }
        }
    }

    render() {
        return (
            <div className="slider">
                <div className="slideshow-container">
                    <div className="mySlides fade">
                        <img src={this.state.images[this.state.currImgIndex]} alt="" style={{width: '100%', maxHeight: '655px'}}></img>
                        {this.state.text[this.state.currImgIndex]}
                    </div>
                    <a href="/" className="slider-buttom-prev" data-direction="prev" onClick={this.moveImg} ><FontAwesomeIcon icon={ faAngleLeft } /></a>
                    <a href="/" className="slider-buttom-next" data-direction="next" onClick={this.moveImg}><FontAwesomeIcon icon={ faAngleRight } /></a>
                </div>
                
            </div>
        )
    }
}

function SliderText() {
    return (
        <div className="slider__text-wrapper">
            <div className="slider__text-title">
                <h2>Web development project</h2>
                <p>Very suitable to support all web development projects</p>
            </div>
            <div className="slider__btn-wrapper">
                <a className="btn" href="/">OUR SERVICES</a>
                <a className="btn btn_slider-hireIsNow" href="/">HIRE IS NOW</a>
            </div>
            <FontAwesomeIcon icon={ faAngleDown } style={{fontSize: "25", display: "block", margin: "auto", marginTop: "100", color: '#00897b'}} />
        </div>
    )
}

function SliderTextM() {
    return (
        <div className="slider__text-wrapper">
            <div className="slider__text-title">
                <h2>Web development project</h2>
                <p>Very suitable to support all web development projects</p>
            </div>
            <div className="slider__btn-wrapper">
                <a className="btn" href="/">OUR SERVICES</a>
                <a className="btn btn_slider-hireIsNow" href="/">HIRE IS NOW</a>
            </div>
            <FontAwesomeIcon icon={ faAngleDown } style={{fontSize: "25", display: "block", margin: "auto", marginTop: "100"}} />
        </div>
    )
}

function SliderTextT() {
    return (
        <div className="slider__text-wrapper">
            <div className="slider__text-title">
                <h2>Web development project</h2>
                <p>Very suitable to support all web development projects</p>
            </div>
            <div className="slider__btn-wrapper">
                <a className="btn" href="/">OUR SERVICES</a>
                <a className="btn btn_slider-hireIsNow" href="/">HIRE IS NOW</a>
            </div>
            <FontAwesomeIcon icon={ faAngleDown } style={{fontSize: "25", display: "block", margin: "auto", marginTop: "100"}} />
        </div>
    )
}

export default MainSlider