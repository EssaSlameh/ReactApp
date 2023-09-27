import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './data.json';

function Cards() {
  return (
    <div className="card-container">
      {data.map(function (Carditmes) {
        return (
          <div className="card-wrapper" >
            <Card style={{
              width: '16rem',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              position: 'relative',
              boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)',
              top: '20%'
            }}>
              <Card.Img variant="top" src={Carditmes.image_url} />
              <Card.Body style={{ padding: '1rem', backgroundColor: 'transparent' }}>
                <Card.Title style={{color:'InfoBackground' }}>{Carditmes.title} </Card.Title>
                <Card.Text style={{ marginBottom: '1rem' , color:'InfoBackground' , fontWeight: '100'}}>{Carditmes.description}</Card.Text>
                <div style={{ textAlign: 'center' }}>
                </div>
                <Card.Text style={{ marginBottom: '1rem' , color:'InfoBackground' , fontWeight: '500'}}>{Carditmes.category}</Card.Text>
              </Card.Body>
              <div className="button-wrapper">
                <Button style={{ padding: '10px', margin: '10px', border:'0', background: 'transparent' }}>See more</Button>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
