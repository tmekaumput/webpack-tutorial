import React, { Component } from 'react';
import api from 'Api/users';
require('./style');

export default class FxRatesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fixerResponse: []
        };
    }

    componentDidMount() {
        api.getRates(this.props.baseCurrency, fixerResponse => {
            this.setState({
                fixerResponse
            });
        });
    }

    render() {
            let dailyRates = [];
            const { fixerResponse: { rates }} = this.state;
            const { fixerResponse: { date }} = this.state;

            const { baseCurrency } = this.props;

            console.log(date);
            console.log(this.state);

            for(const currency in rates) {
                console.log(currency + '-' + rates[currency]);
                const rate = rates[currency];
                dailyRates.push(
                <li className = 'list-group-item' key = { currency }>
                 { currency } - <i className="fa fa-usd fa-2x" aria-hidden="true">{ rate }</i>
                </li>);
            }

            return (
                <div id="fxContainer">
                    <h2> Base { baseCurrency } Date <i className="fa fa-calendar fa-lg" aria-hidden="true"> { date }</i></h2>
                    <ul className='list-group'>
                    { dailyRates }
                    </ul>
                </div>
            );
    }
}