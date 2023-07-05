
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
  const [lastname, setLastname] = useState("");
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
     
      <Stack direction="row"> 
      <div className='input-Fields'>
      <TextField  value = {title}  onChange = {(e) =>setTitle( e.target.value)} type="text" sx={{width: 400}} id="outlined-basic"size="small"  label="Title" variant="outlined"  required/>
      </div>
      </Stack>
     
      
      <Stack direction="row"> 
    <div className='input-Fields'>
     <TextField  value = {lastname}  onChange = {(e) =>setLastname( e.target.value)} type="text" sx={{width: 400}} id="outlined-basic" size="small"  label="Last Name" variant="outlined"  required/>
     </div>
     </Stack>
   
    <Stack direction="row"> 
      <div className='input-Fields'>
      
      <TextField  value = {headline}  onChange = {(e) =>setHeadline( e.target.value)} type="text" sx={{width: 400}} id="outlined-basic"  size="small" label="Headline" variant="outlined" required />

      </div>
      </Stack>
      <Stack direction="row"> 
      <div className='input-Fields'>
    
      <TextField  value = {location}  onChange = {(e) =>setLocation( e.target.value)} type="text" sx={{width: 400}} id="outlined-basic" size="small" label="Location" variant="outlined" required/>
     
            </div>
            </Stack>

      

    
            </FormControl> 
                </ModalBody>
<ModalFooter className="form-button">

<Button2 type="submit">
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
                <Stack direction = "row">
               <div className='input-Fields'>
               
              
                <TextField  value = {institution}  onChange = {(e) =>setInstitution( e.target.value)} type="text" sx={{width: 400}} id="outlined-basic" size="small"  label="Institution" variant="outlined" required />
               
                 
               </div>
               </Stack>
               <Stack direction="row"> 
               <div className='input-Fields'>
              
                <TextField  value = {startDate}  onChange = {(e) =>setStartDate( e.target.value)} type="text" sx={{width: 400}} id="outlined-basic"  size="small" helperText="Start Date" variant="outlined" required/>
             </div>

            </Stack> 
            <Stack direction="row" > 
         
          <div className='input-Fields'>
           <TextField  value = {stopDate}  onChange = {(e) =>setStopDate( e.target.value)} type='date' sx={{width: 400}} id="outlined-basic"  size="small" helperText="Stop Date" variant="outlined" required/>
         </div> 
         </Stack> 
         <Stack direction = "row"> 
            <div className='input-Fields'>
           
           
           <TextField  value = {location1}  onChange = {(e) =>setLocation1( e.target.value)} type="text" sx={{width: 400}} id="outlined-basic"  size="small" label="Location" variant="outlined" required/>
           
          
                </div>
                </Stack>
                </ModalBody2>
                <ModalFooter2 className="form-button">
             
                    <Button2 type="submit">
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
                <Stack direction="row"> 
               <div className='input-Fields'>
                <TextField  value = {titleCompany}  onChange = {(e) =>setTitleCompany( e.target.value)} sx={{width: 400}} id="outlined-basic"   size="small" label="Title" variant="outlined" required/>
</div>
</Stack>
<Stack direction="row"> 
<div className='input-Fields'>
            <TextField  value = {companyName}  onChange = {(e) =>setCompanyName( e.target.value)} type="text" sx={{width: 400}} id="outlined-basic"  size="small" label="Company Name" variant="outlined" required/>
          </div>
          </Stack>
          <Stack direction="row"> 
          <div className='input-Fields'>
         
           <TextField  value = {start}  onChange = {(e) =>setStart( e.target.value)} type='date'  sx={{width: 400}} id="outlined-basic" size="small"  helperText="Start Date" variant="outlined" required/>
        </div>

       </Stack> 
       <Stack direction="row"> 

     <div className='input-Fields'>
      <TextField  value = {stop}  onChange = {(e) =>setStop( e.target.value)} type='date'  sx={{width: 400}} id="outlined-basic" size="small"  helperText="Stop Date" variant="outlined" required/>
    </div> 
    </Stack> 
    <Stack direction="row"> 
        <div className='input-Fields'>
        <TextField  value = {location2}  onChange = {(e) =>setLocation2( e.target.value)} type="text" sx={{width: 400}} id="outlined-basic" size="small"  label="Location" variant="outlined" required/>
        </div>
        </Stack>

               
              
                </ModalBody3>
                <ModalFooter3 className="form-button">
               
                    <Button3 type="submit">
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
         <Stack direction="row"> 
       <div className='input-Fields'>
        <TextField  value = {about}  onChange = {(e) =>setAbout( e.target.value)} type="text" sx={{width: 400}} rows={4} id="filled-multiline-static"  label="About"
          multiline  variant = "outlined" required/>
        </div>
        </Stack>



                
             
                </ModalBody1>
                <ModalFooter1 className="form-button">
              
                    <Button1 type="submit">
                        Save
                    </Button1>
                
                </ModalFooter1>
            </Modal1>
        </div>
        </Box>
    );


}
