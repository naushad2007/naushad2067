import React, { Component } from 'react';
import './HighestDegree.scss';

class HighestDegree extends Component {

    highestDegreeHandler(event) {
        console.log(event.target.value);
        this.setState({highestDegree:event.target.value})
    }
    
    //<EducationComponent />


    render() {
        return (
            <div className="border-box">
                <h4>Education:</h4>
                <hr className="hr-solid"></hr>
                <label>Highest Degree:</label>
                <select id="educationLevel" className="highest-degree" value={this.props.highestDegree} onChange={this.props.onValueChanged}>
                    <option value="Graduation / Bachelors Degree or Equivilant">Graduation / Bachelors Degree or Equivilant</option>
                    <option value="Post Graduation / Masters Degree or Equivilant">Post Graduation / Masters Degree or Equivilant</option>
                    <option value="Doctorate">Doctorate</option>
                </select>
                <p className='p-instruction'>You may also enter the degree that you are currently pursuing</p>
            </div>
        );
    }
} 
export default HighestDegree;