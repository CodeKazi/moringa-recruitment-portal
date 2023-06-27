
"use client"
// import ResetPassword from "./resetPassword2"
// import ResetPassword from "./resetPassword1"
// import Dashboard from "./dashboard"
// import SignIn from "./signin"
// import Register from "./register"


import Button from './modals/editheadline/button';
import Modal, { ModalBody, ModalFooter, ModalHeader } from './modals/editheadline/modal';
import React, { useState } from "react";


export default function Home() {

  const [showModal, setShowModal] = useState(false);


 
   
    

    return (
        <div>
            <Button onClick={() => setShowModal(true)}>
                Edit profile
            </Button>
            <Modal
                show={showModal}
                setShow={setShowModal}
            // hideCloseButton
            >
                <ModalHeader>
                    <h2>Edit headline</h2>
                </ModalHeader>
                <ModalBody>
                <form>
                <label>
                  Title:
                  <input type="text" name="name" />
                </label>
                <label>
                Last Name:
                <input type="text" name="name" />
              </label>
              <label>
              Headline:
              <input type="text" name="name" />
            </label>
            <label>
            Location:
            <input type="text" name="name" />
          </label>
                <input type="submit" value="Submit" />
              </form>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => setShowModal(false)}>
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );


}
