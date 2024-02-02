import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';

const Photos = () => {

  let [data, setdata] = useState([]);

  useState(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(function (response) {
        // handle success
        setdata(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  })

  return (
    <>
          <Row>
      {
        data.map((item, index) => {
          return (
            <Col className='g-2'>
                <Card style={{ width: '18rem' }} key={index}>
                  <Card.Img variant="top" src={item.url} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>{item.albumId}</ListGroup.Item>
                    <ListGroup.Item>{item.id}</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href={item.thumbnailUrl}>ThumbnailUrl</Card.Link>
                  </Card.Body>
                </Card>
                </Col>
          )
        })
      }
      </Row>

    </>
  )
}
export default Photos
