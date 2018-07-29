import React, { Component } from 'react';
import UsersComponent from './users/UsersComponents';
import FxRateComponent from './fx/FxRatesComponent';

export default class MainComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(<UsersComponent/>);
        return (
            <div className='container'>
                <div>
                    <h1><i className='fa fa-user fa-lg' aria-hidden='true'></i>Users</h1>
                    <UsersComponent/>
                </div>

                <div>
                    <h1><i className='fa fa-money fa-lg' aria-hidden='true'></i>Rates</h1>
                    <FxRateComponent baseCurrency = 'USD'/>
                </div>
            </div>
        );
    }
}