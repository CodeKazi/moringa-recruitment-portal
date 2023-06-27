
"use client"
// import ResetPassword from "./resetPassword2"
// import ResetPassword from "./resetPassword1"
// import Dashboard from "./dashboard"
// import SignIn from "./signin"
// import Register from "./register"


import Button from './modals/editheadline/button';
import Button2 from './modals/edit_education/button';
import Button1 from './modals/edit_about/button';
import Button3 from './modals/edit_experience/button';
import Modal, { ModalBody, ModalFooter, ModalHeader } from './modals/editheadline/modal';
import Modal1, { ModalBody1, ModalFooter1, ModalHeader1 } from './modals/edit_about/modal';
import Modal3, { ModalBody3, ModalFooter3, ModalHeader3 } from './modals/edit_experience/modal';
import Modal2, { ModalBody2, ModalFooter2, ModalHeader2 } from './modals/edit_education/modal';
import React, { useState } from "react";


export default function Home() {

  const [showModal, setShowModal] = useState(false);


 
   
    

    return (
      <div>
        <div className='editheadline'>
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

        <div className='editeducation'>
            <Button2 onClick={() => setShowModal(true)}>
                Edit profile
            </Button2>
            <Modal
                show={showModal}
                setShow={setShowModal}
            // hideCloseButton
            >
                <ModalHeader2>
                    <h2>Edit headline</h2>
                </ModalHeader2>
                <ModalBody2>
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
                </ModalBody2>
                <ModalFooter2>
                    <Button onClick={() => setShowModal(false)}>
                        Save
                    </Button>
                </ModalFooter2>
            </Modal>
        </div>

        <div className='editexperience'>
            <Button3 onClick={() => setShowModal(true)}>
                Edit profile
            </Button3>
            <Modal
                show={showModal}
                setShow={setShowModal}
            // hideCloseButton
            >
                <ModalHeader3>
                    <h2>Edit headline</h2>
                </ModalHeader3>
                <ModalBody3>
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
                </ModalBody3>
                <ModalFooter3>
                    <Button onClick={() => setShowModal(false)}>
                        Save
                    </Button>
                </ModalFooter3>
            </Modal>
        </div>


        <div className='editabout'>
            <Button1 onClick={() => setShowModal(true)}>
                Edit profile
            </Button1>
            <Modal
                show={showModal}
                setShow={setShowModal}
            // hideCloseButton
            >
                <ModalHeader1>
                    <h2>Edit headline</h2>
                </ModalHeader1>
                <ModalBody1>
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
                </ModalBody1>
                <ModalFooter1>
                    <Button onClick={() => setShowModal(false)}>
                        Save
                    </Button>
                </ModalFooter1>
            </Modal>
        </div>
        </div>
    );


}
