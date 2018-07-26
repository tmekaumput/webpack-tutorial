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
            <div>
                <div>
                    <h1>Users</h1>
                    <UsersComponent/>
                </div>

                <div>
                    <h1>Rates</h1>
                    <FxRateComponent baseCurrency = 'USD'/>
                </div>
            </div>
        );
    }
}