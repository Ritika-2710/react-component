import * as React from "react";
import {Col} from "react-bootstrap";
import "./cal.css"
const Cal = ({data}) => {

    return (
        <Col md={6} lg={4}>
           <div className={"cal_container"}>
                <div className={"cal_left"}>
                    <p className={"small_title"}>{data.day}</p>
                    <p className={"date"}>{data.month}</p>
                    <div className={"line"}/>
                    <p className={"date"}>{data.date}</p>
                </div>
               <div className={"cal_right"}>
                    <div className={"first"}>
                        <p>{data.event_title}</p>
                        <img src={"/Images/Group 30.png"} alt={"radio"}/>
                    </div>
                   <p className={"title"}>{data.event_describe}</p>
               </div>
           </div>
        </Col>
    );
}
export default Cal