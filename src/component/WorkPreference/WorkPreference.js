import React, { Component } from 'react';

class WorkPreference extends Component {

    render() {
        return (
            <div className='solid-border'>
                <h4>Work Preference</h4>
                <hr className='hr-solid'/>
                <div>
                    <label for="job_preference">Specify your preference for:</label><br/>
                    <form className="job_preference in-line">
                        <label className="rb-container">
                        <input type="radio" checked="checked" name="radio" id="wp_fulltime"/>FullTime
                        <span className="checkmark"></span>
                        </label>
                        <label className="rb-container">
                        <input type="radio" name="radio" id="wp_parttime"/>Part Time
                        <span className="checkmark"></span>
                        </label>
                        <label className="rb-container">
                        <input type="radio" name="radio" id="wp_internship"/>Internship
                        <span className="checkmark"></span>
                        </label>
                    </form>
                </div>
                <div>
                    <label>When can you start working?:</label><br/>
                    <form>
                        <label className="rb-container">
                        <input type="radio" name="radio" id="wp_immediately" checked/>Immediately
                        </label>
                        <label className="rb-container">
                        <input type="radio" name="radio" id="wp_provide_time"/>
                        </label>
                        <select className='joining-month' id="wp_joining_month" >
                            <option value=""  selected>Month</option>
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
                        <select className='joining-year' id="wp_joining_year">
                            <option value=""  selected>Year</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                        </select>     
                    </form>
                </div>
                <div>
                <label className="pre_loc" for="location">Prefered Location:</label>
                    <select className="location" size="4" id="prefered_location">
                        <option value="Anywhere in India" selected>Anywhere in India</option>
                        <option value="West India">West India</option>
                        <option value="East India">East India</option>
                        <option value="South India">South India</option>
                        <option value="North India">North India</option>
                        <option value="Gulf Region">Gulf Region</option>
                        <option value="Abroad">Abroad</option>
                        //--TODO: checkbox inside select-->
                    </select>
                    <p className='p-instruction'>You may select up to 10 locations. The locations specified will be used to filter jobs matching your profile</p>
                </div>
            </div>
        );
    }
}
export default WorkPreference;