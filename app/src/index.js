import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './normalize/normalize.css';
import './responsive/responsive.css';
import Header from './components/header/header'
import MainSlider from './components/mainSlider/mainSlider'
import AboutUs from './components/aboutUs/aboutUs'
import OurServices from '../src/components/ourServices/ourServices'
import LatestWorks from '../src/components/latestWorks/latestWorks'
import PricingPlan from '../src/components/pricingPlan/pricingPlan'
import MultipleItems from '../src/components/ourTeamMember/ourTeamMember'
import Blog from '../src/components/blog/blog'
import ContactUs from '../src/components/contactUs/contactUs'
import Footer from '../../app/src/components/footer/footer'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Fragment>
    <Header />
    <MainSlider />
    <AboutUs />
    <OurServices />
    <LatestWorks />
    <PricingPlan />
    <MultipleItems />
    <Blog />
    <ContactUs />
    <Footer />
  </Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
