import React from 'react';
import MyVerticallyCenteredModal from '../../components/Modal/CenteredModal';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import './style.css';

export default function Modal(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <ButtonToolbar id="card-buttonToolbar">
        <Button id="card-button" onClick={() => setModalShow(true)}>
          Saiba mais
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          title={props.title}
          body={props.body}
          image1={props.image1}
          image2={props.image2}
        />
      </ButtonToolbar>
    );
}