import React, { Component } from 'react';
export default class SquareComponent extends Component {
    render() {

        return <div> {<button className={`${this.props.winnerClass} square`} onClick={this.props.onClick}>
            {this.props.value}
        </button>}</div>

    }
}