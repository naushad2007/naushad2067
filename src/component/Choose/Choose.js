import React, {Component} from 'react';
import './Choose.css'

class Choose extends Component {
    render() {
        return (
            <div>
                <h3>Select Theme for your Resume:</h3>
                {/* <form className="templateSelector" onChange={this.props.templateSelect} >
                    <input type="radio" name="temp"   checked value='1' />  Blue Theme Template<br/><br/>
                    <input type="radio" name="temp"   value='2'/>  Purple Theme Template<br/>
                </form> */}
                <form>
                    <label>
                    <input type="radio" className="template1 nametemp move-little" value="1" name='radio2' onChange={this.props.onValueChanged}/>Blue Theme Template
                    </label>
                    <br/>
                    <label>
                    <input type="radio" className="template2 nametemp move-a-little-more" value="2" name='radio2' onChange={this.props.onValueChanged}/>Maroon Theme Template
                    </label>
                </form>
            </div>
        );
    }
}
export default Choose;