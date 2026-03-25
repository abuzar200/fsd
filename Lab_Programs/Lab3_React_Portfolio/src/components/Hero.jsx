import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Hero() {
  return (
    <div className="hero-wrapper">
      <section id="home" className="hero-section py-5 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} className="text-start animate-fade-in">
              <h1 className="display-1 hero-title mb-4">
                Designing <br />
                the <span style={{ color: '#fff', opacity: 0.8 }}>Future</span>
              </h1>
              <p className="lead text-white mb-5 pe-lg-5 fs-4" style={{ fontWeight: 400, opacity: 0.9 }}>
                I craft digital products that blend aesthetics with functionality. Expert in full-stack development and human-centric design.
              </p>
              <div className="d-flex gap-3">
                <Button className="hero-btn btn-primary-custom" href="#projects">
                  Explore Work
                </Button>
                <Button variant="outline-light" size="lg" href="#contact" className="hero-btn border-white border-opacity-25 text-white">
                  Let's Talk
                </Button>
              </div>
            </Col>
            <Col lg={5} className="d-none d-lg-block animate-float">
              <div className="p-5">
                 <div className="position-relative">
                    <div className="bg-primary opacity-25 position-absolute top-50 start-50 translate-middle w-100 h-100 rounded-circle" style={{ filter: 'blur(80px)' }}></div>
                    <div className="position-relative z-1 text-center">
                       <i className="bi bi-layers text-white display-1" style={{ fontSize: '8rem', opacity: 0.9 }}></i>
                    </div>
                 </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Hero;
