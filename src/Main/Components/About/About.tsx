import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import AboutDiv from "./AboutDiv";
import "./about.css"
const About = ({page5}) => {
    return(
        <section className={"about"}>
            <img className={"about-img"} src={page5.about_image} alt={"Image not found"}/>
            <Container>
                <Row>
                    <Col lg={6}>
                     <h5 className={"about-heading"}>{page5.about_heading}</h5>
                        <h2 className={"about-subheading"} dangerouslySetInnerHTML={{__html:page5.about_subheading}}/>
                    </Col>
                    <Col lg={6}>
                        <p className={"about-para"}>{page5.about_para1}
                        </p>
                        <p className={"about-para"}>{page5.about_para2}
                        </p>
                    </Col>
                </Row>
                <AboutDiv aboutdiv={page5.about_values}/>
            </Container>
        </section>
    )
}
export default About