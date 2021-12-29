import React from "react";
import {Col, Row} from "react-bootstrap";
import "./aboutdiv.css"
const AboutDiv = ({aboutdiv}) => {
    console.log("AboutDiv.js>4",aboutdiv)
    return(
        <Row>
                {
                    aboutdiv.map((value,index)=>{
                        return <Col md={6} lg={3} className={"aboutdiv-col"} key={index}>
                           <div className={"aboutdiv"}>
                                <div className={"aboutdiv-image"}>
                                    <img src={value.image} alt={"Image not found"}/>
                                </div>
                                <h4 className={"aboutdiv-heading mt-4"}>{value.title}</h4>
                                <p className={"aboutdiv-para"}>{value.text}</p>
                           </div>
                        </Col>
                    })
                }
        </Row>
    )
}
export default AboutDiv