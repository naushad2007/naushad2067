import React, { Component } from 'react';
import './Class12.css';
import './../../App.css';

class Class12 extends Component {

    render() {
        return (
            <div className="border-box">
                <div>
                    <label className="align-left">Class XII</label><br/>
                    <div className="in-line">
                        <select id="12_board" className="class12_board" onChange={this.props.onValueChanged} value={this.props.board12}>
                            <option value="">Board/Diploma</option>
                            <option value="CBSE">CBSE</option>
                            <option value="ICSE">ICSC</option>
                            <option value="State Board">State Board</option>
                        </select>
                    </div>

                   <div className="in-line">
                        <input  id='class12Marks' className='class12-marks' type='number' placeholder="Marks(%)" onChange={this.props.onValueChanged} value={this.props.marks12}/>
                    </div>

                    <div className="in-line">
                        <select className='passout-year-12' id='12_year' onChange={this.props.onValueChanged} value={this.props.year12}>
                            <option value="">Year</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                        </select>
                    </div>
                    <br/>
                    <div className="in-line">
                        <select className="class12_medium" id="12_medium" onChange={this.props.onValueChanged} value={this.props.medium12}>
                            <option value="">Medium</option>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Punjabi">Punjabi</option>
                            {/*--TODO: use JS to display all mediums-*/}
                        </select>
                    </div>

                    <div className='in-line'>
                        <input id="12_maths_marks" className="class12_marks_math" type="number" 
                            step="0.01" min="0" max="100" placeholder="Maths Marks" onChange={this.props.onValueChanged} value={this.props.mathMarks12}/>
                    </div>

                    <div className="in-line">
                        <input id="12_english_marks" className="class12_marks_english" type="number" step="0.01" 
                            min="0" max="100" placeholder="English Marks" onChange={this.props.onValueChanged} value={this.props.englishMarks12}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Class12;