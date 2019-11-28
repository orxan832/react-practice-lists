import React, { Component } from 'react'

class ValidationComponent extends Component {

    render() {
        let number = this.props.number;
        return (
            <div>
                <h3>{this.props.number}</h3>
                <h1>{this.props.message}</h1>
            </div>
        )
    }
}

export default ValidationComponent;

