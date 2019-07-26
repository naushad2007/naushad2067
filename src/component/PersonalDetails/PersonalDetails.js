import React, { Component } from 'react';
import './PersonalDetails.css';
import { print_city, print_state } from './../location'


class PersonalDetails extends Component {

    render() {
        return (
            <div className='personal-details border-box'>
                <h4>Personal Details</h4>
                <hr className='hr-solid'/>
                <div>
                    <label>Name:</label>
                    <input className="name" type="text" name="name" id="name" onChange={this.props.onValueChanged} value={this.props.name}/>
                </div>
                <div>
                    <label>Gender:</label>
                    <form className="gender in-line">
                        <label className="rb-container">
                        <input type="radio" name="radio" id="gender_female" className="gender_female"  onChange={this.props.onValueChanged} value={this.props.gender}/>Female
                        </label>
                        <label className="rb-container">
                        <input type="radio" name="radio" id="gender_male" className="gender_male"  onChange={this.props.onValueChanged} value={this.props.gender}/>Male
                        </label>
                    </form>
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input id="dob" className="dob" type="date" name="bday" onChange={this.props.onValueChanged} value={this.props.dob} /><br/>
                </div>
                <div>
                    <label>Contact Numbers:</label><br/>
                    <div className="contact">
                        <label>Mobile:</label>
                        <input id="mobile" className="mob" type="number" name="mob" step="1" min="1111111111" max="9999999999" onChange={this.props.onValueChanged} value={this.props.mobile} /><br/>
                        <div>
                            <label>Phone:</label>
                            <input id="std" type="number" name="std" step="1" placeholder="STD code" className="std" onChange={this.props.onValueChanged} value={this.props.std}/>
                            <input id="telephone" type="number" name="tel" step="1" placeholder="Telephone No." className="telephone" onChange={this.props.onValueChanged} value={this.props.telephone} />
                        </div>
                    </div>
                </div>
                <div>
                    {/*<select onChange={print_city('state', this.selectedIndex)} id="sts" name ="stt" class="form-control" required></select>
                    <select id ="state" class="form-control" required></select>
        print_state("sts")*/}
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