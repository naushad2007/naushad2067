import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {

    render() {
        return (
            <div>
                <br/>
                    <button className='button-shadow button' >Submit</button>
                <br/>
            </div> 
        );
    }
}
export default Button;