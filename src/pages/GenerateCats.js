import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Cookies from 'universal-cookie';
import Spinner from 'react-bootstrap/Spinner';

import './GenerateCats.css';

const cols = [];
const cookies = new Cookies()

function GridCard(props) {
  return (
    <Col>
      <Card className='cards'>
        <Card.Body>
          <Card.Title className='center'>{props.title}</Card.Title>
          <Spinner animation="border" variant="primary" className='center' id="spin" />
          <Card.Img src={props.url} onLoad={() => document.getElementById("spin").remove()}></Card.Img>
        </Card.Body>
      </Card>
      <br />
    </Col>
  );
}

function CatGrid() {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  return (
    <div>
      <Row xs={1} md={4} className="catgrid">
        {cols}
      </Row>
      <Button className='genbutton' onClick={() => {
        fetch("https://cataas.com/cat").then(response => response.url).then(data => {
          setUrl(data)
        });
        fetch("http://localhost:8080/home/films/random").then(response => response.json()).then(data => setName(data.title))
        setUrl();


        if (name != "" && url != "") {
          cols.push(<GridCard title={name} url={url} key={name} />)
        }

      }}>Generate</Button>
    </div>
  );
}

function GenerateCats() {
  return (
    <div>
      <br />
      <CatGrid data={cols} />
    </div>
  )
};

export default GenerateCats;