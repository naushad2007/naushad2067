import React, { Component } from 'react';

class HighestDegree extends Component {

    render() {
        return (
            <div>
                <h4>Education:</h4>
                <hr class="hr-solid"></hr>
                <label>Highest Degree:</label>
                <select id="educationLevel" className="highest-degree">
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