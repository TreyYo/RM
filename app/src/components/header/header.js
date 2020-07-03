import React, { Fragment } from 'react'
import HeaderLogo from './headerLogo'
import HeaderNav from './headerNav'
import HeaderSearch from './headerSearch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


class Header extends React.Component {
    constructor() {
        super();

        this.burger = this.burger.bind(this);
    }

    burger(event) {
        let target = event.target;
        if(target) {
            document.getElementById("header__nav").classList.toggle('header__nav-active');
        } else { return; }
    }

    render() {
        return (
            <Fragment>
                <header className="header">
                    <div className="header__wrapper container">
                        <HeaderLogo />
                        <div className="nav__wrapper">
                            <HeaderNav />
                            <span id="header__burger" className="header__burger" onClick={this.burger}> <FontAwesomeIcon icon={ faBars } style={{fontSize: 40, color: "rgb(15, 228, 239)"}}/></span>
                            <HeaderSearch />
                        </div>
                    </div>
                </header>
            </Fragment>
        );
    }
}

export default Header