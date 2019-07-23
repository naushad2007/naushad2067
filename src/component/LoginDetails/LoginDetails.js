import React, { Component } from 'react';

class LoginDetails extends Component {

    render() {
        return (
            <div>
                <h4>Login Details</h4>
                <hr className="hr-solid"></hr>
                <div>
                    <label for='email-id'>Your Email:</label>
                    <input id='email' className='email-id' type='email'/>
                </div>
                <div>
                    <label>Password:</label>
                    <input id="passwd" className="passwd" type="password"></input>
                    <br/>
                    <label>Confirm Password:</label>
                    <input id="cpasswd" className="cpasswd" type="password"></input>
                </div>
            </div>
        );
    }
}
export default LoginDetails;
