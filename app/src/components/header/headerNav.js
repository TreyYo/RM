import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";


const Home = () => (
   <div>
       
   </div>
)

const About = () => (
    <div>
        
    </div>
)

const Servicing = () => (
    <div>
        
    </div>
)

const Portfolio = () => (
    <div>
        
    </div>
)

const Blog= () => (
    <div>
        
    </div>
)

const ContatactUs = () => (
    <div>
        
    </div>
)



class HeaderNav extends React.Component {
    render() {
        const menus = [{id: 1, title: "Home"},
                     {id: 2, title: "About"},
                     {id: 3, title: "Servicing"},
                     {id: 4, title: "Portfolio"},
                     {id: 5, title: "Blog"},
                     {id: 6, title: "Contatact us"}
                    ]
        
        return (
            <BrowserRouter>
                <nav id="header__nav" className="header__nav">
                    <ul>
                        {menus.map((el)=>{
                            return <li key={el.id}><Navigation text={el.title}/></li>
                        })}
                    </ul>
                </nav>
                
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/servicing" component={Servicing}></Route>
                <Route exact path="/portfolio" component={Portfolio}></Route>
                <Route exact path="/blog" component={Blog}></Route>
                <Route exact path="/contatact-us" component={ContatactUs}></Route>
            </BrowserRouter>
        )
    }
}

class Navigation extends React.Component {
    render() {
        const url = "/" + this.props.text.toLowerCase().trim().replace(" ","-");

        return ( <Link to={url}>{this.props.text}</Link>
        )
    }
}

export default HeaderNav