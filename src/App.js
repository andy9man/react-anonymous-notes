import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import HomeView from './views/HomeView';
import NoteView from './views/NoteView';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="padding-vert-large padding-horiz-large margin-vert-xlarge margin-horiz-xlarge card bg-off-white">
          <header className="margin-bottom-large">
            <h1>Anonymous Notes</h1>
          </header>

          <div className="row">
            <div className="small-12 medium-11 large-10 medium-centered columns">
              <Switch>
                <Route exact path='/' component={HomeView} />
                <Route exact path='/notes/:id' component={NoteView} />
                <Route render={ () => ( <Redirect to='/' />) } />
              </Switch>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
