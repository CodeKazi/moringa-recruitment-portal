"use client";
import React, { useState } from "react";
import Button from "./button";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "./modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "../scss/styles.scss";
import "../scss/styles.css";
const Headline = () => {

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [lastname, setLastname] = useState("");
  const [headline, setHeadline] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
 
  }

  return (
    <div className="container">
   
        <Button onClick={() => setShowModal(true)}>Edit headline</Button>
        <form onSubmit={handleSubmit}>
          <Modal
            show={showModal}
            setShow={setShowModal}
            // hideCloseButton
          >
            <div className = "header">
              <ModalHeader>
                <Typography variant="h4">Edit headline</Typography>
              </ModalHeader>
            </div>
            <ModalBody>
              <div className="input-Fields">
                <TextField
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  name="title"
                  size="small"
                  label="Title"
                  variant="outlined"
                  required
                />
              </div>

              <div className="input-Fields">
                <TextField
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  type="text"
                  name="lastname"
                  size="small"
                  label="Last Name"
                  variant="outlined"
                  required
                />
              </div>

              <div className="input-Fields">
                <TextField
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  type="text"
                  name="headline"
                  size="small"
                  label="Headline"
                  variant="outlined"
                  required
                />
              </div>

              <div className="input-Fields">
                <TextField
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  name="location"
                  size="small"
                  label="Location"
                  variant="outlined"
                  required
                />
              </div>
            </ModalBody>
            <ModalFooter className="form-inputs">
              <div class="input-Fields">
                <Button type="submit">Save</Button>
              </div>
            </ModalFooter>
          </Modal>
        </form>
    </div>
  );
};

export default Headline;
