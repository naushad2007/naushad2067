import React, { Component } from 'react';
import './PersonalDetails.scss';
import iStates from './../../IndianStates.json';
import iCities from './../../IndianCities.json';


class PersonalDetails extends Component {

    indianState() {
        const optionStates = Object.keys(iStates).map(item => 
       // console.log(iStates[item].name)
           <option key={iStates[item].key} value={iStates[item].name}>{iStates[item].name}</option>
        )
        return (optionStates)
    }

    indianCities() {
        const optionCities = Object.keys(iCities).map(item => {
             return Object.keys(iCities[item]).map(index => {
                 return Object.keys(iCities[item][index].districts).map( pos => 
                     //console.log(iCities[item][index].districts)
                    <option key={iCities[item][index].districts[pos]} 
                    value={iCities[item][index].districts[pos]}>
                    {iCities[item][index].districts[pos]}
                    </option>
                 )
            })
        })
        return (optionCities)
        // const optionCities = Object.keys(iCities).map(item => {
        //     Object.keys(iCities[item]).map(index =>{
        //         Object.keys(iCities[item][index].districts).map(values =>
        //             <option key={iCities[item][index].districts[value]} value={iCities[item][index].districts[value]} >{iCities[item][index].districts[value]}</option>
        //         ) 
        //     }
        //         //console.log(iCities[item][0].districts)
        //         // <option key={iCities[item][index].districts} value={iCities[item][index].districts} >{iCities[item][index].districts}</option>
        //         //)
        //     //<option>{iCities[item][]}</option>
        // }
        // //console.log(iCities[item][0].districts)
        //     //<option key={iStates[item].key} value={iStates[item].key}>{iStates[item].name}</option>
        // )
        //console.log(optionCities)
        
    }

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
                    <label>Current Location:</label>
                    <select className="current_state" onChange={this.props.onValueChanged} value={this.props.currentState}>
                        <option value="">Select State</option>
                        {this.indianState()}
                    </select>
                    <select className="current_city" onChange={this.props.onValueChanged} value={this.props.currentCity}>
                        <option value="">Select City</option>
                        {this.indianCities()}
                    </select>
                </div>
                <div>
                    <label>Hometown:</label>
                    <select className="home_state" onChange={this.props.onValueChanged} value={this.props.HomeState}>
                        <option value="">Select State</option>
                        {this.indianState()}
                    </select>
                    <select className="home_city" onChange={this.props.onValueChanged} value={this.props.homeCity}>
                        <option value="">Select City</option>
                        {this.indianCities()}
                    </select>
                </div>
            </div>
        );
    }
}
export default PersonalDetails;