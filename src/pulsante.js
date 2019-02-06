import React, { Component } from 'react';

class pulsante extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <button onClick={() => this.props.onClick()}>Replay</button>
        );
    }
}

export default pulsante;