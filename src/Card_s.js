import React from "react";

import { Button, Card, Modal, ModalBody } from "react-bootstrap";

// import "./mystyles.css";

const Card_s = (props) => {
  return (
    <div>
      <Card className="Cardstyle" class="border-0">
        <Card.Img variant="top" src={props.img_src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button onClick={props.handle} className="button">
            {props.btn_name}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Card_s;
