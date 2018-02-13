import React from 'react';
//import { connect } from 'react-redux';
import AddNote from '../components/AddNote';
import NoteListView from '../views/NoteListView';

const Home = props => {
    return(
        <div style={ {display: 'flex', flexFlow: 'column'} }>
            <div className="row">
                <div className="small-12 columns">
                    <AddNote />
                </div>
            </div>

            <div className="row margin-vert-large" style={ {height: '50vh', flex: 2, overflow: 'auto'} }>
                <div className="small-12 columns">
                    <NoteListView history={props.history} />
                </div>
            </div>
        </div>
    )

}

export default Home;
