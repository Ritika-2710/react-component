import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Heading from "../MainHeading/Heading";
import "./calendar.css"
import Cal from "./Cal";
const Calendar = ({page7}) => {

    const getCalendar = () => {
        let result;
        result=page7.calendar.map((e,i)=>{
            return <Cal data={e} key={i}/>;
        })
        return result;
    }
    return(
        <section className={"calendar"}>
            <Container>
                <Row>
                    <Col>
                       <Heading heading={"Calendar"}/>
                    </Col>
                </Row>
                <Row>
                    <Col className={"calendar-heading"}>
                        <h3 className={"heading active"}>{page7.heading1}</h3>
                        <h3 className={"heading"}>{page7.heading2}</h3>
                    </Col>
                </Row>
                <Row className={"mt-5"}>
                    {
                        getCalendar()
                    }
                </Row>
            </Container>
        </section>
    )
}
export default Calendar