import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const FeaturedCard = ({ ...item }) => {
  return (
    <Card className='mb-5'>
      <Card.Img variant="top" src={item.image} style={{ height: '300px', padding: '20px' }} />
      <Card.Body>
        <Card.Title style={{ height: '100px', overflow: 'auto' }}><h3>{item.title}</h3></Card.Title>
        <Card.Text>
          ${item.price}
        </Card.Text>
        <Link to={`/products/${item.id}`}>
          <Button variant="primary">Read More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default FeaturedCard
