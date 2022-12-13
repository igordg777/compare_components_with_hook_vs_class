import React, { Component } from 'react';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => this.setState({ users: res }))
    }

    render() {
        return (
            <div >
                <p>Привет2</p>
                Что то из сундука2
                {this.state.users.map(
                    (item) => {
                        return <p>{item.name}, {item.phone}, {item.email}, {item.website}</p>
                    }
                )}
            </div>
        );
    }
}

export default Users;
