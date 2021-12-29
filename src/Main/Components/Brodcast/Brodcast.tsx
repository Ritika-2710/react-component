import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./Brodcast.css"
const Brodcast = ({page3,page4}) => {

    return(
        <section className={"brodcast-functions"}>
            <Container className={"functions"}>
                <Row>
                    <div className={"function-parent"}>
                        {
                            page3.func_img.map((value,index)=>{
                                return <React.Fragment key={index}>
                                    <Col md={3} lg={3} className={"function-col"}>
                                        <div className={"function-image"}>
                                            <img src={value.image} alt={"Image not found"}/>
                                        </div>
                                        <h6 className={"mt-3"}>{value.title}</h6>
                                    </Col>
                                    <div className={"border-lines"}>
                                        <span className={"line"}/>
                                        <span className={"line"}/>
                                        <span className={"line"}/>
                                    </div>
                                </React.Fragment>
                            })
                        }
                    </div>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col lg={6} className={"broadcast_left_parent"}>
                        <div className={"broadcast_left"}>
                            <div className={"broadcast_left_image"}>
                                <img src={page4.brodcast_image} alt={"swaminarayan"}/>
                            </div>
                            <div className={"content broadcast_padding"}>
                                <h3>{page4.title}</h3>
                                <p className={"title"}>{page4.sub_title}</p>
                                <p className={"sub-text"} dangerouslySetInnerHTML={{__html :page4.description}}/>
                            </div>
                        </div>
                        <div className={"pipeline pipeline1"}/>
                        <div className={"pipeline pipeline2"}/>
                        <div className={"pipeline pipeline3"}/>
                    </Col>
                    <Col lg={6} className={"broadcast_right_parent broadcast_padding"}>
                        <div className={"broadcast_right"}>
                            <h3 dangerouslySetInnerHTML={{__html:page4.quote_text}}/>
                            <p dangerouslySetInnerHTML={{__html:page4.quote_subtext}}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Brodcast;
