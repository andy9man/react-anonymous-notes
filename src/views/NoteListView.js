import React, {Component} from 'react';
import { connect } from 'react-redux';
import Note from '../components/Note';
import {getNotes} from '../store/actions';
import { sortArray } from '../components/helper';

class NoteListView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sort: 'Date',
        }
    }
    componentDidMount() {
        this.props.getNotes();
    }

    render() {
        const notes = this.state.sort === 'Date' ? sortArray('createdAt', this.props.notes) : sortArray('votes', this.props.notes);
        return (
            <div className="card">
                <div>
                    <div style={ {width: '100%', textAlign: 'right'} }>
                        <span style={ {fontWeight: 600, marginRight: 10} }>Sort By: </span>
                        {this.state.sort === 'Date' ? 'Date' : <a onClick={() => this.setState({sort: 'Date'})}>Date</a> }
                        <span style={ {margin: '0 10px'} }>|</span>
                        {this.state.sort === 'Vote' ? 'Vote' : <a onClick={() => this.setState({sort: 'Vote'})}>Vote</a> }
                    </div>
                    {
                        notes.length === 0 ?
                            <h2><em>There are no notes to display</em></h2>
                        :
                            <div>
                                {
                                    notes.map( note => (
                                        <Note key={note.id} history={this.props.history} note={note} />
                                    ))
                                }
                            </div>
                    }

                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NoteListView);