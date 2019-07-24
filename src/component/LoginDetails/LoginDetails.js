import React, { Component } from 'react';
import './LoginDetails.css';

class LoginDetails extends Component {

    state = {
        password: ''
    }

    passwordHandler(event) {
        console.log(event.target.value);
        this.setState({password:event.target.value})
    }
    cpasswordHandler(event) {
        console.log(event.target.value);
        this.setState({cpassword:event.target.value})
    }

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
                    <input id="passwd" className="passwd" type="password" onChange={(event)=>{this.passwordHandler(event)}}/>
                    <br/>
                    <label>Confirm Password:</label>
                    <input id="cpasswd" className="cpasswd" type="password" onChange={(event)=>{this.cpasswordHandler(event)}} />
                </div>
            </div>
        );
    }
}
export default LoginDetails;
