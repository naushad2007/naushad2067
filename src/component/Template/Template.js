import React, { Component } from 'react';
import './Template.css';

class Template extends Component {
    render() {
        return (
            // <div>
            //     <div className="header">
            //         <h4 id="name" className="name"></h4><br></br>
            //         <img src="./../../mobile.jpg" alt="Mobile"></img>
            //         <h2 id="mobile"></h2>
            //         <img src="./../../email.png" alt="Email"></img>
            //         <h2 id="email"></h2>
            //     </div>

            //     <div className="body">

            //     </div>
            // </div>
            <div id="template">

                <div className="preview  cv-preview up-margin">
                    <header>
                        <h1 id="name"></h1>
                        <ul>
                            <li>
                                <span className="call">E</span>
                                <span id="mobile"></span>
                            </li>
                            <li>
                                <span className="post">B</span>
                                <span id="email">{this.props.email}</span>
                            </li>
                        </ul>
                    </header>
                    <div className="container">
                        <section className="edu-details">
                            <h2>
                                <span className="edudetails">A</span>
                                Education
                            </h2>
                            <ul>
                                <li className="edu-details">
                                    <span className="key">Graduation</span>
                                    <span id="doctorate"></span>
                                    <span id="pg"></span>
                                    <span id="ug"></span>
                                </li>
                                <li>
                                    <span className="key">Class XII</span>
                                    <span id="class12"></span>
                                </li>
                                <li>
                                    <span className="key">Class X</span>
                                    <span id="class10"></span>
                                </li>
                            </ul>
                        </section>
                        <section className="work-details"></section>
                        <section className="person-details">
                            <h2>
                                <span className="pdetails">D</span>
                                personal details
                            </h2>
                            <ul>
                                <li>
                                    <span className="key">Current Location</span>
                                    <span id="currentLocation"></span>
                                </li>
                                <li>
                                    <span className="key">HomeTown</span>
                                    <span id="homeLocation"></span>
                                </li>
                                <li>
                                    <span className="key">Date of birth</span>
                                    <span id="dob"></span>
                                </li>
                                <li>
                                    <span className="key">Gender</span>
                                    <span id="gender"></span>
                                </li>
                                <li>
                                    <span className="key">Looking for a </span>
                                    <span id="workPreference"></span>
                                </li>
                                <li>
                                    <span className="key">Can start working </span>
                                    <span id="startWorking"></span>
                                </li>
                                <li>
                                    <span className="key">Preferred location </span>
                                    <span id="preferedLocation"></span>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>

        );
    }
}

export default Template;