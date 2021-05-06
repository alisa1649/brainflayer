import React from "react";


class EmptyDecksPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const content = (
                <div className="empty-dashboard-message">
                    <div className="empty-header">
                        <h3 className="empty-header-text">
                            Add Decks to your Library
                        </h3>
                    </div>
                    <div className="empty-dashboard-content">
                        <div className="content-message">Your library is empty.</div>
                    </div>
                    <div className="empty-dashboard-footer">
                        <div className="footer-message">
                            <div className="message-text">You can create your own deck, or browse BrainFlayer's
                                catalog of flashcard tags covering dozens of subjects.
                            </div>
                            <div className="footer-buttons">
                                <div className="button create">
                                    <span className="text">Create a New Class
                                    </span>
                                </div>
                                <div className="button find">
                                    <span className="text">Find Flashcards
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>c
                </div>
        )
       return content;
    }
}

export default EmptyDecksPage;