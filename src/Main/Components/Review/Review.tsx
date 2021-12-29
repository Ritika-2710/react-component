import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Heading from "../MainHeading/Heading";
import "./review.css"
const Review = ({page6}) => {
    return(
        <section className={"review"}>
            <Container>
                <Row>
                   <Col>
                     <Heading heading={"What they Say"}/>
                   </Col>
                </Row>
                <Row>
                    {
                        page6.review.map((value,index)=>{
                            return <Col md={6} lg={4} className={"review-col"} key={index}>
                                <div className={"review-images"}>
                                    <img src={value.image} alt={"Image not found"}/>
                                    <div className={"review-para"}>
                                        <h5>{value.title}</h5>
                                        <h5>{value.text}</h5>
                                    </div>
                                </div>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}
export default Review