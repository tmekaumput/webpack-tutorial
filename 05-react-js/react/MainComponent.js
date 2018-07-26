import React, { Component } from 'react';
import UsersComponent from './UsersComponents';

export default class MainComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(<UsersComponent/>);
        return (
            <div>
                <h1>Users</h1>
                <UsersComponent/>
            </div>
        );
    }
}