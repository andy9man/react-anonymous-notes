import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getNotes, addNote} from '../store/actions';

class AddNote extends Component {
    constructor(props){
        super(props)

        this.state = {
            newNote: ''
        }
    }

    render(){
        return(
            <div className="card">

                <form onSubmit={
                    (e) => {
                        e.preventDefault();
                        //Send the note to the API/Redux
                        this.props.addNote({body: this.state.newNote});
                        this.setState({newNote: ''});
                    }}>
                    <div className="row">
                        <div className="small-12 medium-10 columns">
                            <div className="md-text-field with-floating-label">
                                <input
                                    type="text"
                                    id="newNote"
                                    name="newNote"
                                    value={this.state.newNote}
                                    className={this.props.error ? 'has-error' : ''}
                                    onInput={(e) => (
                                        this.setState({ [e.target.name]: e.target.value })
                                    )}
                                    required
                                />
                                <label htmlFor="newNote">Note</label>
                                {this.props.error && <small className="error">There was an issue finding that GitHub user.</small>}
                            </div>
                        </div>

                        <div className="small-12 medium-2 columns">
                            <button className="margin-top-small button btn-cta expand" disabled={this.state.newNote.length < 3}>Add Note</button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        addNote: state.addNote,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNotes() {
            dispatch( getNotes() );
        },
        addNote(note) {
            dispatch( addNote(note) );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote)
