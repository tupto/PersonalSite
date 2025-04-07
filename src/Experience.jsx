import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router'

function Experience() {
    
    return (
        <section id="experience" className="pt-3 bg-light">
        <Container>
          <h2 className="text-center mb-5">Work Experience</h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="position-relative pb-5">
                <div className="position-absolute top-0 bottom-0 start-0" style={{ width: '2px', backgroundColor: '#dee2e6', marginLeft: '7px' }}></div>
                
                <div className="d-flex mb-4">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '16px', height: '16px', minWidth: '16px', zIndex: 1 }}></div>
                  <div className="ms-4">
                    <h3 className="h5">Software Engineer</h3>
                    <p className="text-muted mb-1">Inspirometer Ltd | January 2016 - June 2020</p>
                    <Card className="border-0 shadow-sm">
                      <Card.Body>
                        <ul className="mb-0">
                          <li>Developed and maintained the Inspirometer website front and backends with PHP, HTML, JavaScript, and CSS</li>
                          <li>Created, developed, and maintained the Inspirometer for Outlook plugin using C# and a PHP backend, which later became a core part of the company's service</li>
                          <li>Developed a new service platform for Inspirometer with Vue, Bootstrap, and Javascript</li>
                          <li>Provided over-the-phone troubleshooting with clients</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                
                <div className="d-flex mb-4">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '16px', height: '16px', minWidth: '16px', zIndex: 1 }}></div>
                  <div className="ms-4">
                    <h3 className="h5">Junior Developer</h3>
                    <p className="text-muted mb-1">Silver Lined Solutions | October 2015 - January 2016</p>
                    <Card className="border-0 shadow-sm">
                      <Card.Body>
                        <ul className="mb-0">
                          <li>Built pages and controllers with Apex, Visualforce, HTML, CSS and JavaScript for the CRM Salesforce</li>
                          <li>Occasionally used Node JS to write server backends</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                
                <div className="d-flex mb-4">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '16px', height: '16px', minWidth: '16px', zIndex: 1 }}></div>
                  <div className="ms-4">
                    <h3 className="h5">Intern</h3>
                    <p className="text-muted mb-1">Sumitomo Mitsui Banking Corporation Europe | June 2015 - September 2015</p>
                    <Card className="border-0 shadow-sm">
                      <Card.Body>
                        <ul className="mb-0">
                          <li>Wrote web services and web pages using Metastorm BPM, ASP.NET and C#</li>
                          <li>Implemented code from written change requests</li>
                          <li>Wrote application documentation for web services</li>
                          <li>Worked as a team to design, create and maintain web applications including: report approval processing; an application gateway and UI utilities such as autocomplete</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                
                <div className="d-flex">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '16px', height: '16px', minWidth: '16px', zIndex: 1 }}></div>
                  <div className="ms-4">
                    <h3 className="h5">Sales Consultant</h3>
                    <p className="text-muted mb-1">Ecigwizard RMU Ltd. | April 2015 - October 2015</p>
                  </div>
                </div>
                
                <div className="d-flex mt-4">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '16px', height: '16px', minWidth: '16px', zIndex: 1 }}></div>
                  <div className="ms-4">
                    <h3 className="h5">Work Placement</h3>
                    <p className="text-muted mb-1">Essex County Council | June 2012 - July 2012</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
}

export default Experience