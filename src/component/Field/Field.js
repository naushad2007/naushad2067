import React, { Component } from 'react';

class Field extends Component {
    state = {
        fieldName : "",
        fieldValue : ""
    };

    render() {
        return (
            <div>{this.props.fieldName}{this.props.fieldValue}</div>
        );
    }
}
export default Field;