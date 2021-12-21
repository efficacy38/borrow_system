import React from 'react'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

function index({isOpen, toggleModal}) {
    return (
        <MDBContainer>
            {/* MODAL */}
            <MDBModal isOpen={isOpen} toggle={toggleModal}>
                <MDBModalHeader toggle={toggleModal}>MDBModal title</MDBModalHeader>
                <MDBModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary">Close</MDBBtn>
                    <MDBBtn color="primary">Save changes</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    )
}

export default index
