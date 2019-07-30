import React, { Component } from 'react';
import './CertificateCourses.scss';

class CertificateCourses extends Component {

    createMonthDD(){
        let obj = {
            month: []
        };

        for(let i = 0 ; i <= 11 ; i++ ) {
            obj.month[i] = i;
        }

        let optionItemsMonth = obj.month.map((item) =>
        <option key={item}>{item}</option>
        );

        return(optionItemsMonth)              
    }

    createYearDD(){
        let obj = {
            year: []
        };

        for(let i = 0 ; i <= 20 ; i++ ) {
            obj.year[i] = i;
        }

        let optionItemsYear = obj.year.map((item) =>
        <option key={item}>{item}</option>
        );

        return(optionItemsYear)              
    }


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
                                {this.createYearDD()}
                                {/* <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option> */}
                                {/*--TODO: 0 to 20 using js--*/}
                            </select>
                        </div>
                        <div className='in-line'>
                            <select id='course-time-month' className="course_time_month" onChange={this.props.onValueChanged} value={this.props.courseTimeMonth} >
                                <option value="" >Month</option>
                                {this.createMonthDD()}
                                {/* <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option> */}
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