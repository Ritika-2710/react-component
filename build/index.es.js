import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$c = ".test-component {\n    background-color: white;\n    border: 1px solid black;\n    padding: 16px;\n    width: 360px;\n    text-align: center;\n}\n.test-component .heading {\n    font-size: 64px;\n}\n.test-component.test-component-secondary {\n     background-color: black;\n     color: white;\n }\n";
styleInject(css_248z$c);

var TestComponent = function (_a) {
    var theme = _a.theme;
    return (React.createElement("div", { "data-testid": "test-component", className: "test-component test-component-".concat(theme) },
        React.createElement("h1", { className: "heading" }, "I'm the test component")));
};

var css_248z$b = ":root {\r\n    --darkbrown:#c16204;\r\n    --orange:#fd7d00;\r\n    --lightorange:#f38f4d;\r\n    --darkorange:#fb8a47;\r\n    --peach:#ffeddf;\r\n    --far-white:#fffaf6;\r\n    --creamish:#ffe3cb;\r\n    --lightpeach:#faeeee;\r\n    --foot_color:#fd8201;\r\n    --text-color:#ffffff;\r\n    --lightgray:#d3d3d3;\r\n}\r\nbody {\r\n    background: #fefaf6;\r\n}\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.para-text\r\n{\r\n    font-size:14px;\r\n    margin-bottom: 10px;\r\n}";
styleInject(css_248z$b);

var css_248z$a = ".brodcast-functions {\r\n    position: relative;\r\n    z-index: 10;\r\n    margin-top: 250px;\r\n}\r\n@media (min-width: 991px) {\r\n    .brodcast-functions .functions {\r\n        padding: 0 100px;\r\n    }\r\n}\r\n.brodcast-functions .functions .function-parent {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 25px 0;\r\n    box-shadow: 0 1px 1px 1px #d3d3d3;\r\n    border-radius: 8px;\r\n    margin-bottom: -3%;\r\n    margin-top: -15px;\r\n    z-index: 1;\r\n    background: #fff;\r\n}\r\n.brodcast-functions .functions .function-parent .function-col {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n.brodcast-functions .functions .function-parent .function-col .function-image {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 90px;\r\n    height: 90px;\r\n}\r\n.brodcast-functions .functions .function-parent .function-col .function-image img {\r\n    width: 100%;\r\n}\r\n.brodcast-functions .functions .function-parent .function-col h6:hover {\r\n    cursor: pointer;\r\n    color: coral;\r\n}\r\n.brodcast-functions .functions .function-parent .border-lines:not(:last-child) {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n.brodcast-functions .functions .function-parent .border-lines:not(:last-child) .line {\r\n    width: 4px;\r\n    height: 20px;\r\n    background: red;\r\n    margin-top: 20px;\r\n}\r\n@media (max-width: 590px) {\r\n    .brodcast-functions .functions .function-parent .border-lines:not(:last-child) {\r\n        display: none;\r\n    }\r\n}\r\n@media (max-width: 768px) {\r\n    .brodcast-functions .functions .function-parent {\r\n        justify-content: space-around;\r\n    }\r\n}\r\n@media (max-width: 590px) {\r\n    .brodcast-functions .functions {\r\n        width: 100%;\r\n        margin: 0;\r\n    }\r\n    .brodcast-functions .functions .function-parent {\r\n        display: block;\r\n        margin: 0;\r\n    }\r\n    .brodcast-functions .functions .function-parent .function-col {\r\n        margin-bottom: 20px;\r\n    }\r\n}\r\n.brodcast-functions .broadcast_left_parent {\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    position: relative;\r\n}\r\n@media (min-width: 991px) {\r\n    .brodcast-functions .broadcast_left_parent .pipeline {\r\n        width: 3px;\r\n        display: block;\r\n        height: 20%;\r\n        top: 0;\r\n        position: absolute;\r\n        left: calc(100% - 1.5px);\r\n        background-color: white;\r\n    }\r\n    .brodcast-functions .broadcast_left_parent .pipeline1 {\r\n        top: 15%;\r\n    }\r\n    .brodcast-functions .broadcast_left_parent .pipeline2 {\r\n        top: calc(15% + 25%);\r\n    }\r\n    .brodcast-functions .broadcast_left_parent .pipeline3 {\r\n        top: calc(15% + 50% + 5px);\r\n    }\r\n}\r\n.brodcast-functions .broadcast_left_parent .broadcast_left {\r\n    background: var(--lightorange);\r\n    display: flex;\r\n}\r\n.brodcast-functions .broadcast_left_parent .broadcast_left .broadcast_left_image {\r\n    width: 300px;\r\n}\r\n.brodcast-functions .broadcast_left_parent .broadcast_left .broadcast_left_image img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.brodcast-functions .broadcast_left_parent .broadcast_left .content {\r\n    flex: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n.brodcast-functions .broadcast_left_parent .broadcast_left .content h3 {\r\n    text-transform: capitalize;\r\n    color: white;\r\n    position: relative;\r\n}\r\n.brodcast-functions .broadcast_left_parent .broadcast_left .content h3:after {\r\n    width: 80%;\r\n    content: '';\r\n    position: absolute;\r\n    height: 3px;\r\n    border-radius: 4px;\r\n    background-color: var(--text-color);\r\n    left: 10%;\r\n    top: 105%;\r\n}\r\n.brodcast-functions .broadcast_left_parent .broadcast_left .content p.title {\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 18px;\r\n}\r\n.brodcast-functions .broadcast_left_parent .broadcast_left .content p.sub-text {\r\n    text-align: center;\r\n    color: white;\r\n    margin-bottom: 0;\r\n}\r\n@media (max-width: 992px) {\r\n    .brodcast-functions .broadcast_left_parent .broadcast_left {\r\n        display: block;\r\n    }\r\n    .brodcast-functions .broadcast_left_parent .broadcast_left .broadcast_left_image {\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        padding-top: 50px;\r\n    }\r\n}\r\n.brodcast-functions .broadcast_right_parent {\r\n    display: flex;\r\n    background-color: var(--darkorange);\r\n}\r\n.brodcast-functions .broadcast_right_parent .broadcast_right {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.brodcast-functions .broadcast_right_parent .broadcast_right h3 {\r\n    font-size: 28px;\r\n    text-align: center;\r\n    color: var(--text-color);\r\n    position: relative;\r\n    margin-top: 10px;\r\n}\r\n.brodcast-functions .broadcast_right_parent .broadcast_right h3 img {\r\n    width: 40px;\r\n    position: absolute;\r\n    left: 4%;\r\n}\r\n.brodcast-functions .broadcast_right_parent .broadcast_right p {\r\n    color: var(--text-color);\r\n    text-align: center;\r\n}\r\n@media (min-width: 991px) {\r\n    .brodcast-functions .broadcast_right_parent {\r\n        padding-left: 0;\r\n        padding-right: 0;\r\n    }\r\n}\r\n.brodcast-functions .broadcast_padding {\r\n    padding: 45px 40px;\r\n}\r\n@media (max-width: 1286px) {\r\n    .brodcast-functions {\r\n        margin-top: 100px;\r\n    }\r\n}\r\n@media (max-width: 1145px) {\r\n    .brodcast-functions {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n@media (max-width: 1100px) {\r\n    .brodcast-functions {\r\n        margin-top: 20px;\r\n    }\r\n}\r\n@media (max-width: 995px) {\r\n    .brodcast-functions {\r\n        margin-top: 0;\r\n    }\r\n}\r\n";
styleInject(css_248z$a);

var Brodcast = function (_a) {
    var page3 = _a.page3, page4 = _a.page4;
    return (React.createElement("section", { className: "brodcast-functions" },
        React.createElement(Container, { className: "functions" },
            React.createElement(Row, null,
                React.createElement("div", { className: "function-parent" }, page3.func_img.map(function (value, index) {
                    return React.createElement(React.Fragment, { key: index },
                        React.createElement(Col, { md: 3, lg: 3, className: "function-col" },
                            React.createElement("div", { className: "function-image" },
                                React.createElement("img", { src: value.image, alt: "Image not found" })),
                            React.createElement("h6", { className: "mt-3" }, value.title)),
                        React.createElement("div", { className: "border-lines" },
                            React.createElement("span", { className: "line" }),
                            React.createElement("span", { className: "line" }),
                            React.createElement("span", { className: "line" })));
                })))),
        React.createElement(Container, { fluid: true },
            React.createElement(Row, null,
                React.createElement(Col, { lg: 6, className: "broadcast_left_parent" },
                    React.createElement("div", { className: "broadcast_left" },
                        React.createElement("div", { className: "broadcast_left_image" },
                            React.createElement("img", { src: page4.brodcast_image, alt: "swaminarayan" })),
                        React.createElement("div", { className: "content broadcast_padding" },
                            React.createElement("h3", null, page4.title),
                            React.createElement("p", { className: "title" }, page4.sub_title),
                            React.createElement("p", { className: "sub-text", dangerouslySetInnerHTML: { __html: page4.description } }))),
                    React.createElement("div", { className: "pipeline pipeline1" }),
                    React.createElement("div", { className: "pipeline pipeline2" }),
                    React.createElement("div", { className: "pipeline pipeline3" })),
                React.createElement(Col, { lg: 6, className: "broadcast_right_parent broadcast_padding" },
                    React.createElement("div", { className: "broadcast_right" },
                        React.createElement("h3", { dangerouslySetInnerHTML: { __html: page4.quote_text } }),
                        React.createElement("p", { dangerouslySetInnerHTML: { __html: page4.quote_subtext } })))))));
};

var css_248z$9 = ".aboutdiv-col {\r\n    margin-top: 4%;\r\n}\r\n.aboutdiv-col .aboutdiv {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: white;\r\n    flex-direction: column;\r\n    padding: 40px 20px;\r\n    border-radius: 8px;\r\n    height: 350px;\r\n    text-align: center;\r\n}\r\n.aboutdiv-col .aboutdiv .aboutdiv-image img {\r\n    width: 100%;\r\n}\r\n.aboutdiv-col .aboutdiv .aboutdiv-heading {\r\n    padding-bottom: 10px;\r\n    border-bottom: 2px solid coral;\r\n}\r\n.aboutdiv-col .aboutdiv .aboutdiv-para {\r\n    font-weight: 600;\r\n}\r\n";
styleInject(css_248z$9);

var AboutDiv = function (_a) {
    var aboutdiv = _a.aboutdiv;
    console.log("AboutDiv.js>4", aboutdiv);
    return (React.createElement(Row, null, aboutdiv.map(function (value, index) {
        return React.createElement(Col, { md: 6, lg: 3, className: "aboutdiv-col", key: index },
            React.createElement("div", { className: "aboutdiv" },
                React.createElement("div", { className: "aboutdiv-image" },
                    React.createElement("img", { src: value.image, alt: "Image not found" })),
                React.createElement("h4", { className: "aboutdiv-heading mt-4" }, value.title),
                React.createElement("p", { className: "aboutdiv-para" }, value.text)));
    })));
};

var css_248z$8 = ".about {\r\n    padding-top: 100px;\r\n    position: relative;\r\n    padding-bottom: 40px;\r\n    background-color: var(--peach);\r\n}\r\n.about .about-img {\r\n    position: absolute;\r\n    top: 20%;\r\n    left: -1%;\r\n    transform: rotate(180deg);\r\n}\r\n@media (max-width: 992px) {\r\n    .about .about-img {\r\n        display: none;\r\n    }\r\n}\r\n.about .about-heading {\r\n    width: fit-content;\r\n    padding-bottom: 5px;\r\n    border-bottom: 2px solid coral;\r\n}\r\n.about .about-para {\r\n    font-weight: 600;\r\n}\r\n";
styleInject(css_248z$8);

var About = function (_a) {
    var page5 = _a.page5;
    return (React.createElement("section", { className: "about" },
        React.createElement("img", { className: "about-img", src: page5.about_image, alt: "Image not found" }),
        React.createElement(Container, null,
            React.createElement(Row, null,
                React.createElement(Col, { lg: 6 },
                    React.createElement("h5", { className: "about-heading" }, page5.about_heading),
                    React.createElement("h2", { className: "about-subheading", dangerouslySetInnerHTML: { __html: page5.about_subheading } })),
                React.createElement(Col, { lg: 6 },
                    React.createElement("p", { className: "about-para" }, page5.about_para1),
                    React.createElement("p", { className: "about-para" }, page5.about_para2))),
            React.createElement(AboutDiv, { aboutdiv: page5.about_values }))));
};

var css_248z$7 = ".heading-col {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    position: relative;\r\n    margin-bottom: 4%;\r\n}\r\n.heading-col .heading {\r\n    text-transform: uppercase;\r\n}\r\n.heading-col img {\r\n    position: absolute;\r\n    width: fit-content;\r\n    top: 30px;\r\n}\r\n";
styleInject(css_248z$7);

var Heading = function (props) {
    return (React.createElement(Row, null,
        React.createElement(Col, { lg: 12, className: "heading-col" },
            React.createElement("h2", { className: "heading" }, props.heading),
            React.createElement("img", { src: "/Images/Seperator.png", alt: "underline" }))));
};

var css_248z$6 = ".review {\r\n    background: var(--far-white);\r\n    padding-top: 100px;\r\n    padding-bottom: 50px;\r\n}\r\n.review .review-col {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.review .review-col .review-images {\r\n    position: relative;\r\n    margin-bottom: 20px;\r\n}\r\n.review .review-col .review-images img {\r\n    width: 100%;\r\n    border-radius: 8px;\r\n}\r\n.review .review-col .review-images .review-para {\r\n    background-color: #fff2dac9;\r\n    position: absolute;\r\n    bottom: 15px;\r\n    padding: 0 10px;\r\n}\r\n";
styleInject(css_248z$6);

var Review = function (_a) {
    var page6 = _a.page6;
    return (React.createElement("section", { className: "review" },
        React.createElement(Container, null,
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Heading, { heading: "What they Say" }))),
            React.createElement(Row, null, page6.review.map(function (value, index) {
                return React.createElement(Col, { md: 6, lg: 4, className: "review-col", key: index },
                    React.createElement("div", { className: "review-images" },
                        React.createElement("img", { src: value.image, alt: "Image not found" }),
                        React.createElement("div", { className: "review-para" },
                            React.createElement("h5", null, value.title),
                            React.createElement("h5", null, value.text))));
            })))));
};

var css_248z$5 = ".calendar {\r\n    padding-top: 70px;\r\n    padding-bottom: 50px;\r\n    background-color: var(--far-white);\r\n}\r\n.calendar .calendar-heading {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.calendar .calendar-heading .heading {\r\n    width: fit-content;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n    padding-bottom: 10px;\r\n    margin-right: 30px;\r\n    color: #ec7510;\r\n}\r\n.calendar .calendar-heading .active {\r\n    color: #000;\r\n    width: fit-content;\r\n    border-bottom: 2px solid coral;\r\n}\r\n@media (max-width: 512px) {\r\n    .calendar .calendar-heading {\r\n        display: block;\r\n        padding-left: 20px;\r\n        padding-top: 15px;\r\n    }\r\n    .calendar .calendar-heading .heading {\r\n        margin-top: 15px;\r\n    }\r\n}\r\n";
styleInject(css_248z$5);

var css_248z$4 = ".cal_container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 20px;\r\n    flex-direction: row;\r\n}\r\n.cal_container .cal_left {\r\n    position: relative;\r\n    border-top-left-radius: 8px;\r\n    border-bottom-left-radius: 8px;\r\n    min-width: 120px;\r\n    padding: 15px;\r\n    background-color: #f9d8b8;\r\n}\r\n.cal_container .cal_left .small_title {\r\n    text-transform: uppercase;\r\n    color: #000;\r\n    margin-bottom: 8px;\r\n    font-size: 13px;\r\n    text-align: center;\r\n    font-weight: 500;\r\n}\r\n.cal_container .cal_left .date {\r\n    text-transform: uppercase;\r\n    color: #000;\r\n    margin-bottom: 0;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n.cal_container .cal_left .line {\r\n    background-color: #c4494b;\r\n    margin: 0 2px;\r\n    height: 1px;\r\n    margin-left: -5px;\r\n    margin-right: -5px;\r\n}\r\n.cal_container .cal_left:before {\r\n    content: '';\r\n    display: block;\r\n    width: 15px;\r\n    height: 15px;\r\n    left: 100%;\r\n    top: 0;\r\n    clip-path: polygon(100% 100%, 0 0, 0 99%);\r\n    position: absolute;\r\n    background-color: #e2c7cc;\r\n}\r\n.cal_container .cal_left:after {\r\n    content: '';\r\n    display: block;\r\n    width: 15px;\r\n    height: 15px;\r\n    bottom: 0;\r\n    left: 100%;\r\n    clip-path: polygon(100% 0, 0 0, 0 99%);\r\n    position: absolute;\r\n    background-color: #e2c7cc;\r\n}\r\n.cal_container .cal_right {\r\n    z-index: 2;\r\n    background-color: white;\r\n    padding: 10px 10px 15px 15px;\r\n    width: 100%;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n.cal_container .cal_right .first {\r\n    margin-bottom: 7px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n.cal_container .cal_right .first p {\r\n    font-size: 15px;\r\n    color: #000;\r\n    margin-bottom: 0;\r\n}\r\n.cal_container .cal_right .first img {\r\n    width: 25px;\r\n    height: 25px;\r\n    object-fit: contain;\r\n}\r\n.cal_container .cal_right .title {\r\n    font-size: 16px;\r\n    color: #000;\r\n    margin-bottom: 0;\r\n    font-weight: 500;\r\n}\r\n";
styleInject(css_248z$4);

var Cal = function (_a) {
    var data = _a.data;
    return (React.createElement(Col, { md: 6, lg: 4 },
        React.createElement("div", { className: "cal_container" },
            React.createElement("div", { className: "cal_left" },
                React.createElement("p", { className: "small_title" }, data.day),
                React.createElement("p", { className: "date" }, data.month),
                React.createElement("div", { className: "line" }),
                React.createElement("p", { className: "date" }, data.date)),
            React.createElement("div", { className: "cal_right" },
                React.createElement("div", { className: "first" },
                    React.createElement("p", null, data.event_title),
                    React.createElement("img", { src: "/Images/Group 30.png", alt: "radio" })),
                React.createElement("p", { className: "title" }, data.event_describe)))));
};

var Calendar = function (_a) {
    var page7 = _a.page7;
    var getCalendar = function () {
        var result;
        result = page7.calendar.map(function (e, i) {
            return React.createElement(Cal, { data: e, key: i });
        });
        return result;
    };
    return (React.createElement("section", { className: "calendar" },
        React.createElement(Container, null,
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement(Heading, { heading: "Calendar" }))),
            React.createElement(Row, null,
                React.createElement(Col, { className: "calendar-heading" },
                    React.createElement("h3", { className: "heading active" }, page7.heading1),
                    React.createElement("h3", { className: "heading" }, page7.heading2))),
            React.createElement(Row, { className: "mt-5" }, getCalendar()))));
};

var css_248z$3 = ".news {\r\n    background: var(--far-white);\r\n    padding-top: 70px;\r\n    padding-bottom: 40px;\r\n}\r\n.news .news-card {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    margin: 15px;\r\n}\r\n.news .news-card img {\r\n    width: 100%;\r\n}\r\n.news .news-card div {\r\n    padding: 10px 15px 30px 15px;\r\n}\r\n.news .news-card div .para-card {\r\n    margin-bottom: 0;\r\n}\r\n.news .news-card div .para-card span {\r\n    color: darkred;\r\n}\r\n.news .news-card div .card-heading {\r\n    margin-top: 5px;\r\n    margin-right: 20px;\r\n}\r\n.news .news-card:hover {\r\n    box-shadow: 0 2px 2px 1px #d3d3d3;\r\n    border-radius: 8px;\r\n    background: #fff;\r\n    cursor: pointer;\r\n}\r\n.news .news-button {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.news .news-button button {\r\n    width: fit-content;\r\n    padding: 10px 15px;\r\n    font-size: 17px;\r\n    text-transform: uppercase;\r\n    color: var(--text-color);\r\n    background-image: linear-gradient(to right, red, orange);\r\n    border-radius: 8px;\r\n    border: none;\r\n    outline: none;\r\n    text-align: center;\r\n}\r\n@media (max-width: 768px) {\r\n    .news .news-card {\r\n        display: none;\r\n    }\r\n    .news .news-button {\r\n        display: none;\r\n    }\r\n}\r\n";
styleInject(css_248z$3);

var css_248z$2 = ".newscard {\r\n    display: none;\r\n}\r\n@media (max-width: 768px) {\r\n    .newscard {\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n    .newscard .newscard-div {\r\n        display: flex;\r\n        justify-content: center;\r\n        flex-direction: column;\r\n        margin: 15px;\r\n    }\r\n    .newscard .newscard-div img {\r\n        width: 100%;\r\n    }\r\n    .newscard .newscard-div div {\r\n        margin: 15px 0;\r\n    }\r\n    .newscard .newscard-div div .para-card {\r\n        margin-bottom: 0;\r\n    }\r\n    .newscard .newscard-div div .para-card span {\r\n        color: darkred;\r\n    }\r\n    .newscard .newscard-div div .card-heading {\r\n        margin-top: 5px;\r\n        margin-right: 20px;\r\n    }\r\n}\r\n";
styleInject(css_248z$2);

var Newscard = function (_a) {
    var page8 = _a.page8;
    return (React.createElement(Row, { className: "newscard" },
        page8.images.map(function (value, index) {
            return React.createElement("div", { className: "newscard-div", key: index },
                React.createElement("img", { src: value.image, alt: "Image not Found" }),
                React.createElement("div", null,
                    React.createElement("p", { className: "para-card" },
                        "Posted By ",
                        React.createElement("span", null, value.title)),
                    React.createElement("h5", { className: "card-heading" }, value.text)));
        }),
        React.createElement("div", { className: "news-button" },
            React.createElement("button", null, "view more"))));
};

var responsive = {
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
var News = function (_a) {
    var deviceType = _a.deviceType, page8 = _a.page8;
    return (React.createElement("section", { className: "news" },
        React.createElement(Container, null,
            React.createElement(Heading, { heading: "News" }),
            React.createElement(Row, null,
                React.createElement(Col, { lg: 12 },
                    React.createElement(Carousel, { ssr: true, partialVisbile: true, deviceType: deviceType, itemClass: "image-item", responsive: responsive }, page8.images.map(function (value, index) {
                        return React.createElement("div", { className: "news-card", key: index },
                            React.createElement("img", { src: value.image, alt: "Image not Found" }),
                            React.createElement("div", null,
                                React.createElement("p", { className: "para-card" },
                                    "Posted By ",
                                    React.createElement("span", null, value.title)),
                                React.createElement("h5", { className: "card-heading" }, value.text)));
                    })),
                    React.createElement("div", { className: "news-button" },
                        React.createElement("button", null, "view more")),
                    React.createElement(Newscard, { page8: page8 }))))));
};

var css_248z$1 = ".maps {\r\n    padding-top: 70px;\r\n    padding-bottom: 50px;\r\n    background: var(--creamish);\r\n}\r\n.maps .maps-para {\r\n    width: fit-content;\r\n    padding-bottom: 5px;\r\n    margin-right: 15%;\r\n    border-bottom: 2px solid var(--orange);\r\n}\r\n@media (max-width: 992px) {\r\n    .maps .maps-para {\r\n        font-size: 25px;\r\n        margin-right: 50%;\r\n        margin-left: 10px;\r\n    }\r\n    .maps .maps-heading {\r\n        margin-left: 10px;\r\n        margin-bottom: 15px;\r\n    }\r\n}\r\n@media (max-width: 600px) {\r\n    .maps .maps-para {\r\n        margin-right: 30%;\r\n    }\r\n}\r\n.maps .maps-heading {\r\n    text-transform: uppercase;\r\n}\r\n.maps .maps-name-col {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.maps .maps-name-col .maps-name {\r\n    width: 100%;\r\n    height: 120px;\r\n    margin: 5px;\r\n    padding: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 8px;\r\n    background: #fff;\r\n    cursor: pointer;\r\n}\r\n.maps .maps-name-col .maps-name:hover {\r\n    box-shadow: 0px 1px 1px 1px var(--lightgray);\r\n}\r\n@media (max-width: 992px) {\r\n    .maps .maps-name-col .maps-name {\r\n        margin-bottom: 15px;\r\n    }\r\n}\r\n";
styleInject(css_248z$1);

var Maps = function (_a) {
    var page9 = _a.page9;
    return (React.createElement("section", { className: "maps" },
        React.createElement(Container, null,
            React.createElement(Row, null,
                React.createElement(Col, { lg: 2 },
                    React.createElement("h6", { className: "maps-para" }, page9.title),
                    React.createElement("h3", { className: "maps-heading" }, page9.heading)),
                React.createElement(Col, { lg: 10, className: "ml-2" },
                    React.createElement(Row, null,
                        page9.maps_name.map(function (value, index) {
                            return React.createElement(Col, { xs: 6, sm: 6, md: 6, lg: 2, key: index, className: "maps-name-col" },
                                React.createElement("div", { className: "maps-name" },
                                    React.createElement("h3", null, value)));
                        }),
                        React.createElement(Col, { lg: 2 })))))));
};

var css_248z = ".websites {\r\n    background: var(--lightpeach);\r\n    padding-top: 100px;\r\n    padding-bottom: 50px;\r\n}\r\n.websites .website-col {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    position: relative;\r\n}\r\n.websites .website-col .website-heading {\r\n    text-transform: uppercase;\r\n}\r\n.websites .website-col img {\r\n    position: absolute;\r\n    width: fit-content;\r\n    top: 30px;\r\n}\r\n.websites .website-row {\r\n    margin-top: 3%;\r\n}\r\n.websites .website-row .website-image {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    padding-top: 15px;\r\n}\r\n.websites .website-row .website-image .website-image-parent {\r\n    width: 100%;\r\n    max-height: 200px;\r\n}\r\n.websites .website-row .website-image .website-image-parent img {\r\n    height: 100%;\r\n    object-fit: cover;\r\n    width: 100%;\r\n    border-radius: 8px;\r\n}\r\n.websites .website-row .website-image p {\r\n    font-weight: 600;\r\n    font-size: 17px;\r\n}\r\n@media (max-width: 992px) {\r\n    .websites .website-row .website-image {\r\n        width: 100%;\r\n        height: auto;\r\n        margin-bottom: 20px;\r\n    }\r\n    .websites .website-row .website-image .website-image-parent {\r\n        max-height: 300px;\r\n    }\r\n    .websites .website-row .website-image p {\r\n        font-size: 20px;\r\n    }\r\n}\r\n@media (max-width: 600px) {\r\n    .websites .website-row {\r\n        margin-top: 10%;\r\n    }\r\n    .websites .website-row .website-image {\r\n        width: 90%;\r\n    }\r\n}\r\n";
styleInject(css_248z);

var Websites = function (_a) {
    var page10 = _a.page10;
    console.log("Websites.js>5", page10);
    return (React.createElement("section", { className: "websites" },
        React.createElement(Container, null,
            React.createElement(Heading, { heading: "Our Websites" }),
            React.createElement(Row, { className: "website-row" }, page10.website.map(function (value, index) {
                return React.createElement(Col, { md: 6, lg: 3, key: index, className: "d-flex justify-content-center" },
                    React.createElement("div", { className: "website-image" },
                        React.createElement("div", { className: "website-image-parent" },
                            React.createElement("img", { src: value.image, alt: "Image" })),
                        React.createElement("p", { className: "mt-2" }, value.text)));
            })))));
};

var main = {
    page3: {
        func_img: [
            {
                image: "/Images/event1.png",
                title: "Live Darshan"
            },
            {
                image: "/Images/event2.png",
                title: "Online Quiz"
            },
            {
                image: "/Images/event3.png",
                title: "Upcoming Mahotsav"
            }
        ],
    },
    page4: {
        brodcast_image: "/Images/brodimage.png",
        title: "live broadcast",
        sub_title: "Maninagar Evening Katha Maninagar Mandir",
        description: " Sun 28th Nov, 7.15pm IST Local: Sun 29th Nov, 7:15pm IST",
        quote: "/Images/quote.png",
        quote_text: "God Himself remains forever <br/> within His idol forms and Sants",
        quote_subtext: "Vachanamrut Gadhada <br/> First section chapter 68"
    },
    page5: {
        about_image: "/Images/Flower-top.png",
        about_heading: "About Us",
        about_subheading: "Maninagar <br/> Swaminarayan Gadi Sansthan",
        about_para1: "Acharya Shree Jitendriyadasji Swamiji Maharaj is the current\n" +
            "spiritual leader of Maninagar Shree Swaminarayan\n" +
            "Gadi Sansthan.He is the heir to Acharya Shree Purushottampriyadasji Swamishree Maharaj.\n" +
            "and sixth in the lineage of ascetic Acharyas, which descends directly from Lord Shree Swaminarayan.",
        about_para2: "His divine Holiness Acharya Swamishree is the Spiritual Leader\n" +
            "of Shree Swaminarayan Gadi Sansthan,a Worldwide Centre for Spiritual, Cultural\n" +
            "and Social Welfare.",
        about_values: [
            {
                image: "/Images/spiritual.png",
                title: "Who we are",
                text: "Maninagar Shree Swaminarayan Gadi Sansthan is the worldwide centre for siritual,cultural and social welfare.",
            },
            {
                image: "/Images/wisdom.png",
                title: "Who we do",
                text: "At the occasion when Lord Swaminarayan first announced His True Eternal and Divine Name Swaminarayan.",
            },
            {
                image: "/Images/namaste.png",
                title: "Who people say",
                text: "Maninagar Shree Swaminarayan Gadi Sansthan is the worldwide centre for spiritual",
            },
            {
                image: "/Images/prayer.png",
                title: "Activities",
                text: "When Lord Swaminarayan come onto this earth,He was given initiation as a saint by shree Ramanand Swami.",
            }
        ]
    },
    page6: {
        review: [
            {
                image: "/Images/review1.png",
                title: "President Of India",
                text: "A P J Abdul Kalam",
            },
            {
                image: "/Images/review2.png",
                title: "India's Prime Minister",
                text: "Shri Narendra Modi",
            },
            {
                image: "/Images/review3.png",
                title: "Governor of India",
                text: "Shree Naval Kishor Sharma",
            },
            {
                image: "/Images/review1.png",
                title: "President Of India",
                text: "A P J Abdul Kalam",
            },
            {
                image: "/Images/review2.png",
                title: "India's Prime Minister",
                text: "Shri Narendra Modi",
            },
            {
                image: "/Images/review3.png",
                title: "Governor of India",
                text: "Shree Naval Kishor Sharma",
            },
        ]
    },
    page7: {
        heading1: "Upcoming",
        heading2: "sadguru din/ekadashi",
        calendar: [
            {
                day: "Tomorrow",
                month: "Nov",
                date: "FRI 19",
                event_title: "Karthik Sud, 15",
                event_describe: "Lunar Eclipse",
                image: "/Images/Group 30.png"
            },
            {
                day: "Tomorrow",
                month: "Nov",
                date: "FRI 19",
                event_title: "Karthik Sud, 15",
                event_describe: "Dev Diwali & Bhaktimata Jayanti",
                image: "/Images/Group 30.png"
            },
            {
                day: "9 Days Left",
                month: "Nov",
                date: "MON 29",
                event_title: "Karthik Sud, 15",
                event_describe: "Soja Patotsav",
                image: "/Images/Group 30.png"
            },
            {
                day: "10 Days Left",
                month: "Nov",
                date: "TUE 30",
                event_title: "Karthik Sud, 15",
                event_describe: "Utpati Ekadashi",
                image: "/Images/Group 30.png"
            },
            {
                day: "30 Days Left",
                month: "Nov",
                date: "SAT 04",
                event_title: "Karthik Sud, 15",
                event_describe: "Shree Sadguru Din",
                image: "/Images/Group 30.png"
            },
            {
                day: "35 days Left",
                month: "Nov",
                date: "THRUS 09",
                event_title: "Karthik Sud, 15",
                event_describe: "Soja Patotsav",
                image: "/Images/Group 30.png"
            },
        ]
    },
    page8: {
        images: [
            {
                image: "/Images/review2.png",
                title: "Maninagar Nov 15,2021",
                text: "Jeevanpran shree apji-bapashree maninagardham"
            },
            {
                image: "/Images/review1.png",
                title: "Maninagar Nov 15,2021",
                text: "Jeevanpran shree apji-bapashree maninagardham"
            },
            {
                image: "/Images/review3.png",
                title: "Maninagar Nov 15,2021",
                text: "Jeevanpran shree apji-bapashree maninagardham"
            },
            {
                image: "/Images/review2.png",
                title: "Maninagar Nov 15,2021",
                text: "Jeevanpran shree apji-bapashree maninagardham"
            },
            {
                image: "/Images/review1.png",
                title: "Maninagar Nov 15,2021",
                text: "Jeevanpran shree apji-bapashree maninagardham"
            },
        ]
    },
    page9: {
        title: "Maninagar Swaminarayan Gadi Sansthan",
        heading: "Worldwide",
        maps_name: ["India", "Europe", "USA", "Africa", "Far East"]
    },
    page10: {
        website: [
            {
                image: "/Images/review2.png",
                text: "Shree swaminarayan Mandir"
            },
            {
                image: "/Images/review1.png",
                text: "Shree swaminarayan Mandir"
            },
            {
                image: "/Images/review3.png",
                text: "Shree swaminarayan Mandir"
            },
            {
                image: "/Images/review2.png",
                text: "Shree swaminarayan Mandir"
            },
            {
                image: "/Images/review1.png",
                text: "Shree swaminarayan Mandir"
            },
            {
                image: "/Images/review3.png",
                text: "Shree swaminarayan Mandir"
            },
            {
                image: "/Images/review2.png",
                text: "Shree swaminarayan Mandir"
            },
            {
                image: "/Images/review3.png",
                text: "Shree swaminarayan Mandir"
            },
        ]
    }
};
// @ts-ignore
var Main = function (props) {
    var deviceType = props.deviceType;
    return (React.createElement("div", null,
        React.createElement(Brodcast, { page3: main.page3, page4: main.page4 }),
        React.createElement(About, { page5: main.page5 }),
        React.createElement(Review, { page6: main.page6 }),
        React.createElement(Calendar, { page7: main.page7 }),
        React.createElement(News, { deviceType: deviceType, page8: main.page8 }),
        React.createElement(Maps, { page9: main.page9 }),
        React.createElement(Websites, { page10: main.page10 })));
};

export { Main, TestComponent };
//# sourceMappingURL=index.es.js.map
