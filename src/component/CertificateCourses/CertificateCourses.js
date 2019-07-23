import React, { Component } from 'react';

class CertificateCourses extends Component {

    render() {
        return (
            <div className='solid-border'>
                <div>
                    <label>Certificate and Courses:</label>
                    <select id="certi_course" onchange="certificateandCoursesChange()">
                        <option value="" selected>Select</option>
                        <option value="ML">ML</option>
                        <option value="Blockchain">Blockchain</option>
                        <option value="Big Data">Big Data</option>
                        <option value="React">React</option>
                        //--4.TODO Courses from arrey in js--
                    </select>
                </div>
                <div className='in-line'>
                    <label for="">Duration:</label>
                    <div className='course-duration in-line'>
                        <div className='in-line'>
                            <select id="course-time-year" onchange="durationofCourseChange()">
                                <option value="" selected>Years</option> 
                                //--TODO: 0 to 20 using js--
                            </select>
                        </div>
                        <div className='in-line'>
                            <select id='course-time-month' onchange="durationofCourseChange()">
                                <option value=""  selected>Months</option>
                                //--6.TODO range 0 to 11--
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CertificateCourses;