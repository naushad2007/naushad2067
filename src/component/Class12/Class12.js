import React, { Component } from 'react';
import './Class12.css';
import './../../App.css';

class Class12 extends Component {

    state = {
        board: '',
        marks: '',
        year: '',
        medium: '',
        englishMarks: '',
        mathsMarks: ''
    }

    boardHandler(event) {
        console.log(event.target.value);
        this.setState({board:event.target.value})
    }

    marksHandler(event) {
        console.log(event.target.value);
        this.setState({marks:event.target.value})
    }

    yearHandler(event) {
        console.log(event.target.value);
        this.setState({year:event.target.value})
    }

    mediumHandler(event) {
        console.log(event.target.value);
        this.setState({medium:event.target.value})
    }

    englishMarksHandler(event) {
        console.log(event.target.value);
        this.setState({englishMarks:event.target.value})
    }

    mathsMarksHandler(event) {
        console.log(event.target.value);
        this.setState({mathsMarks:event.target.value})
    }

    render() {
        return (
            <div className="border-box">
                <div>
                    <label className="align-left">Class XII</label><br/>
                    <div className="in-line">
                        <select id="12_board" onChange={(event)=>{this.boardHandler(event)}}>
                            <option value="">Board/Diploma</option>
                            <option value="CBSE">CBSE</option>
                            <option value="ICSE">ICSC</option>
                            <option value="State Board">State Board</option>
                        </select>
                    </div>

                   <div className="in-line">
                        <input  id='class12Marks' className='class12-marks' type='number' placeholder="Marks(%)" onChange={(event)=>{this.marksHandler(event)}} />
                    </div>

                    <div className="in-line">
                        <select className='passout-year' id='12_year' onChange={(event)=>{this.yearHandler(event)}} >
                            <option value="">Year</option>
                        </select>
                    </div>
                    <br/>
                    <div className="in-line">
                        <select id="12_medium" onChange={(event)=>{this.mediumHandler(event)}}>
                            <option value="">Medium</option>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Punjabi">Punjabi</option>
                            {/*--TODO: use JS to display all mediums-*/}
                        </select>
                    </div>

                    <div className='in-line'>
                        <input id="12_maths_marks" className="marks_math" type="number" step="0.01" min="0" max="100" placeholder="Maths Marks" onChange={(event)=>{this.mathsMarksHandler(event)}} />
                    </div>

                    <div className="in-line">
                        <input id="12_english_marks" className="marks_english" type="number" step="0.01" min="0" max="100" placeholder="English Marks" onChange={(event)=>{this.englishMarksHandler(event)}} />
                    </div>
                </div>
            </div>
        );
    }
}
export default Class12;