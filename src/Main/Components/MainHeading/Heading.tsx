import * as React from "react";
import {Col, Row} from "react-bootstrap";
import "./heading.css"
const Heading = (props) => {
    return(
          <Row>
              <Col lg={12} className={"heading-col"}>
                  <h2 className={"heading"}>{props.heading}</h2>
                  <img src={"/Images/Seperator.png"} alt={"underline"} />
              </Col>
          </Row>
    )
}
export default Heading;