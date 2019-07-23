import React, { Component } from 'react';
import './PersonalDetails.css';


class PersonalDetails extends Component {

    render() {
        return (
            <div className='personal-details border-box'>
                <h4>Personal Details</h4>
                <hr className='hr-solid'/>
                <div>
                    <label for="name">Name:</label>
                    <input className="name" type="text" name="name" id="name"/>
                </div>
                <div>
                    <label for="gender">Gender:</label>
                    <form className="gender in-line">
                        <label className="rb-container">
                        <input type="radio" name="radio" id="gender_female"/>Female
                        </label>
                        <label className="rb-container">
                        <input type="radio" name="radio" id="gender_male"/>Male
                        </label>
                    </form>
                </div>
                <div>
                    <label for="dob">Date of Birth:</label>
                    <input id="dob" className="dob" type="date" name="bday"/><br/>
                </div>
                <div>
                    <label for="contact">Contact Numbers:</label><br/>
                    <div className="contact">
                        <label for="mob">Mobile:</label>
                        <input id="mobile" className="mob" type="number" name="mob" step="1" min="1111111111" max="9999999999"/><br/>
                        <div>
                            <label for="tel">Phone:</label>
                            <input id="std" type="number" name="std" step="1" placeholder="STD code"/>
                            <input id="telephone" type="number" name="tel" step="1" placeholder="Telephone No."/>
                        </div>
                    </div>
                </div>
                <div>
                    <label for="city">Current Location:</label>
                    {/* <select onchange="print_city('cl_state', this.selectedIndex);" id="cl_sts" name ="cl_stt" className="form-control" required onchange="currentStateChange()"><option value="" selected>Selected</option></select>
                    <select id ="cl_state" className="form-control" required onchange="currentCityChange()"><option value="" selected>Selected</option></select>
                    <script language="javascript">print_state("cl_sts");</script> */}
                </div>
                <div>
                    <label for="hometown">Hometown:</label>
                    {/* <select onchange="print_city('h_state', this.selectedIndex);" id="h_sts" name ="h_stt" className="form-control" required onchange="homeStateChange()"><option value="" selected>Selected</option></select>
                    <select id ="h_state" className="form-control" required onchange="homeCityChange()"><option value="" selected>Selected</option></select>
                    <script language="javascript">print_state("h_sts");</script> */}
                </div>
            </div>
        );
    }
}
export default PersonalDetails;