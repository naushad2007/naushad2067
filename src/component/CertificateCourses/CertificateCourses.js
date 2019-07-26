import React, { Component } from 'react';
import './CertificateCourses.css';

class CertificateCourses extends Component {

    render() {
        return (
            <div className='certi border-box'>
                <div>
                    <label>Certificate and Courses:</label>
                    <select id="certi_course" className="certi_course" onChange={this.props.onValueChanged} value={this.props.certificateCourse}>
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
                            <select id="course-time-year" className="course_time_year" onChange={this.props.onValueChanged} value={this.props.courseTimeYear} >
                                <option value="" >Years</option> 
                                {/*--TODO: 0 to 20 using js--*/}
                            </select>
                        </div>
                        <div className='in-line'>
                            <select id='course-time-month' className="course_time_month" onChange={this.props.onValueChanged} value={this.props.courseTimeMonth} >
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