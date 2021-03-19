import React from 'react';

class Modal extends React.Component {
    render() {
        return (
            <div className="modal-overlay" onClick={this.props.closeModal}>
                <div className={`modal-form-container ${this.props.className}`} onClick={e => e.stopPropagation()}>
                    <span className="modal-x" onClick={this.props.closeModal}>
                    </span>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal;