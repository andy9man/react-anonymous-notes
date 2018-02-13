import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { getNotes } from '../store/actions';
import Note from '../components/Note';

class NoteView extends Component {

    componentDidMount() {
        this.props.notes.length <= 0 && this.props.getNotes();
    }

    render() {
        const { match: {params: {id} } } = this.props;

        const note = this.props.notes.find( element => element.id === id );
        return (
            <div>
                <Link to="/" style={ {float: 'right'} }>Home</Link>
                <h1 className="margin-bottom-large"><span style={ {fontWeight: 800, marginRight: 15} }>Note ID: </span>{id}</h1>
                {
                    note === undefined ?
                        <h3><em>Something happened, we can't find that note</em></h3>
                    :

                        <Note note={note} />
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNotes(){
            dispatch( getNotes() );
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteView);