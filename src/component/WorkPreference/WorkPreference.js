import React, { Component } from 'react';
import './WorkPreference.scss';
import displayWorkLocation from './../../Helper/DisplayWorkLocation';

class WorkPreference extends Component {

    render() {
        return (
            <div className='border-box'>
                <h4>Work Preference</h4>
                <hr className='hr-solid'/>
                <div>
                    <label className="slabel">Specify your preference for:</label><br/>
                    <form className="job_preference in-line">
                        <label className="rb-container">
                        <input type="radio" name="radio" id="wp_fulltime" className="wp_fulltime"  onChange={this.props.onValueChanged} value={this.props.workingType}/>FullTime
                        <span className="checkmark"></span>
                        </label>
                        <label className="rb-container">
                        <input type="radio" name="radio" id="wp_parttime" className="wp_parttime"  onChange={this.props.onValueChanged}  value={this.props.workingType}/>Part Time
                        <span className="checkmark"></span>
                        </label>
                        <label className="rb-container">
                        <input type="radio" name="radio" id="wp_internship" className="wp_internship"  onChange={this.props.onValueChanged} value={this.props.workingType} />Internship
                        <span className="checkmark"></span>
                        </label>
                    </form>
                </div>
                <div>
                    <label className="slabel">When can you start working?:</label><br/>
                    <form>
                        <label className="rb-container">
                        <input type="radio" name="radio" className="wp_immediately" id="wp_immediately" value={this.props.workingDate} onChange={this.props.onValueChanged} value={this.props.workingDate}/>Immediately
                        </label>
                        <label className="rb-container">
                        <input type="radio" name="radio" id="wp_provide_time" className="wp_provide_time" value={this.props.workingDates} onChange={this.props.onValueChanged} value={this.props.workingDate} />
                        </label>
                            <select className='joining-month' id="wp_joining_month" className="wp_joining_month" onChange={this.props.onValueChanged} value={this.props.workingMonth}>
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
                            <select className='joining-year' id="wp_joining_year" className="wp_joining_year" value={this.props.workingYear} onChange={this.props.onValueChanged}>
                                <option value="" >Year</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                            </select>  
                    </form>
                </div>
                <div>
                <label className="pre_loc">Prefered Location:</label>
                <br></br>
                    <select className="location slocation" size="4" id="prefered_location" onChange={this.props.onValueChanged} value={this.props.workingLocation}>
                        {displayWorkLocation()}
                        {/*--TODO: checkbox inside select--*/}
                    </select>
                    {/* <link href="./../../Plugins/multiselect.css" rel="stylesheet"/>
	                <script src="./../../Plugins/multiselect.min.js"></script>
                    {document.multiselect('#prefered_location')} */}
                    <p className='p-instruction'>You may select up to 10 locations. The locations specified will be used to filter jobs matching your profile</p>
                </div>
            </div>
        );
    }
}
export default WorkPreference;