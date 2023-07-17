"use client";
// import Register from "./register"
import React, { useState } from "react";
import Button from "./button";



import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "./modal";
//material UI
import Grid from "@mui/material/Grid";

// import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "../scss/styles.scss";
import "../scss/styles.css";
// import { MdGridOff } from "react-icons/md";

const Education = () => {
      // education section
  const [showModal2, setShowModal2] = useState(false);
  const [institution, setInstitution] = useState("");
  const [startDate, setStartDate] = useState("");
  const [stopDate, setStopDate] = useState("");
  const [location1, setLocation1] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // ..code to submit form to backend here...
  }


  return (
    <div>
    <Grid>
    <Button onClick={() => setShowModal2(true)}>Edit education</Button>
    <form onSubmit={handleSubmit}>
      <Modal
        show={showModal2}
        setShow={setShowModal2}
        // hideCloseButton
      >
        <Grid style={{ borderBottom: "2px solid grey" }}>
          <ModalHeader>
            <Typography variant="h4">Edit education</Typography>
          </ModalHeader>
        </Grid>
        <ModalBody className="form-inputs">
         
            <Grid className="input-Fields">
              <TextField
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                type="text"
                name="institution"
                size="small"
                label="Institution"
                variant="outlined"
                required
              />
            </Grid>
         
         
            <Grid className="input-Fields">
              <TextField
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                name="dates"
                size="small"
                helperText="StartDate"
                variant="outlined"
                required
              />
            </Grid>
        
        
            <Grid className="input-Fields">
              <TextField
                value={stopDate}
                onChange={(e) => setStopDate(e.target.value)}
                type="date"
                name="date2"
                size="small"
                helperText="Stop Date"
                variant="outlined"
                required
              />
            </Grid>
         
        
            <Grid className="input-Fields">
              <TextField
                value={location1}
                onChange={(e) => setLocation1(e.target.value)}
                type="text"
                name="location"
                size="small"
                label="Location"
                variant="outlined"
                required
              />
            </Grid>
         
        </ModalBody>
        <ModalFooter>
          <Button type="submit">Save</Button>
        </ModalFooter>
      </Modal>
    </form>
  </Grid>
    </div>
  )
}

export default Education