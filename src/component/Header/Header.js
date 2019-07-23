import React, { Component } from 'react';
import './Header.css';
import logo from "./logo.gif";
class Header extends Component {
    render() {
        return (
            <div>
                <div className="logo">
                    <img src={logo} alt="INF!"></img>
                </div>
                <div className="already-member">
                    <pre>Already a member? <a href='https://www.firstnaukri.com/freshersmnj/mynaukri.php/Home/view'>Click here</a> to login</pre>
                </div>
                <div className="yellow-box">
                    <p>Create professional resume in minutes and grab employers’ attention, Free Resume Maker!</p>
                </div>
            </div>
        );
    }
}
export default Header;



