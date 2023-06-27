
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
import { useForm } from "react-cool-form";
import "./modals/scss/styles.scss";




export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

// const styled = {
//   border-top: 3px solid #bbb;
// }



   
  const { form, use } = useForm({
    defaultValues: { firstName: "", lastName: "", framework: "" },
    onSubmit: (values) => alert(JSON.stringify(values, undefined, 2))
  });
  const errors = use("errors");

    return (
      <div>
        <div className='editheadline'>
            <Button onClick={() => setShowModal(true)}>
                Edit headline
            </Button>
            <Modal
                show={showModal}
                setShow={setShowModal}
            // hideCloseButton
            >
<div style={{borderBottom: '2px solid grey'}}>
<ModalHeader  className= "solid">
<h2>Edit headline</h2>
</ModalHeader>
</div>
                <ModalBody>
                <form ref={form} noValidate>
      <div>
<label>Title:

<input name="firstName" placeholder="First name" required />
{errors.firstName && <p>{errors.firstName}</p>}</label>
      </div>
      <div>
      <label>  Last Name  

      <input name="firstName" placeholder="First name" required />
      {errors.firstName && <p>{errors.firstName}</p>}</label>
    </div>
      <div>
<label> Headline
<input name="lastName" placeholder="Last name" required />
{errors.lastName && <p>{errors.lastName}</p>}
</label>
      </div>
      <div>
      <label> Location
      <input name="lastName" placeholder="Last name" required />
      {errors.lastName && <p>{errors.lastName}</p>}
      </label>
            </div>

      

    
    </form>
                </ModalBody>
<ModalFooter>
<Button2 onClick={() => setShowModal(false)}>
Save
</Button2>
</ModalFooter>

            </Modal>
        </div>






        <div className='editeducation'>
            <Button2 onClick={() => setShowModal2(true)}>
                Edit education
            </Button2>
            <Modal2
                show={showModal2}
                setShow={setShowModal2}
            // hideCloseButton
            >
<div style={{borderBottom: '2px solid grey'}}>
<ModalHeader2>
<h2>Edit education</h2>
</ModalHeader2>
</div>
                <ModalBody2>
                <form>
                <label>
                  Title:
                  <input type="text" name="firstName" />
                </label>
                <label>
                Last Name:
                <input type="text" name="firstName" />
              </label>
              <label>
              Headline:
              <input type="text" name="firstName" />
            </label>
            <label>
            Location:
            <input type="text" name="firstName"/>
          </label>
                
              </form>
                </ModalBody2>
                <ModalFooter2>
                    <Button2 onClick={() => setShowModal2(false)}>
                        Save
                    </Button2>
                </ModalFooter2>
            </Modal2>
        </div>






        <div className='editexperience'>
            <Button3 onClick={() => setShowModal3(true)}>
                Edit experience
            </Button3>
            <Modal3
                show={showModal3}
                setShow={setShowModal3}
            // hideCloseButton
            >
<div style={{borderBottom: '2px solid grey'}}>
<ModalHeader3 className= "solid">
<h2>Edit experience</h2>
</ModalHeader3>
</div>
                <ModalBody3>
                <form>
                <label>
                  Title:
                  <input type="text"name="firstName" />
                </label>
                <label>
                Company Name:
                <input type="text" name="firstName" />
              </label>
              <label>
              Company Name:
              <input type="text" name="firstName" />
            </label>
            
              <label>
              Start Date:
              <input type="date" name="name" />
            </label>
            <label>
            Stop Date:
            <input type="date" name="name" />
          </label>
          
            <label>
            Location:
            <input type="text" name="firstName" />
          </label>
               
              </form>
                </ModalBody3>
                <ModalFooter3>
                    <Button3 onClick={() => setShowModal3(false)}>
                        Save
                    </Button3>
                </ModalFooter3>
            </Modal3>
        </div>






        <div className='editabout'>
            <Button1 onClick={() => setShowModal1(true)}>
                Edit about
            </Button1>
            <Modal1
                show={showModal1}
                setShow={setShowModal1}
            // hideCloseButton
            >
         <div style={{borderBottom: '2px solid grey'}}>
         <ModalHeader1 >
         <h2>Edit about</h2>
     </ModalHeader1>
    
         </div>
         <ModalBody1>  
                <form>
                <label>
                  About:
                  <textarea type="text" name="firstName"  rows={9} cols={40}/>
                </label>



                
              </form>
                </ModalBody1>
                <ModalFooter1>
                    <Button1 onClick={() => setShowModal1(false)}>
                        Save
                    </Button1>
                </ModalFooter1>
            </Modal1>
        </div>
        </div>
    );


}
