import React, { Component } from 'react';
import './PersonalDetails.css';
import { print_city, print_state } from './../location'


class PersonalDetails extends Component {

    state = {
        name: '',
        dob: '',
        mobile: '',
        std: '',
        telephone: '',
        homeCity: '',
        homeState: '',
        currentCity: '',
        currentState: '',
        gender: ''
    }

    nameHandler(event) {
        console.log(event.target.value);
        this.setState({name:event.target.value})
    }
    dobHandler(event) {
        console.log(event.target.value);
        this.setState({dob:event.target.value})
    }
    mobileHandler(event) {
        console.log(event.target.value);
        this.setState({mobile:event.target.value})
    }
    stdHandler(event) {
        console.log(event.target.value);
        this.setState({std:event.target.value})
    }
    telephoneHandler(event) {
        console.log(event.target.value);
        this.setState({telephone:event.target.value})
    }

    genderFemaleHandler(event) {
        console.log(event.target.value);
        this.setState({gender:event.target.value})
    }
    genderMaleHandler(event) {
        console.log(event.target.value);
        this.setState({gender:event.target.value})
    }

    render() {
        return (
            <div className='personal-details border-box'>
                <h4>Personal Details</h4>
                <hr className='hr-solid'/>
                <div>
                    <label>Name:</label>
                    <input className="name" type="text" name="name" id="name" onChange={(event)=>{this.nameHandler(event)}} />
                </div>
                <div>
                    <label>Gender:</label>
                    <form className="gender in-line">
                        <label className="rb-container">
                        <input type="radio" name="radio" id="gender_female" value="Female" onChange={(event)=>{this.genderFemaleHandler(event)}} />Female
                        </label>
                        <label className="rb-container">
                        <input type="radio" name="radio" id="gender_male" value="Male" onChange={(event)=>{this.genderMaleHandler(event)}} />Male
                        </label>
                    </form>
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input id="dob" className="dob" type="date" name="bday" onChange={(event)=>{this.dobHandler(event)}}/><br/>
                </div>
                <div>
                    <label>Contact Numbers:</label><br/>
                    <div className="contact">
                        <label>Mobile:</label>
                        <input id="mobile" className="mob" type="number" name="mob" step="1" min="1111111111" max="9999999999" onChange={(event)=>{this.mobileHandler(event)}} /><br/>
                        <div>
                            <label>Phone:</label>
                            <input id="std" type="number" name="std" step="1" placeholder="STD code" onChange={(event)=>{this.stdHandler(event)}} />
                            <input id="telephone" type="number" name="tel" step="1" placeholder="Telephone No." onChange={(event)=>{this.telephoneHandler(event)}} />
                        </div>
                    </div>
                </div>
                <div>
                    <label>Current Location:</label>
                    {/*<select onChange={print_city('cl_state', this.selectedIndex)} id="cl_sts" name ="cl_stt" className="form-control" required onChange="currentStateChange()"><option value="">Selected</option></select>
                    <select id ="cl_state" className="form-control" required onChange="currentCityChange()"><option value="">Selected</option></select>
                    { print_state("cl_sts") */}
                </div>
                <div>
                    <label>Hometown:</label>
                    {/* <select onchange="print_city('h_state', this.selectedIndex);" id="h_sts" name ="h_stt" className="form-control" required onchange="homeStateChange()"><option value="" selected>Selected</option></select>
                    <select id ="h_state" className="form-control" required onchange="homeCityChange()"><option value="" selected>Selected</option></select>
                    <script language="javascript">print_state("h_sts");</script> */}
                </div>
            </div>
        );
    }
}
export default PersonalDetails;