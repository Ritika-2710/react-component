import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Heading from "../MainHeading/Heading";
import "./news.css"
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Newscard from "./Newscard";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const News = ({deviceType,page8}) => {

    return(
        <section className={"news"}>
            <Container>
                <Heading heading={"News"}/>
                <Row>
                    <Col lg={12}>
                        <Carousel
                            ssr
                            partialVisbile
                            deviceType={deviceType}
                            itemClass="image-item"
                            responsive={responsive}
                        >
                            {page8.images.map((value,index) => {
                                return <div className={"news-card"} key={index}>
                                    <img src={value.image} alt={"Image not Found"}/>
                                    <div>
                                        <p className={"para-card"}>Posted By <span>{value.title}</span></p>
                                        <h5 className={"card-heading"}>{value.text}</h5>
                                    </div>
                                </div>
                            })
                            }
                        </Carousel>
                        <div className={"news-button"}>
                          <button>view more</button>
                        </div>
                        <Newscard page8={page8}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default News