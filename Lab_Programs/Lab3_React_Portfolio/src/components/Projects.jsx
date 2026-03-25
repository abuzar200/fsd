import React from 'react';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      desc: 'A full-stack e-commerce solution with React and Node.js.',
      img: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Analytics Dashboard',
      desc: 'Interactive data visualization dashboard using Chart.js.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Bootstrap', 'Chart.js']
    },
    {
      title: 'Social App',
      desc: 'Real-time social media application with WebSockets.',
      img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Express', 'Socket.io']
    }
  ];

  return (
    <section id="projects" className="py-5 bg-white min-vh-100">
      <Container className="py-5 mt-5">
        <div className="mb-5 animate-fade-in text-center">
          <h2 className="display-4 section-title mb-3">Creative Portfolio</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            A curated selection of projects where I've blended technical skill with creative vision.
          </p>
        </div>
        
        <Row className="g-4 g-lg-5">
          {projects.map((project, idx) => (
            <Col lg={4} md={6} key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="project-card d-flex flex-column">
                <div className="card-img-wrapper">
                  <img src={project.img} alt={project.title} className="project-img w-100 h-100 object-fit-cover" />
                </div>
                <div className="p-4 pt-2">
                  <div className="mb-2">
                    {project.tags.map(tag => (
                      <span className="me-2 text-primary fw-bold" style={{ fontSize: '0.7rem', textTransform: 'uppercase' }} key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="fw-bold fs-4 mb-3" style={{ letterSpacing: '-0.5px' }}>{project.title}</h3>
                  <p className="text-muted mb-4 small flex-grow-1">
                    {project.desc}
                  </p>
                  <Button variant="link" className="p-0 text-decoration-none fw-bold text-dark border-bottom border-2 border-dark rounded-0" style={{ width: 'fit-content' }}>
                    View Case Study
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
