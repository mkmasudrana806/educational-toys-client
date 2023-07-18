import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './RegisterSection.css';

const RegisterSection = () => {
  return (
    <div className="register-section my-5">
      <Container>
        <h3 className="section-title">Unlock Your Toy Selling Potential with Us!</h3>
        <Row>
          <Col className='my-3' md={4}>
            <Card data-aos-duration="600" data-aos="fade-right" data-aos-easing="ease-in-sine" className="register-card">
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-photo/girl-with-tablet-cooking-kitchen_23-2147833973.jpg?size=626&ext=jpg"
                alt="Easy Toy Selling"
                className="register-image"
              />
              <Card.Body>
                <Card.Title>Easy Toy Showcase</Card.Title>
                <Card.Text>
                  Registering on our website allows you to easily sell your toys. You can list your toys with detailed
                  information, set your own prices, and reach a wide audience of potential buyers.So let's started with us. and enjoy your educational toys showcase
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className='my-3' md={4}>
            <Card data-aos-duration="600" data-aos="fade-up" data-aos-easing="ease-in-sine" className="register-card">
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-vector/online-toys-shop-background_1284-65124.jpg?size=626&ext=jpg"
                alt="Access to Toy Buyers"
                className="register-image"
              />
              <Card.Body>
                <Card.Title>Access to Toy Buyers</Card.Title>
                <Card.Text>
                  By registering, you gain access to a community of toy buyers who are actively looking for educational
                  toys. You can connect with potential customers, receive inquiries, and negotiate deals directly through
                  our platform. Easy to find the right buyers for your toys.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className='my-3' md={4}>
            <Card data-aos-duration="600"  data-aos="fade-left" data-aos-easing="ease-in-sine" className="register-card">
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-vector/kids-toys-design_24908-56648.jpg?size=626&ext=jpg"
                alt="Manage Your Toy Listings"
                className="register-image"
              />
              <Card.Body>
                <Card.Title>Manage Your Toy Listings</Card.Title>
                <Card.Text>
                  With a registered account, you can easily manage your toy listings. Update product details, track
                  inventory, and mark items as sold. Our user-friendly interface makes it convenient to stay organized
                  and keep your toy selling business running smoothly.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterSection;
