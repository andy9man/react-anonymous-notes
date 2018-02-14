import React, { Component } from 'react';
import ReactModal from 'react-modal';
import AddNote from '../components/AddNote';
import NoteListView from '../views/NoteListView';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
        }
    }

    render() {
        const {showModal} = this.state;
        return (

            <div>

                <ReactModal
                    isOpen={showModal}
                    className="superModal"
                    overlayClassName="superOverlay"
                    onRequestClose={ () => this.setState( {showModal: false} ) }
                    ariaHideApp={false}
                >
                    <AddNote />
                </ReactModal>
                <div style={ {width: '100%', textAlign: 'right'} }>
                    <a style={ {fontWeight: 800, fontSize: 40, textDecoration: 'none'} } onClick={ () => this.setState({showModal: true})}>+</a>
                </div>
                <div className="row margin-vert-large" style={ {height: '60vh', overflow: 'auto'} }>
                    <div className="small-12 columns">
                        <NoteListView history={this.props.history} />
                    </div>
                </div>
            </div>

        )
    }
}
// const Home = props => {
//     let showModal = false;
//     return(
//         <div style={ {display: 'flex', flexFlow: 'column'} }>
//             <div className="row">
//                 <div className="small-12 columns">
//                     <AddNote />
//                 </div>
//             </div>

//             <div className="row margin-vert-large" style={ {height: '50vh', flex: 2, overflow: 'auto'} }>
//                 <div className="small-12 columns">
//                     <NoteListView history={props.history} />
//                 </div>
//             </div>
//         </div>
//     )

// }

export default Home;
