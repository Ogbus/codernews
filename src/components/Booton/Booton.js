import React, { Component } from 'react';

class Booton extends Component {
    render() {
        const { 
            onClick, 
            className = '', 
            children 
        } = this.props
        return (
            <button 
                onClick = {onClick} 
                className = {className} 
                type = 'button'
            > 
                {children} 
            </button>
        )
    }
}

export default Booton;