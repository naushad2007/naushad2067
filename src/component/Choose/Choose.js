import React, {Component} from 'react';
import './Choose.scss'

class Choose extends Component {
    render() {
        return (
            <div>
                <h3>Select Theme for your Resume:</h3>
                
                <form>
                    <label className="label_width">
                    <input type="radio" name='radio2' className="template1 nametemp move-little" value="1" onChange={this.props.onValueChanged}/>Blue Theme Template
                    </label>
                    <br/>
                    <br/>
                    <label className="label_width">
                    <input type="radio" name='radio2' className="template2 nametemp" value="2" onChange={this.props.onValueChanged}/>Pink Theme Template
                    </label>
                </form>
            </div>
        );
    }
}
export default Choose;