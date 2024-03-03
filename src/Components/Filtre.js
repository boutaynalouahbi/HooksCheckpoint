import { Form ,Row,Col, Container} from 'react-bootstrap';
import React, { useState } from 'react';

const Filtre = ({ handleFilterChange }) => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const handleTitreChange = (event) => {
    setTitle(event.target.value);
    handleFilterChange({ title: event.target.value, note });
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
    handleFilterChange({ title, note: event.target.value });
  };

  return (
    <div className="filtre">
      <h1 className='text-center'>Filtre BY Title or Note</h1>
      <Container>
      <Row>
        <Col>
       <Form.Control
          aria-label="Large"
          type="text"
          value={title}
          onChange={handleTitreChange}
          placeholder="Filtre by title"
        />
        </Col>
        <Col>
        <Form.Control
          aria-label="Large"
          type="number"
          value={note}
          onChange={handleNoteChange}
          placeholder="Filtre by  note"
        />
        </Col>
        </Row>
        </Container>
    </div>
  );
};

export default Filtre;