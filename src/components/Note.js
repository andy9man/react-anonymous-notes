import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { epochDateTimeFix as dateFix } from './helper';
import { editNote } from '../store/actions';

class Note extends Component {

    constructor(props) {
        super(props);

        this.state = this.props.note;
    }

    render() {
        const {history} = this.props;
        const note = this.state;
        return (
            <div className="card margin-vert-small">
                <div className="row">
                    <p style={ {width: '100%', textAlign: 'right', paddingRight: 20} }><span style={ {fontWeight: 800, marginRight: 10}}>Noted on: </span>{`  ${dateFix(note.createdAt)}`}</p>
                    <div className="small-12 medium-8 columns">
                        <p
                            onClick={ () =>{
                                history && history.push(`/notes/${note.id}`);
                            }}
                            className="margin-horiz-medium">
                        {note.body}</p>

                    </div>
                    <div className="small-6 medium-2 columns text-center">
                        <div className="padding-small text-white bg-primary" style={ {borderRadius: '50%', height: 80, width: 80} }>
                            <p style={ {fontWeight: 800, textTransform: 'uppercase', marginTop: 5} }>Votes</p>
                            <p style={ {fontSize: '2em', fontWeight: 100, lineHeight: 0.1} }>{note.votes}</p>
                        </div>
                    </div>
                    <div className="small-6 medium-2 text-center columns">
                        <div
                            style={ {height: 80, width:80, fontSize: 80, fontWeight: 800, display: 'flex', justifyContent: 'center', alignItems: 'center'} }
                            className="text-success"
                            onClick={ () => {
                                this.props.editNote(note.id, {votes: note.votes+1});
                                this.setState({votes: note.votes+1});
                            }}
                        >
                            &#43;
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        editSuccess: state.editSuccess,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editNote(id, obj) {
            dispatch( editNote(id, obj) );
        },
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(Note);