import React, { Component } from 'react';
import './CertificateCourses.css';

class CertificateCourses extends Component {

    state = {
        certificateCourse: '',
        courseTimeMonth: '',
        courseTimeYear: ''
    }

    certificateCourseHandler(event) {
        console.log(event.target.value);
        this.setState({certificateCourse:event.target.value})
    }

    courseTimeYearHandler(event) {
        console.log(event.target.value);
        this.setState({courseTimeYear:event.target.value})
    }

    courseTimeMonthHandler(event) {
        console.log(event.target.value);
        this.setState({courseTimeMonth:event.target.value})
    }

    render() {
        return (
            <div className='certi border-box'>
                <div>
                    <label>Certificate and Courses:</label>
                    <select id="certi_course" onChange={(event)=>{this.certificateCourseHandler(event)}}>
                        <option value="">Select</option>
                        <option value="ML">ML</option>
                        <option value="Blockchain">Blockchain</option>
                        <option value="Big Data">Big Data</option>
                        <option value="React">React</option>
                        {/*--4.TODO Courses from arrey in js--*/}
                    </select>
                </div>
                <div className='in-line'>
                    <label>Duration:</label>
                    <div className='course-duration in-line'>
                        <div className='in-line'>
                            <select id="course-time-year" onChange={(event)=>{this.courseTimeYearHandler(event)}}>
                                <option value="" >Years</option> 
                                {/*--TODO: 0 to 20 using js--*/}
                            </select>
                        </div>
                        <div className='in-line'>
                            <select id='course-time-month' onChange={(event)=>{this.courseTimeMonthHandler(event)}}>
                                <option value=""  >Months</option>
                                {/*--6.TODO range 0 to 11--*/}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CertificateCourses;