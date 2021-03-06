import React from 'react';
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
    {
        src: require("../Assets/img/theme/img-1-1200x1000.jpg"),
        altText: "",
        caption: "",
        header: ""
    },
    {
        src: require("../Assets/img/theme/img-2-1200x1000.jpg"),
        altText: "",
        caption: "",
        header: ""
    },
    {
        src: require("../Assets/img/theme/img-3-1200x1000.jpg"),
        altText: "",
        caption: "",
        header: ""
    },
    {
        src: require("../Assets/img/theme/img-4-1200x1000.jpg"),
        altText: "",
        caption: "",
        header: ""
    }
];

class Aboutdesign extends React.Component {
    render() {
        return (
            <>
                <section className="section section-shaped">
                    <div className="shape shape-style-1 shape-default">
                        <span />
                        <span />
                        <span />
                        
                    </div>
                    <Container className="py-md">
                        <Row className="justify-content-between align-items-center">
                            <Col className="mb-5 mb-lg-0" lg="5">
                                <h1 className="text-black font-weight-bolder ">
                                    About WakawE
                </h1>
                                <p className="lead text-black mt-4">
                                    It's beautiful - and we haven't even done anything to it yet. Don't kill all your dark areas - you need them to show the light. And I know you're saying, 'Oh Bob, you've done it this time.' 
                </p>
                                <Button
                                    className="btn-blue mt-4"
                                    color="default"
                                    href="www.facebook.com/elizabethsajiboye"
                                >
                                    Check out our activities
                </Button>
                            </Col>
                            <Col className="mb-lg-auto" lg="6">
                                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                                    <UncontrolledCarousel items={items} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    {/* SVG separator */}
                    <div className="separator separator-bottom separator-skew">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon className="fill-red" points="2560 0 2560 100 0 100" />
                        </svg>
                    </div>
                </section>
            </>
        );
    }
}

export default Aboutdesign;