import React, { Component } from 'react';
import api from 'Api/users';
require('./style.css');

export default class UsersComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        const users = api.getUsers();
        this.setState({
            users: users
        });
    }

    render() {
        const users = this.state.users.map((user, index) => {
            const { name, age } = user;
            console.log(user);
            return <p key = { index } > <span className='badge'>{ index }</span> - { name } is { age } </p>;
        });

        return (
            <div id="userContainer">
                { users }
            </div>
        );
    }
}

