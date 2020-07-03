import React, { Fragment } from 'react'

class PricingPlan extends React.Component {
    render() {
        const price = [
            {id: 1, price: '00', title: 'Free Trail', liA: '30 Free Trail', liB: '5 Free Projects', liC: 'PHP 5 Enabled', liD: '24/7 Suports', 
                createLi: [
                    {id: 'a', textA: '30 Free Trail'},
                    {id: 'b', textB: '5 Free Project'},
                    {id: 'c', textC: 'PHP 5 Enabled'},
                    {id: 'd', textD: '24/7 Suports'}
                ]},
            {id: 2, price: '50', title: 'Basic', liA: '30 Free Trail', liB: '5 Free Projects', liC: 'PHP 5 Enabled', liD: '24/7 Suports',
                createLi: [
                    {id: 'a', textA: '30 Free Trail'},
                    {id: 'b', textB: '5 Free Project'},
                    {id: 'c', textC: 'PHP 5 Enabled'},
                    {id: 'd', textD: '24/7 Suports'}
                ]},
            {id: 3, price: '99', title: 'Ultimates', liA: '30 Free Trail', liB: '5 Free Projects', liC: 'PHP 5 Enabled', liD: '24/7 Suports',
                createLi: [
                    {id: 'a', textA: '30 Free Trail'},
                    {id: 'b', textB: '5 Free Project'},
                    {id: 'c', textC: 'PHP 5 Enabled'},
                    {id: 'd', textD: '24/7 Suports'}
                ]
            }
        ]

        return (
            <div className="pricing__plan">
                <div className="pricing__plan-wrapper">
                    <div className="pricing__plan-title">
                        <h3>Pricing Plan</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br></br> 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        </p>
                    </div>
                    <div className="pricing__plan-order">
                        <PricingCardTitle price={price}/>
                    </div>
                </div>
            </div>
        ) 
    }  
}

function PricingCardTitle(props) {
    return (
        <Fragment>
            {props.price.map((el) =>{
                return (
                    <div className="pricing__plan-order-card" key={el.id}>
                        <div className="pricing__card-title">
                            <h4>{el.title}</h4>
                            <span><sup>$</sup><span>{el.price}</span><sub>per month</sub></span>
                        </div>
                        <div className="pricing__card-main">
                            <ul>
                                <li key="el.createLi[0].id">{el.createLi[0].textA}</li>
                                <li key="el.createLi[1].id">{el.createLi[1].textB}</li>
                                <li key="el.createLi[2].id">{el.createLi[2].textC}</li>
                                <li key="el.createLi[3].id">{el.createLi[3].textD}</li>
                            </ul>
                        </div>
                        <button className="pricing__card-btn">Order Now</button>
                    </div>
                )
            })}
        </Fragment>
    )
}

export default PricingPlan