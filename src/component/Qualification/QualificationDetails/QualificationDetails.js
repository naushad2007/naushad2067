import React, { Component } from 'react';
import './QualificationDetails.css';

class Qualification extends Component {

    state = {
        degreeType: '',
        college: '',
        branch: '',
        specilization: '',
        passingMonth: '',
        passingYear: '',
        marks: '',
        achievement: '',
        markingScheme: ''
    }

    fullTimeDegreeHandler(event) {
        console.log(event.target.value);
        this.setState({degreeType:"Full Time"})
    }

    partTimeDegreeHandler(event) {
        console.log(event.target.value);
        this.setState({degreeType:"Part Time"})
    }

    correspondanceDegreeHandler(event) {
        console.log(event.target.value);
        this.setState({degreeType:"Correspondance"})
    }

    collegeHandler(event) {
        console.log(event.target.value);
        this.setState({college:event.target.value})
    }

    branchHandler(event) {
        console.log(event.target.value);
        this.setState({branch:event.target.value})
    }
    specilizationHandler(event) {
        console.log(event.target.value);
        this.setState({specilization:event.target.value})
    }
    passingMonthHandler(event) {
        console.log(event.target.value);
        this.setState({passingMonth:event.target.value})
    }
    passingYearHandler(event) {
        console.log(event.target.value);
        this.setState({passingYear:event.target.value})
    }

    markingSchemeHandler(event) {
        console.log(event.target.value);
        this.setState({markingScheme:event.target.value})
    }

    marksHandler(event) {
        console.log(event.target.value);
        this.setState({marks:event.target.value})
    }

    achievementsHandler(event) {
        console.log(event.target.value);
        this.setState({achievement:event.target.value})
    }

    render() {
        return (
            <div className="border-box">
                <div>
                    <p>Degree:</p>
                    <div>
                        <form>
                            <label>
                            <input type="radio" id="docFullTime" value="Full Time" onChange={(event)=>{this.fullTimeDegreeHandler(event)}}/>Full Time
                            </label>
                            <label>
                            <input type="radio" id="docPartTime" value="Part Time" onChange={(event)=>{this.partTimeDegreeHandler(event)}}/>Part Time
                            </label>
                            <label>
                            <input type="radio" id="docCorrespondence" value="Correspondence" onChange={(event)=>{this.correspondanceDegreeHandler(event)}}/>Correspondence
                            </label>
                        </form>
                    </div>
                </div>

                <div>
                    <label>College/Institute, City:</label>
                    <input id="docCollege" className="college_doc" type="text" onChange={(event)=>{this.collegeHandler(event)}} /><br/>                         
                    <p className='p-instruction'>Start typing few words of institute name to select from the suggestions.</p>
                </div>

                <div>
                    <label>Courses:</label>
                    <select id='docType' className="doc_type" onChange={(event)=>{this.branchHandler(event)}}>  
                        <option value="" >Select Course</option>
                        <option value="Ph.D/Doctorate">Ph.D/Doctorate</option>
                        <option value="MPHIL">MPHIL</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label>Specilization:</label>
                    <select id='docSpecilization' className='specilization-doctorate' onChange={(event)=>{this.specilizationHandler(event)}}>
                        <option value='' name=''>Select</option>
                        <option value='Medicine' name=''>Medicine</option>
                        <option value='Machanical' name=''>Machanical</option>
                        <option value='Information Technology' name=''>Information Technology</option>
                        {/*TODO: Add specilaziation from js*/}
                    </select>
                </div>

                <div>
                    <label>Year of Passing:</label><nobr/>
                    <div className="in-line">
                        <select id="docTimeYear" onChange={(event)=>{this.passingMonthHandler(event)}}>
                            <option value="" >Month</option>
                            <option value="Jan">Jan</option>
                            <option value="Feb">Feb</option>
                            <option value="Mar">Mar</option>
                            <option value="Apr">Apr</option>
                            <option value="May">May</option>
                            <option value="Jun">Jun</option>
                            <option value="Jul">Jul</option>
                            <option value="Aug">Aug</option>
                            <option value="Sep">Sep</option>
                            <option value="Oct">Oct</option>
                            <option value="Nov">Nov</option>
                            <option value="Dec">Dec</option>
                        </select>

                        <select id="docTimeMonth" onChange={(event)=>{this.passingYearHandler(event)}}>
                            <option value="" >Year</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                        </select>
                    </div>
                    <p className='p-instruction'>If pursuing enter expected date of graduation. </p>
                </div>

                <div>
                    <label>Grading System:</label>
                    <select id="docGradeScheme" className="grading_scheme_doc" onChange={(event)=>{this.markingSchemeHandler(event)}} >
                        <option value="" >Select</option>
                        <option value="Scale 10 Grading System">Scale 10 Grading System</option>
                        <option value="Scale 4 Grading System">Scale 4 Grading System</option>
                        <option value="%Marks of 100 Maximum">%Marks of 100 Maximum</option>
                        <option value="Course Requires a Pass">Course Requires a Pass</option>
                    </select>
                </div>

                <div>
                    <label>Marks/Grade:</label>
                    <input  id="docMarks" type='number' className='doctorate-marks' step='0.0001' onChange={(event)=>{this.marksHandler(event)}}/>
                </div>

                <div>
                    <label>Academic Achievements:</label>
                    <select id="ach_doc" className="achievement_doc" onChange={(event)=>{this.achievementsHandler(event)}}>
                        <option value="" >Select</option>
                        <option value="College Topper">College Topper</option>
                        <option value="Department Topper">Department Topper</option>
                        <option value="School Topper">School Topper</option>
                        <option value="Top 3 in Class">Top 3 in Class</option>
                        <option value="Top 10 in Class">Top 10 in Class</option>
                        <option value="Gold Medalist">Gold Medalist</option>
                        <option value="Recieved Scholarship">Recieved Scholarship</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
        );
    }
}
export default Qualification;