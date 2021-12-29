import {Col, Row} from "react-bootstrap";
import "./newscard.css"
import Carousel from "react-multi-carousel";
const Newscard = ({page8}) => {
    return(
            <Row className={"newscard"}>
                {page8.images.map((value,index) => {
                    return <div className={"newscard-div"} key={index}>
                        <img src={value.image} alt={"Image not Found"}/>
                        <div>
                            <p className={"para-card"}>Posted By <span>{value.title}</span></p>
                            <h5 className={"card-heading"}>{value.text}</h5>
                        </div>
                    </div>
                })
                }
                <div className={"news-button"}>
                    <button>view more</button>
                </div>
            </Row>
    )
}
export default Newscard