import React, {Component} from 'react';
import './Choose.scss'

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
                    <input type="radio" name='radio2' className="template1 nametemp move-little" value="1" onChange={this.props.onValueChanged}/>Blue Theme Template
                    </label>
                    <br/>
                    <label>
                    <input type="radio" name='radio2' className="template2 nametemp" value="2" onChange={this.props.onValueChanged}/>Pink Theme Template
                    </label>
                </form>
            </div>
        );
    }
}
export default Choose;