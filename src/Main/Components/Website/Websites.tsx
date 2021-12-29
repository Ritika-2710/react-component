import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./website.css"
import Heading from "../MainHeading/Heading";
const Websites = ({page10}) => {
    console.log("Websites.js>5",page10)
    return(
        <section className={"websites"}>
            <Container>
                <Heading heading={"Our Websites"}/>
                <Row className={"website-row"}>
                    {
                        page10.website.map((value,index)=>{
                           return <Col md={6} lg={3} key={index} className={"d-flex justify-content-center"}>
                               <div className={"website-image"}>
                                   <div className={"website-image-parent"}>
                                       <img src={value.image} alt={"Image"}/>
                                   </div>
                                   <p className={"mt-2"}>{value.text}</p>
                               </div>
                           </Col>
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}
export default Websites