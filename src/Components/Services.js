import React from "react";
import Header from "../Components/Header";
import Card_s from "../Card_s";
import addBook from "../addbook";
import { Button, Card, Modal, ModalBody } from "react-bootstrap";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
// import "../mystyles.css";
import Book from "../images/book.png";
import Cloth from "../images/clothes.png";
import Shoes from "../images/shoes.png";
import { useEffect, useState } from "react";
const Services = () => {
  const [name, setName] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const handlerB = () => {
    handleShow();
    setName("Book");
  };
  const handlerC = () => {
    handleShow();
    setName("Clothes");
  };
  const handlerS = () => {
    handleShow();
    setName("Shoes");
  };

  return (
    <div class="mainScroll" style={{ width: "100%" }}>
      <Header />
      <div>
        <h3 class="card-title" style={{ marginTop: "3%" }}>
          Services
        </h3>
        <p class="card-text" style={{ padding: "2%" }}>
          There are Some Free Services that We are Providing You to Help{" "}
          <span style={{ color: "#ff681c" }}>Needy!</span>{" "}
        </p>
      </div>

      <div class="container d-flex h-100">
        <div class="row justify-content-center align-self-center">
          <div class="col-sm" id="card_style">
            <Card_s
              img_src={Book}
              title="Books"
              text=" Some quick example text to build on the card title and make up the bulk of
      the card's content."
              handle={handlerB}
              btn_name="Add Book"
            />
          </div>
          <div class="col-sm" id="card_style1">
            <Card_s
              img_src={Cloth}
              title="Clothes"
              text=" Some quick example text to build on the card title and make up the bulk of
      the card's content."
              handle={handlerC}
              btn_name="Add Clothes"
            />
          </div>
          <div class="col-sm" id="card_style2">
            <Card_s
              img_src={Shoes}
              title="Shoes"
              text=" Some quick example text to build on the card title and make up the bulk of
      the card's content."
              handle={handlerS}
              btn_name="Add Shoes"
            />
          </div>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          centered="true"
          className="modal_"
        >
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">{name} Name</Label>
                <Input type="text" id="name" style={{ color: "green" }} />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Description</Label>
                <Input type="text" id="des" />
              </FormGroup>
              {/* <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup> */}
              {/* <FormGroup>
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup> */}

              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
                {/* <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText> */}
              </FormGroup>
              {/* <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled />{' '}
            Option three is disabled
          </Label>
        </FormGroup>
      </FormGroup> */}
              {/* <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Check me out
        </Label>
      </FormGroup> */}
              <Button>Submit</Button>
            </Form>
          </ModalBody>
          {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
        </Modal>
      </div>
    </div>
  );
};

export default Services;
