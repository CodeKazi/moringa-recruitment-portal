"use client";

import React, { useState } from "react";

import Button from "./button";


import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "./modal";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "../scss/styles.scss";
import "../scss/styles.css";

const About = () => {

 const [showModal1, setShowModal1] = useState(false);
  const [about, setAbout] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

  }

  return (
    <div>
    <Grid>
    <Button onClick={() => setShowModal1(true)}>Edit about</Button>
    <form onSubmit={handleSubmit}>
      <Modal
        show={showModal1}
        setShow={setShowModal1}
        // hideCloseButton
      >
        <Grid style={{ borderBottom: "2px solid grey" }}>
          <ModalHeader>
            <Typography variant="h4">Edit about</Typography>
          </ModalHeader>
        </Grid>
        <ModalBody className="form-inputs">
          
            <Grid className="input-Fields">
              <TextField
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                type="text"
                rows={4}
                name="about"
                label="About"
                multiline
                variant="outlined"
                required
              />
            </Grid>
        
        </ModalBody>
        <ModalFooter className="form-button">
          <Grid class="btn-btn">
            <Button type="submit">Save</Button>
          </Grid>
        </ModalFooter>
      </Modal>
    </form>
  </Grid>
    </div>
  )
}

export default About