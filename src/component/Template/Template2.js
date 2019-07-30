import React, { Component } from 'react';
import './Template2.scss';//use context API

class Template2 extends Component {


    quali() {
        if(this.props.highestDegree === 'Doctorate') {
            this.setState({docisHidden:false});
            this.setState({pgisHidden:false});
            this.setState({ugisHidden:false});
        } else if(this.props.highestDegree === 'Post Graduation / Masters Degree or Equivilant') {
            this.setState({docisHidden:true});
            this.setState({pgisHidden:false});
            this.setState({ugisHidden:false});
        } else if(this.props.highestDegree === 'Graduation / Bachelors Degree or Equivilant') {
            this.setState({docisHidden:true});
            this.setState({pgisHidden:true});
            this.setState({ugisHidden:false});
        }
        this.setState();
    }

    // imme() {
    //     if(this.props.workingDate === "Immediately") {
    //         this.setState({joiningDateisHidden:true});
    //         console.log("Immediately");
    //     } else if(this.props.workingDate === "From") {
    //         this.setState({joiningDateisHidden:false});
    //         console.log("From");
    //     }
    //     this.setState();
    // }

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
            <div id="template" className="maroon margin_top">

                <div id="HTMLtoPDF" className="preview  cv-preview up-margin">
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
                                <li>
                                    <div>
                                    {!this.props.docisHidden && <div >
                                    <span className="key keys">Doctorate</span>
                                    <span>{this.props.docBranch}, from {this.props.docCollege} in {this.props.docSpecilization}</span>
                                    <span>Passing Year: {this.props.docPassingMonth} {this.props.docPassingYear} ({this.props.docDegreeType})</span>
                                    <span>Marks : {this.props.docMarks} ({this.props.docGradingScheme})</span>
                                    <span>Achievement: {this.props.docAchievement}</span>
                                    </div>}
                                    </div>
                                </li>
                                <li>
                                    <div>
                                    {!this.props.pgisHidden && <div>
                                    <span className='key keys'>Post Graduation / Masters Degree or Equivilant</span>
                                    <span>{this.props.pgBranch}, from {this.props.pgCollege} in {this.props.pgSpecilization}</span>
                                    <span>Passing Year: {this.props.pgPassingMonth} {this.props.pgPassingYear} ({this.props.pgDegreeType})</span>
                                    <span>Marks : {this.props.pgMarks} ({this.props.pgGradingScheme})</span>
                                    <span>Achievement: {this.props.pgAchievement}</span>
                                    </div>}
                                    </div>
                                </li>
                                <li>
                                    <div>
                                    {!this.props.ugisHidden && <div>
                                    <span className='key keys'>Graduation / Bachelors Degree or Equivilant</span>
                                    <span>{this.props.ugBranch}, from {this.props.ugCollege} in {this.props.ugSpecilization}</span>
                                    <span>Passing Year: {this.props.ugPassingMonth} {this.props.ugPassingYear} ({this.props.ugDegreeType})</span>
                                    <span>Marks : {this.props.ugMarks} ({this.props.ugGradingScheme})</span>
                                    <span>Achievement: {this.props.ugAchievement}</span>
                                    </div>}
                                    </div>
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
                                <li>
                                    <span className="key">Certificate and Courses</span>
                                    <span>{this.props.certificateCourse},</span>
                                    <span>Duration: {this.props.courseTimeYear} year(s) and {this.props.courseTimeMonth} month(s)</span>
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
                                    <span id="currentLocation">{this.props.currentCity}, {this.props.currentState}</span>
                                </li>
                                <li>
                                    <span className="key">HomeTown</span>
                                    <span id="homeLocation">{this.props.homeCity}, {this.props.homeState}</span>
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
                                    {/* {this.props.joiningDateisHidden && <span id="startWorking">{this.props.workingDate}</span>} */}
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

export default Template2;