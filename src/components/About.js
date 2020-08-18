import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import Aboutdesign from "./Aboutdesign";


class About extends React.Component {
    render() {
        return (
            <>
                <section className="section section-lg section-nucleo-icons pb-250">
                    <Container>
                        <Row className="justify-content-center">
                            <Col className="text-center" lg="8" font-weight-bolder>
                                <h2 className="display-3">What we do</h2>
                                <p className="lead">
                                    Get access to our updated <br />library of great books
                                With packed variety of industry professionals</p>
                                <div className="btn-wrapper">
                                    <Button
                                        color="primary"
                                        href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/icons?ref=adsr-landing-page"
                                    mb-5>
                                        View More
                  </Button>
                                    
                                </div>
                            </Col>
                        </Row>
                        
                    </Container>
                    <Aboutdesign />
                    <Container>
                    <Row className="row-grid justify-content-center">
                        <Col className="text-center" lg="6">
                            <h2 className="display-2">
                                Do you love what we do?
                                
                            </h2>
                            <p className="lead">
                                If you do, you can find the closest study group near you. 
                                Let's help you cultivate a reading culture today.
                            </p>
                            <div className="btn-wrapper">
                                <Button
                                    className="mb-3 mb-sm-0"
                                    color="primary"
                                    href="www.twitter.com/elizabethdevqueen"
                                >
                                    Join Us
                  </Button>
                            </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default About;