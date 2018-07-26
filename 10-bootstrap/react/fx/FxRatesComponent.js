import React, { Component } from 'react';
import api from '../../api.js';
require('./style.css');

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
                dailyRates.push(<li className = 'list-group-item' key = { currency }> { currency } - { rate } </li>);
            }

            return (
                <div id="fxContainer">
                    <h2> Base { baseCurrency } Date { date }</h2>
                    <ul className='list-group'>
                    { dailyRates }
                    </ul>
                </div>
            );
    }
}