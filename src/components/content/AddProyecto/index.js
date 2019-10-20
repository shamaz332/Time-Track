import React from 'react';

import PopupModel from './popgrid'
import { Icon, Button } from 'semantic-ui-react'
import { Modal } from "flwww";
import './styles.css'
// include styles

class Popup extends React.Component {

    state = {
        modalIsVisible: false  // This control if the modal is visible or not
    }

    toggleModal = () => {
        // This function change the state of the modal visibility (e.g. this.state.modalIsVisible)
        this.setState(prevState => ({ modalIsVisible: !prevState.modalIsVisible }));
    }

    render() {
        const { modalIsVisible } = this.state;
        return (
            <div style={{paddingTop:'30px'}}>
                <Button onClick={this.toggleModal} circular ><Icon name='plus' size='big' style={{paddingLeft:'10px'}} /></Button>


                <Modal 
                
                    isVisible={modalIsVisible}
                    toggleModal={this.toggleModal}
                    title="Nuevo Proyecto">
                    <style>{'#modal { background-color: red; }'}</style>
                    <PopupModel />
                    <div style={{paddingTop:'5%',paddingBottom:'5%'}}>
                    <Button class="ui teal button" floated='right' >guarder</Button>
                    <Button class="ui red button" floated='right' onClick={this.toggleModal}>cancelar</Button>
                    </div>
                </Modal>

            </div>
        )
    }
}
export default Popup;