import React, { Component } from 'react';
import './HighestDegree.css';

class HighestDegree extends Component {

    state = {
        highestDegree: ''
    }

    highestDegreeHandler(event) {
        console.log(event.target.value);
        this.setState({highestDegree:event.target.value})
    }

    render() {
        return (
            <div className="border-box">
                <h4>Education:</h4>
                <hr className="hr-solid"></hr>
                <label>Highest Degree:</label>
                <select id="educationLevel" className="highest-degree" onChange={(event)=>{this.highestDegreeHandler(event)}}>
                    <option value="1">Graduation / Bachelors Degree or Equivilant</option>
                    <option value="2">Post Graduation / Masters Degree or Equivilant</option>
                    <option value="3">Doctorate</option>
                </select>
                <p className='p-instruction'>You may also enter the degree that you are currently pursuing</p>
            </div>
        );
    }
} 
export default HighestDegree;