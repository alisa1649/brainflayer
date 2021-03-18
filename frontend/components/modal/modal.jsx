import React from 'react';

class Modal extends React.Component {
    render() {
        return (
            <div className="modal-overlay" onClick={this.props.closeModal}>
                <div className="modal-form-container" onClick={e => e.stopPropagation()}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal;