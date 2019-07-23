import React, { Component } from 'react';
import './Class12.css';

class Class12 extends Component {

    render() {
        return (
            <div className="border-box">
                <div>
                    <label>Class XII</label><br/>
                    <div>
                        <select id="12_board" onchange="class12BoardChange()">
                            <option value="" selected>Board/Diploma</option>
                            <option value="CBSE">CBSE</option>
                            <option value="ICSE">ICSC</option>
                            <option value="State Board">State Board</option>
                        </select>
                    </div>

                   <div>
                        <input  id='class12Marks' class='class12-marks' type='number' placeholder="Marks(%)"/>
                    </div>

                    <div>
                        <select class='passout-year' id='12_year' onchange="class12PassingYearChange()">
                            <option value="" selected>Year</option>
                        </select>
                    </div>
                    <br/>
                    <div>
                        <select id="12_medium" onchange="class12BoardChange()">
                            <option value="" selected>Medium</option>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Punjabi">Punjabi</option>
                            //--TODO: use JS to display all mediums-
                        </select>
                    </div>

                    <div class='in-line'>
                        <input id="12_maths_marks" class="marks_math" type="number" step="0.01" min="0" max="100" placeholder="Maths Marks"/>
                    </div>

                    <div>
                        <input id="12_english_marks" class="marks_english" type="number" step="0.01" min="0" max="100" placeholder="English Marks"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Class12;