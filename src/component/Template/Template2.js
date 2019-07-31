import React, { Component } from 'react';
import './Template2.scss';//use context API
//import DownloadButton from '../DownloadButton/DownloadButton';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
  

class Template2 extends Component {

    constructor(props){
        super(props);
        //this.content = React.createRef();
        //console.log(jsPDF);
        //this.printResume=this.printResume.bind(this);
    }

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

    // printResume() {
    //     const input = document.querySelector("#content");
    //     html2canvas(input).then((canvas) => {
    //     const imgData = canvas.toDataURL('image/png');
    //     const pdf = new jsPDF();
    //     pdf.addImage(imgData, 'JPEG', 0, 0);
    //     // pdf.output('dataurlnewwindow');
    //     pdf.save("download.pdf");
    //   })
    // ;
    // }

    // printResume() {
    //     const input = document.querySelector("#content");
    //     html2canvas(input)
    //     .then((canvas) => {
    //       const imgData = canvas.toDataURL('image/png');
          
    //       const pdf = new jsPDF();
          
    //       pdf.addImage(imgData, 'PNG', 0, 0);
    //       pdf.save("resume.pdf");
    //     });
    //   ;
    // }

    

//     printResume() {
//         html2canvas(document.querySelector("#content")).then(function(canvas) {
//             document.body.appendChild(canvas);

//         html2canvas(document.querySelector("#content")).then((canvas) => {
//             const imgData = canvas.toDataURL('image/png');

//         const input = document.getElementById('divIdToPrint');
// ;
//         const pdf = new jsPDF();
//         pdf.addImage(imgData, 'PNG', 0, 0);
//         pdf.save("download.pdf");  
//         });
//     }

    // printResume() {
    //     html2canvas(document.querySelector("#content")).then(function(canvas) {
    //         document.body.appendChild(canvas);
    //     });
    //     html2canvas(input).then((canvas) => {
    //     const imgData = canvas.toDataURL('image/png');
    //     const pdf = new jsPDF();
    //     pdf.addImage(imgData, 'PNG', 0, 0);
    //     pdf.save("download.pdf");  
    //     });
    // }

    // printResume() {
    //     let title="Resume";
    //     var divContents = this.content.current.innerHTML;
    //     var printWindow = window.open('', '', 'height=500,width=700');
    //     printWindow.document.write(`<html><head><title>${title}</title>`);
    //     printWindow.document.write('</head><body>');
    //     printWindow.document.write(divContents);
    //     printWindow.document.write('</body></html>');
    //     printWindow.document.close();
    //     printWindow.print();
    // }

    // printResume() {
    //     var content = document.getElementById("content");
    //     var pri = document.getElementById("ifmcontentstoprint").contentWindow;
    //     pri.document.open();
    //     pri.document.write(content.innerHTML);
    //     pri.document.close();
    //     pri.focus();
    //     pri.print();
    // }

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
                {/* <button onClick={() => window.print()}>PRINT</button> */}
                {/* <div ref={this.content} id="content" className="preview  cv-preview up-margin"> */}
                <div id="content" className="preview  cv-preview up-margin">
                    <header>
                        <h1 id="name">{this.props.name}</h1>
                        <ul>
                            <li>
                                <span className="call circle_white"></span>
                                <span id="mobile">+91 {this.props.mobile}</span>
                            </li>
                            <li>
                                <span className="post circle_white"></span>
                                <span id="email">{this.props.email}</span>
                            </li>
                        </ul>
                    </header>
                    <div className="container">
                        <section className="edu-details">
                            <h2>
                                <span className="edudetails circle_pink"></span>
                                Education
                            </h2>
                            <ul>
                                <li>
                                    <div>
                                    {!this.props.docisHidden && <div >
                                    <span className="key keys label_bold">Doctorate</span>
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
                                    <span className='key keys label_bold'>Post Graduation / Masters Degree or Equivilant</span>
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
                                    <span className='key keys label_bold'>Graduation / Bachelors Degree or Equivilant</span>
                                    <span>{this.props.ugBranch}, from {this.props.ugCollege} in {this.props.ugSpecilization}</span>
                                    <span>Passing Year: {this.props.ugPassingMonth} {this.props.ugPassingYear} ({this.props.ugDegreeType})</span>
                                    <span>Marks : {this.props.ugMarks} ({this.props.ugGradingScheme})</span>
                                    <span>Achievement: {this.props.ugAchievement}</span>
                                    </div>}
                                    </div>
                                </li>
                                <li>
                                    <span className="key label_bold">Class XII</span>
                                    <span id="class12"></span>
                                    <span>{this.props.board12}/{this.props.medium12} with {this.props.marks12}% in the year {this.props.year12}</span>
                                    <span>Maths Marks: {this.props.mathsMarks12} EnglishMarks: {this.props.englishMarks12}</span>
                                </li>
                                <li>
                                    <span className="key label_bold">Class X</span>
                                    <span id="class12"></span>
                                    <span>{this.props.board10}/{this.props.medium10} with {this.props.marks10}% in the year {this.props.year10}</span>
                                    <span>Maths Marks: {this.props.mathsMarks10} EnglishMarks: {this.props.englishMarks10}</span>
                                </li>
                                <li>
                                    <span className="key label_bold">Certificate and Courses</span>
                                    <span>{this.props.certificateCourse},</span>
                                    <span>Duration: {this.props.courseTimeYear} year(s) and {this.props.courseTimeMonth} month(s)</span>
                                </li>
                            </ul>
                        </section>
                        <section className="work-details"></section>
                        <section className="person-details">
                            <h2>
                                <span className="pdetails circle_pink"></span>
                                personal details
                            </h2>
                            <ul>
                                <li>
                                    <span className="key label_bold">Current Location</span>
                                    <span id="currentLocation">{this.props.currentCity}, {this.props.currentState}</span>
                                </li>
                                <li>
                                    <span className="key label_bold">HomeTown</span>
                                    <span id="homeLocation">{this.props.homeCity}, {this.props.homeState}</span>
                                </li>
                                <li>
                                    <span className="key label_bold">Date of birth:</span>
                                    <span id="dob">{this.props.dob}</span>
                                </li>
                                <li>
                                    <span className="key label_bold">Gender</span>
                                    <span id="gender">{this.props.gender}</span>
                                </li>
                                <li>
                                    <span className="key label_bold">Looking for a </span>
                                    <span id="workPreference">{this.props.workingType}</span>
                                </li>
                                <li>
                                    <span className="key label_bold">Can start working </span>
                                    {/* {this.props.joiningDateisHidden && <span id="startWorking">{this.props.workingDate}</span>} */}
                                    <span id="startWorking">{this.props.workingDate} {this.props.workingMonth} {this.props.workingYear}</span>
                                </li>
                                <li>
                                    <span className="key label_bold">Preferred location </span>
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