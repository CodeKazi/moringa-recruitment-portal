
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
import { FormControl} from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import "./modals/scss/styles.scss";
import "./modals/scss/styles.css";





export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  //edit headline states
  const [title, setTitle] = useState("");
  const [lastname, setTastname] = useState("");
  const [headline, setHeadline] = useState("");
  const [location, setLocation] = useState("");
  // education section
  const [institution, setInstitution] = useState("");
  const [startDate, setStartDate] = useState("");
  const [stopDate, setStopDate] = useState("");
  const [location1, setLocation1] = useState("");
//experience states
   const [titleCompany, setTitleCompany] = useState("")
   const [companyName, setCompanyName] = useState("")
   const [start, setStart] = useState("")
   const [stop, setStop] = useState("")
   const [location2, setLocation2] = useState("");
// about
const [about, setAbout] = useState("");







   


    return (
      <Box>
        <div>
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
<Typography variant="h4">Edit headline</Typography>
</ModalHeader>
</div>
                <ModalBody className="form-inputs">
                <FormControl>
      <Box>

      <div className='input-Fields'>
      <TextField  value = {about}  onChange = {(e) =>setAbout( e.target.value)} type="text" sx={{width: 400}} id="outlined-basic"size="small"  label="Title" variant="outlined"  required/>
      </div>
      </Box>
      <Box>
      
    <div className='input-Fields'>
     <TextField  value = {about}  onChange = {(e) =>setAbout( e.target.value)} type="text" sx={{width: 400}} id="outlined-basic" size="small"  label="Last Name" variant="outlined"  required/>
     </div>
    </Box>
      <div className='input-Fields'>
      
      <TextField  value = {about}  onChange = {(e) =>setAbout( e.target.value)} type="text" sx={{width: 400}} id="outlined-basic"  size="small" label="Headline" variant="outlined" required />

      </div>
      <div className='input-Fields'>
    
      <TextField  value = {about}  onChange = {(e) =>setAbout( e.target.value)} type="text" sx={{width: 400}} id="outlined-basic" size="small" label="Location" variant="outlined" required/>
     
            </div>

      

    
            </FormControl> 
                </ModalBody>
<ModalFooter>
<Button2 onClick={() => setShowModal(false)}>
Save
</Button2>
</ModalFooter>

            </Modal>
        </div>






        <div>
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
<Typography variant="h4">Edit education</Typography>
</ModalHeader2>
</div>
                <ModalBody2 className="form-inputs">
                
               <div className='input-Fields'>
               <Stack spacing={2}>
              
                <TextField  value = {about}  onChange = {(e) =>setAbout( e.target.value)} type="text" sx={{width: 400}} id="outlined-basic" size="small"  label="Institution" variant="outlined" required />
               
                 </Stack>
               </div>
               <Stack direction="row" spacing={0.5}> 
               <div className='input-Fields'>
              
                <TextField  value = {about}  onChange = {(e) =>setAbout( e.target.value)} type="text" sx={{width: 400}} id="outlined-basic"  size="small" label="Start Date" variant="outlined" required/>
             </div>

            </Stack> 
            <Stack direction="row" spacing={0.5}> 

          <div className='input-Fields'>
           <TextField  value = {about}  onChange = {(e) =>setAbout( e.target.value)} type='date' sx={{width: 400}} id="outlined-basic"  size="small" label="Stop Date" variant="outlined" required/>
         </div> 
         </Stack> 
            <div className='input-Fields'>
            <Stack spacing={2}> 
           
           <TextField  value = {about}  onChange = {(e) =>setAbout( e.target.value)} type="text" sx={{width: 400}} id="outlined-basic"  size="small" label="Location" variant="outlined" required/>
           
           </Stack>
                </div>
             
                </ModalBody2>
                <ModalFooter2>
                    <Button2 onClick={() => setShowModal2(false)}>
                        Save
                    </Button2>
                </ModalFooter2>
            </Modal2>
        </div>






        <div>
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
<Typography variant="h4">Edit experience</Typography>
</ModalHeader3>
</div>
                <ModalBody3 className="form-inputs">
               <div className='input-Fields'>
                <TextField  value = {about}  onChange = {(e) =>setAbout( e.target.value)} sx={{width: 400}} id="outlined-basic"   size="small" label="Title" variant="outlined" required/>
</div>
<div className='input-Fields'>
            <TextField  value = {about}  onChange = {(e) =>setAbout( e.target.value)} type="text" sx={{width: 400}} id="outlined-basic"  size="small" label="Company Name" variant="outlined" required/>
          </div>
          <Stack direction="row" spacing={0.5}> 
          <div className='input-Fields'>
         
           <TextField  value = {about}  onChange = {(e) =>setAbout( e.target.value)} type='date'  sx={{width: 400}} id="outlined-basic" size="small"  label="Start Date" variant="outlined" required/>
        </div>

       </Stack> 
       <Stack direction="row" spacing={0.5}> 

     <div className='input-Fields'>
      <TextField  value = {about}  onChange = {(e) =>setAbout( e.target.value)} type='date'  sx={{width: 400}} id="outlined-basic" size="small"  label="Stop Date" variant="outlined" required/>
    </div> 
    </Stack> 
        <div className='input-Fields'>
        <TextField  value = {about}  onChange = {(e) =>setAbout( e.target.value)} type="text" sx={{width: 400}} id="outlined-basic" size="small"  label="Location" variant="outlined" required/>
        </div>

               
              
                </ModalBody3>
                <ModalFooter3>
                    <Button3 onClick={() => setShowModal3(false)}>
                        Save
                    </Button3>
                </ModalFooter3>
            </Modal3>
        </div>






        <div>
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
         <Typography variant="h4">Edit about</Typography>
     </ModalHeader1>
    
         </div>
         <ModalBody1 className="form-inputs">
       <div className='input-Fields'>
        <TextField  value = {about}  onChange = {(e) =>setAbout( e.target.value)} type="text" sx={{width: 400}} rows={4} id="filled-multiline-static"  label="About"
          multiline  variant = "outlined" />
        </div>



                
             
                </ModalBody1>
                <ModalFooter1>
                    <Button1 onClick={() => setShowModal1(false)}>
                        Save
                    </Button1>
                </ModalFooter1>
            </Modal1>
        </div>
        </Box>
    );


}
