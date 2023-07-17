"use client";
import React, { useState } from "react";
import Button from "./button";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "./modal";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "../scss/styles.scss";
import "../scss/styles.css";
const Experience = () => {
  const [showModal3, setShowModal3] = useState(false);
  const [titleCompany, setTitleCompany] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [start, setStart] = useState("");
  const [stop, setStop] = useState("");
  const [location2, setLocation2] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

  }
  return (
    <div>
      <Grid>
        <Button onClick={() => setShowModal3(true)}>Edit experience</Button>
        <form onSubmit={handleSubmit}>
          <Modal
            show={showModal3}
            setShow={setShowModal3}
            // hideCloseButton
          >
            <Grid style={{ borderBottom: "2px solid grey" }}>
              <ModalHeader className="solid">
                <Typography variant="h4">Edit experience</Typography>
              </ModalHeader>
            </Grid>
            <ModalBody className="form-inputs">
              <Grid className="input-Fields">
                <TextField
                  value={titleCompany}
                  onChange={(e) => setTitleCompany(e.target.value)}
                  name="companytitle"
                  size="small"
                  label="Title"
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid className="input-Fields">
                <TextField
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  type="text"
                  name="companyname"
                  size="small"
                  label="Company Name"
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid className="input-Fields">
                <TextField
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                  type="date"
                  name="date"
                  size="small"
                  helperText="Start Date"
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid className="input-Fields">
                <TextField
                  value={stop}
                  onChange={(e) => setStop(e.target.value)}
                  type="date"
                  name="date"
                  size="small"
                  helperText="Stop Date"
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid className="input-Fields">
                <TextField
                  value={location2}
                  onChange={(e) => setLocation2(e.target.value)}
                  type="text"
                  name="location"
                  size="small"
                  label="Location"
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
  );
};

export default Experience;
