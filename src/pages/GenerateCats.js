import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './GenerateCats.css';

const cols = [];

function CatCard(){
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");

  return(
    <Card style={{ width: '18rem' }} className='cards'>
      <Card.Body>
      <Card.Title className='center'>{name}</Card.Title>
      <Card.Img variant="top" src={url} />
      </Card.Body>
      <Button variant="primary" className='center' onClick={() => {
        fetch("https://cataas.com/cat").then(response => response.url).then(data => {
          setUrl(data)
        });
        fetch("http://localhost:8080/home/films/random").then(response => response.json()).then(data => setName(data.title))
        setUrl();

        cols.push(<GridCard title={name} url={url} />)
        console.log(cols)

        }}>Generate</Button>
        <br/>
    </Card>
  )
}

function GridCard(props){
  return(
      <Col>
          <Card className='cards'>
              <Card.Body>
                  <Card.Title className='center'>{props.title}</Card.Title>
                  <Card.Img variant="top" src={props.url} />
              </Card.Body>
          </Card>
          <br/>
      </Col>
  );
}

function CatGrid() {
  return (
      <Row xs={1} md={4} className="">
          {cols}
      </Row>
  );
}

function GenerateCats() {
  return (
    <div>
      <br/>
      <CatCard />
      <CatGrid />
    </div>
  )
};
  
export default GenerateCats;