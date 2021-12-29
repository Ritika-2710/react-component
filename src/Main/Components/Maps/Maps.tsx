import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./maps.css"
const Maps = ({page9}) => {
    return(
        <section className={"maps"}>
            <Container>
                <Row>
                    <Col lg={2}>
                        <h6 className={"maps-para"}>{page9.title}</h6>
                        <h3 className={"maps-heading"}>{page9.heading}</h3>
                    </Col>
                    <Col lg={10}  className={"ml-2"}>
                        <Row>
                            {
                                page9.maps_name.map((value,index)=>{
                                    return  <Col xs={6} sm={6} md={6} lg={2} key={index} className={"maps-name-col"}>
                                        <div className={"maps-name"}>
                                            <h3>{value}</h3>
                                        </div>
                                    </Col>
                                })
                            }
                            <Col lg={2}/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Maps