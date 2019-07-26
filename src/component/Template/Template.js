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
                        <h1 id="name">{this.props.name}</h1>
                        <ul>
                            <li>
                                <span className="call">E</span>
                                <span id="mobile">+91 {this.props.mobile}</span>
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
                                    {/* <span id="doctorate"></span>
                                    <span id="pg"></span> */}
                                    <span id="ug">{this.props.highestDegree}</span>
                                    <span>{this.props.ugBranch}, from {this.props.ugCollege} in {this.props.ugSpecilization}</span>
                                    <span>Passing Year: {this.props.ugPassingYear} ({this.props.ugDegreeType})</span>
                                    <span>Marks : {this.props.ugMarks} ({this.props.ugGradingScheme})</span>
                                    <span>Achievement: {this.props.ugAchievement}</span>
                                   
                                </li>
                                <li>
                                    <span className="key">Class XII</span>
                                    <span id="class12"></span>
                                    <span>{this.props.board12}/{this.props.medium12} with {this.props.marks12}% in the year {this.props.year12}</span>
                                    <span>Maths Marks: {this.props.mathsMarks12} EnglishMarks: {this.props.englishMarks12}</span>
                                </li>
                                <li>
                                    <span className="key">Class X</span>
                                    <span id="class12"></span>
                                    <span>{this.props.board10}/{this.props.medium10} with {this.props.marks10}% in the year {this.props.year10}</span>
                                    <span>Maths Marks: {this.props.mathsMarks10} EnglishMarks: {this.props.englishMarks10}</span>
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
                                    <span className="key">Date of birth:</span>
                                    <span id="dob">{this.props.dob}</span>
                                </li>
                                <li>
                                    <span className="key">Gender</span>
                                    <span id="gender">{this.props.gender}</span>
                                </li>
                                <li>
                                    <span className="key">Looking for a </span>
                                    <span id="workPreference">{this.props.workingType}</span>
                                </li>
                                <li>
                                    <span className="key">Can start working </span>
                                    <span id="startWorking">{this.props.workingDate} {this.props.workingMonth} {this.props.workingYear}</span>
                                </li>
                                <li>
                                    <span className="key">Preferred location </span>
                                    <span id="preferedLocation">{this.props.workingLocation}</span>
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