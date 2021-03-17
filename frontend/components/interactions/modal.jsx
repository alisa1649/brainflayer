import React from 'react';

class Modal extends React.Component {
    render() {
        return (
            <div className="modal-overlay">
                {this.props.children}
            </div>
        )
    }
}

export default Modal;