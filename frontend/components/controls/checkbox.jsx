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
                <div className={`checkbox ${this.state.checked ? "checked" : ""}`} onClick={() => { console.log(this.state); this.setState({ checked: !this.state.checked }) }}></div>
                <div className="checkbox-text">Agree to Terms</div>
            </div>
        )
    }
}

export default Checkbox;