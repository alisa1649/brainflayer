import React from 'react';
class Checkbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        };

    }
    render() {
        return (
            <div className="checkbox-container">
                <div className={`checkbox ${this.state.checked ? "checked" : ""}`} onClick={() => {this.setState({ checked: !this.state.checked }) }}></div>
                <div className="checkbox-text">{this.props.text}</div>
            </div>
        )
    }
}

export default Checkbox;