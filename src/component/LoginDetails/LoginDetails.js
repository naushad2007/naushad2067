import React, { Component } from 'react';
import './LoginDetails.css';

class LoginDetails extends Component {
    render() {


        // switch(this.props.email[1]){
        //     case Error:

        // }

        return (
            <div className="login-details border-box">
                <h4>Login Details</h4>
                <hr className="hr-solid"></hr>
                <div>
                    <label>Your Email:</label>
                    <input id='email' value={this.props.email} className='email-id email' type='email' 
                        name="email" onChange={this.props.onValueChanged}/>
                </div>
                <div>
                    <label>Password:</label>  
                    <input id="passwd" className="passwd" value={this.props.password} type="password" 
                        onChange={this.props.onValueChanged}/>
                    <br/>
                    <label>Confirm Password:</label>
                    <input id="cpasswd" className="cpasswd" value={this.props.cpassword} 
                        type="password" onChange={this.props.onValueChanged} />
                </div>
            </div>
        );
    }
}
export default LoginDetails;
