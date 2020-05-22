import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { imageElement } from '../ImageUtils'

// Modal recebendo id das fotos da respectiva notícia como props
export default function MyVerticallyCenteredModal(props) {
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Notícias</Modal.Title>
			</Modal.Header>
			<Modal.Body id="news-body">
				<h4>{props.title}</h4>
				<p>{props.body}</p>
				<div id="card-images">
                    {imageElement(props.image1)}
                    <div>&nbsp;&nbsp;&nbsp;</div>
					{imageElement(props.image2)}
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button id="card-close-button" onClick={props.onHide}>
					Fechar
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
