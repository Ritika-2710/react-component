import * as React$6 from 'react';
import React__default, { useContext } from 'react';
import { jsx } from 'react/jsx-runtime';

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

var css_248z$d = ".test-component {\n    background-color: white;\n    border: 1px solid black;\n    padding: 16px;\n    width: 360px;\n    text-align: center;\n}\n.test-component .heading {\n    font-size: 64px;\n}\n.test-component.test-component-secondary {\n     background-color: black;\n     color: white;\n }\n";
styleInject(css_248z$d);

var TestComponent$1 = function (_a) {
    var theme = _a.theme;
    return (React$6.createElement("div", { "data-testid": "test-component", className: "test-component test-component-".concat(theme) },
        React$6.createElement("h1", { className: "heading" }, "I'm the test component")));
};

var css_248z$c = ":root {\r\n    --darkbrown:#c16204;\r\n    --orange:#fd7d00;\r\n    --lightorange:#f38f4d;\r\n    --darkorange:#fb8a47;\r\n    --peach:#ffeddf;\r\n    --far-white:#fffaf6;\r\n    --creamish:#ffe3cb;\r\n    --lightpeach:#faeeee;\r\n    --foot_color:#fd8201;\r\n    --text-color:#ffffff;\r\n    --lightgray:#d3d3d3;\r\n}\r\nbody {\r\n    background: #fefaf6;\r\n}\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.para-text\r\n{\r\n    font-size:14px;\r\n    margin-bottom: 10px;\r\n}";
styleInject(css_248z$c);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var classnames = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames));

var classNames = classnames.exports;

const ThemeContext = /*#__PURE__*/React$6.createContext({
  prefixes: {}
});

function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = useContext(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}

const DEVICE_SIZES$1 = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
function useCol({
  as,
  bsPrefix,
  className,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'col');
  const spans = [];
  const classes = [];
  DEVICE_SIZES$1.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let span;
    let offset;
    let order;

    if (typeof propValue === 'object' && propValue != null) {
      ({
        span,
        offset,
        order
      } = propValue);
    } else {
      span = propValue;
    }

    const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';
    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
    if (order != null) classes.push(`order${infix}-${order}`);
    if (offset != null) classes.push(`offset${infix}-${offset}`);
  });
  return [{ ...props,
    className: classNames(className, ...spans, ...classes)
  }, {
    as,
    bsPrefix,
    spans
  }];
}
const Col = /*#__PURE__*/React$6.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(props, ref) => {
  const [{
    className,
    ...colProps
  }, {
    as: Component = 'div',
    bsPrefix,
    spans
  }] = useCol(props);
  return /*#__PURE__*/jsx(Component, { ...colProps,
    ref: ref,
    className: classNames(className, !spans.length && bsPrefix)
  });
});
Col.displayName = 'Col';
var Col$1 = Col;

const defaultProps = {
  fluid: false
};
const Container = /*#__PURE__*/React$6.forwardRef(({
  bsPrefix,
  fluid,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'container');
  const suffix = typeof fluid === 'string' ? `-${fluid}` : '-fluid';
  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    ...props,
    className: classNames(className, fluid ? `${prefix}${suffix}` : prefix)
  });
});
Container.displayName = 'Container';
Container.defaultProps = defaultProps;
var Container$1 = Container;

const DEVICE_SIZES = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const Row = /*#__PURE__*/React$6.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'row');
  const sizePrefix = `${decoratedBsPrefix}-cols`;
  const classes = [];
  DEVICE_SIZES.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let cols;

    if (propValue != null && typeof propValue === 'object') {
      ({
        cols
      } = propValue);
    } else {
      cols = propValue;
    }

    const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';
    if (cols != null) classes.push(`${sizePrefix}${infix}-${cols}`);
  });
  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    ...props,
    className: classNames(className, decoratedBsPrefix, ...classes)
  });
});
Row.displayName = 'Row';
var Row$1 = Row;

var css_248z$b = ".brodcast-functions {\r\n    position: relative;\r\n    z-index: 10;\r\n    margin-top: 250px;\r\n}\r\n@media (min-width: 991px) {\r\n    .brodcast-functions .functions {\r\n        padding: 0 100px;\r\n    }\r\n}\r\n.brodcast-functions .functions .function-parent {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 25px 0;\r\n    box-shadow: 0 1px 1px 1px #d3d3d3;\r\n    border-radius: 8px;\r\n    margin-bottom: -3%;\r\n    margin-top: -15px;\r\n    z-index: 1;\r\n    background: #fff;\r\n}\r\n.brodcast-functions .functions .function-parent .function-col {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n.brodcast-functions .functions .function-parent .function-col .function-image {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 90px;\r\n    height: 90px;\r\n}\r\n.brodcast-functions .functions .function-parent .function-col .function-image img {\r\n    width: 100%;\r\n}\r\n.brodcast-functions .functions .function-parent .function-col h6:hover {\r\n    cursor: pointer;\r\n    color: coral;\r\n}\r\n.brodcast-functions .functions .function-parent .border-lines:not(:last-child) {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n.brodcast-functions .functions .function-parent .border-lines:not(:last-child) .line {\r\n    width: 4px;\r\n    height: 20px;\r\n    background: red;\r\n    margin-top: 20px;\r\n}\r\n@media (max-width: 590px) {\r\n    .brodcast-functions .functions .function-parent .border-lines:not(:last-child) {\r\n        display: none;\r\n    }\r\n}\r\n@media (max-width: 768px) {\r\n    .brodcast-functions .functions .function-parent {\r\n        justify-content: space-around;\r\n    }\r\n}\r\n@media (max-width: 590px) {\r\n    .brodcast-functions .functions {\r\n        width: 100%;\r\n        margin: 0;\r\n    }\r\n    .brodcast-functions .functions .function-parent {\r\n        display: block;\r\n        margin: 0;\r\n    }\r\n    .brodcast-functions .functions .function-parent .function-col {\r\n        margin-bottom: 20px;\r\n    }\r\n}\r\n.brodcast-functions .broadcast_left_parent {\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    position: relative;\r\n}\r\n@media (min-width: 991px) {\r\n    .brodcast-functions .broadcast_left_parent .pipeline {\r\n        width: 3px;\r\n        display: block;\r\n        height: 20%;\r\n        top: 0;\r\n        position: absolute;\r\n        left: calc(100% - 1.5px);\r\n        background-color: white;\r\n    }\r\n    .brodcast-functions .broadcast_left_parent .pipeline1 {\r\n        top: 15%;\r\n    }\r\n    .brodcast-functions .broadcast_left_parent .pipeline2 {\r\n        top: calc(15% + 25%);\r\n    }\r\n    .brodcast-functions .broadcast_left_parent .pipeline3 {\r\n        top: calc(15% + 50% + 5px);\r\n    }\r\n}\r\n.brodcast-functions .broadcast_left_parent .broadcast_left {\r\n    background: var(--lightorange);\r\n    display: flex;\r\n}\r\n.brodcast-functions .broadcast_left_parent .broadcast_left .broadcast_left_image {\r\n    width: 300px;\r\n}\r\n.brodcast-functions .broadcast_left_parent .broadcast_left .broadcast_left_image img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.brodcast-functions .broadcast_left_parent .broadcast_left .content {\r\n    flex: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n.brodcast-functions .broadcast_left_parent .broadcast_left .content h3 {\r\n    text-transform: capitalize;\r\n    color: white;\r\n    position: relative;\r\n}\r\n.brodcast-functions .broadcast_left_parent .broadcast_left .content h3:after {\r\n    width: 80%;\r\n    content: '';\r\n    position: absolute;\r\n    height: 3px;\r\n    border-radius: 4px;\r\n    background-color: var(--text-color);\r\n    left: 10%;\r\n    top: 105%;\r\n}\r\n.brodcast-functions .broadcast_left_parent .broadcast_left .content p.title {\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 18px;\r\n}\r\n.brodcast-functions .broadcast_left_parent .broadcast_left .content p.sub-text {\r\n    text-align: center;\r\n    color: white;\r\n    margin-bottom: 0;\r\n}\r\n@media (max-width: 992px) {\r\n    .brodcast-functions .broadcast_left_parent .broadcast_left {\r\n        display: block;\r\n    }\r\n    .brodcast-functions .broadcast_left_parent .broadcast_left .broadcast_left_image {\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        padding-top: 50px;\r\n    }\r\n}\r\n.brodcast-functions .broadcast_right_parent {\r\n    display: flex;\r\n    background-color: var(--darkorange);\r\n}\r\n.brodcast-functions .broadcast_right_parent .broadcast_right {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.brodcast-functions .broadcast_right_parent .broadcast_right h3 {\r\n    font-size: 28px;\r\n    text-align: center;\r\n    color: var(--text-color);\r\n    position: relative;\r\n    margin-top: 10px;\r\n}\r\n.brodcast-functions .broadcast_right_parent .broadcast_right h3 img {\r\n    width: 40px;\r\n    position: absolute;\r\n    left: 4%;\r\n}\r\n.brodcast-functions .broadcast_right_parent .broadcast_right p {\r\n    color: var(--text-color);\r\n    text-align: center;\r\n}\r\n@media (min-width: 991px) {\r\n    .brodcast-functions .broadcast_right_parent {\r\n        padding-left: 0;\r\n        padding-right: 0;\r\n    }\r\n}\r\n.brodcast-functions .broadcast_padding {\r\n    padding: 45px 40px;\r\n}\r\n@media (max-width: 1286px) {\r\n    .brodcast-functions {\r\n        margin-top: 100px;\r\n    }\r\n}\r\n@media (max-width: 1145px) {\r\n    .brodcast-functions {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n@media (max-width: 1100px) {\r\n    .brodcast-functions {\r\n        margin-top: 20px;\r\n    }\r\n}\r\n@media (max-width: 995px) {\r\n    .brodcast-functions {\r\n        margin-top: 0;\r\n    }\r\n}\r\n";
styleInject(css_248z$b);

var Brodcast = function (_a) {
    var page3 = _a.page3, page4 = _a.page4;
    return (React$6.createElement("section", { className: "brodcast-functions" },
        React$6.createElement(Container$1, { className: "functions" },
            React$6.createElement(Row$1, null,
                React$6.createElement("div", { className: "function-parent" }, page3.func_img.map(function (value, index) {
                    return React$6.createElement(React$6.Fragment, { key: index },
                        React$6.createElement(Col$1, { md: 3, lg: 3, className: "function-col" },
                            React$6.createElement("div", { className: "function-image" },
                                React$6.createElement("img", { src: value.image, alt: "Image not found" })),
                            React$6.createElement("h6", { className: "mt-3" }, value.title)),
                        React$6.createElement("div", { className: "border-lines" },
                            React$6.createElement("span", { className: "line" }),
                            React$6.createElement("span", { className: "line" }),
                            React$6.createElement("span", { className: "line" })));
                })))),
        React$6.createElement(Container$1, { fluid: true },
            React$6.createElement(Row$1, null,
                React$6.createElement(Col$1, { lg: 6, className: "broadcast_left_parent" },
                    React$6.createElement("div", { className: "broadcast_left" },
                        React$6.createElement("div", { className: "broadcast_left_image" },
                            React$6.createElement("img", { src: page4.brodcast_image, alt: "swaminarayan" })),
                        React$6.createElement("div", { className: "content broadcast_padding" },
                            React$6.createElement("h3", null, page4.title),
                            React$6.createElement("p", { className: "title" }, page4.sub_title),
                            React$6.createElement("p", { className: "sub-text", dangerouslySetInnerHTML: { __html: page4.description } }))),
                    React$6.createElement("div", { className: "pipeline pipeline1" }),
                    React$6.createElement("div", { className: "pipeline pipeline2" }),
                    React$6.createElement("div", { className: "pipeline pipeline3" })),
                React$6.createElement(Col$1, { lg: 6, className: "broadcast_right_parent broadcast_padding" },
                    React$6.createElement("div", { className: "broadcast_right" },
                        React$6.createElement("h3", { dangerouslySetInnerHTML: { __html: page4.quote_text } }),
                        React$6.createElement("p", { dangerouslySetInnerHTML: { __html: page4.quote_subtext } })))))));
};

var css_248z$a = ".aboutdiv-col {\r\n    margin-top: 4%;\r\n}\r\n.aboutdiv-col .aboutdiv {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: white;\r\n    flex-direction: column;\r\n    padding: 40px 20px;\r\n    border-radius: 8px;\r\n    height: 350px;\r\n    text-align: center;\r\n}\r\n.aboutdiv-col .aboutdiv .aboutdiv-image img {\r\n    width: 100%;\r\n}\r\n.aboutdiv-col .aboutdiv .aboutdiv-heading {\r\n    padding-bottom: 10px;\r\n    border-bottom: 2px solid coral;\r\n}\r\n.aboutdiv-col .aboutdiv .aboutdiv-para {\r\n    font-weight: 600;\r\n}\r\n";
styleInject(css_248z$a);

var AboutDiv = function (_a) {
    var aboutdiv = _a.aboutdiv;
    console.log("AboutDiv.js>4", aboutdiv);
    return (React$6.createElement(Row$1, null, aboutdiv.map(function (value, index) {
        return React$6.createElement(Col$1, { md: 6, lg: 3, className: "aboutdiv-col", key: index },
            React$6.createElement("div", { className: "aboutdiv" },
                React$6.createElement("div", { className: "aboutdiv-image" },
                    React$6.createElement("img", { src: value.image, alt: "Image not found" })),
                React$6.createElement("h4", { className: "aboutdiv-heading mt-4" }, value.title),
                React$6.createElement("p", { className: "aboutdiv-para" }, value.text)));
    })));
};

var css_248z$9 = ".about {\r\n    padding-top: 100px;\r\n    position: relative;\r\n    padding-bottom: 40px;\r\n    background-color: var(--peach);\r\n}\r\n.about .about-img {\r\n    position: absolute;\r\n    top: 20%;\r\n    left: -1%;\r\n    transform: rotate(180deg);\r\n}\r\n@media (max-width: 992px) {\r\n    .about .about-img {\r\n        display: none;\r\n    }\r\n}\r\n.about .about-heading {\r\n    width: fit-content;\r\n    padding-bottom: 5px;\r\n    border-bottom: 2px solid coral;\r\n}\r\n.about .about-para {\r\n    font-weight: 600;\r\n}\r\n";
styleInject(css_248z$9);

var About = function (_a) {
    var page5 = _a.page5;
    return (React$6.createElement("section", { className: "about" },
        React$6.createElement("img", { className: "about-img", src: page5.about_image, alt: "Image not found" }),
        React$6.createElement(Container$1, null,
            React$6.createElement(Row$1, null,
                React$6.createElement(Col$1, { lg: 6 },
                    React$6.createElement("h5", { className: "about-heading" }, page5.about_heading),
                    React$6.createElement("h2", { className: "about-subheading", dangerouslySetInnerHTML: { __html: page5.about_subheading } })),
                React$6.createElement(Col$1, { lg: 6 },
                    React$6.createElement("p", { className: "about-para" }, page5.about_para1),
                    React$6.createElement("p", { className: "about-para" }, page5.about_para2))),
            React$6.createElement(AboutDiv, { aboutdiv: page5.about_values }))));
};

var css_248z$8 = ".heading-col {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    position: relative;\r\n    margin-bottom: 4%;\r\n}\r\n.heading-col .heading {\r\n    text-transform: uppercase;\r\n}\r\n.heading-col img {\r\n    position: absolute;\r\n    width: fit-content;\r\n    top: 30px;\r\n}\r\n";
styleInject(css_248z$8);

var Heading = function (props) {
    return (React$6.createElement(Row$1, null,
        React$6.createElement(Col$1, { lg: 12, className: "heading-col" },
            React$6.createElement("h2", { className: "heading" }, props.heading),
            React$6.createElement("img", { src: "/Images/Seperator.png", alt: "underline" }))));
};

var css_248z$7 = ".review {\r\n    background: var(--far-white);\r\n    padding-top: 100px;\r\n    padding-bottom: 50px;\r\n}\r\n.review .review-col {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.review .review-col .review-images {\r\n    position: relative;\r\n    margin-bottom: 20px;\r\n}\r\n.review .review-col .review-images img {\r\n    width: 100%;\r\n    border-radius: 8px;\r\n}\r\n.review .review-col .review-images .review-para {\r\n    background-color: #fff2dac9;\r\n    position: absolute;\r\n    bottom: 15px;\r\n    padding: 0 10px;\r\n}\r\n";
styleInject(css_248z$7);

var Review = function (_a) {
    var page6 = _a.page6;
    return (React$6.createElement("section", { className: "review" },
        React$6.createElement(Container$1, null,
            React$6.createElement(Row$1, null,
                React$6.createElement(Col$1, null,
                    React$6.createElement(Heading, { heading: "What they Say" }))),
            React$6.createElement(Row$1, null, page6.review.map(function (value, index) {
                return React$6.createElement(Col$1, { md: 6, lg: 4, className: "review-col", key: index },
                    React$6.createElement("div", { className: "review-images" },
                        React$6.createElement("img", { src: value.image, alt: "Image not found" }),
                        React$6.createElement("div", { className: "review-para" },
                            React$6.createElement("h5", null, value.title),
                            React$6.createElement("h5", null, value.text))));
            })))));
};

var css_248z$6 = ".calendar {\r\n    padding-top: 70px;\r\n    padding-bottom: 50px;\r\n    background-color: var(--far-white);\r\n}\r\n.calendar .calendar-heading {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.calendar .calendar-heading .heading {\r\n    width: fit-content;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n    padding-bottom: 10px;\r\n    margin-right: 30px;\r\n    color: #ec7510;\r\n}\r\n.calendar .calendar-heading .active {\r\n    color: #000;\r\n    width: fit-content;\r\n    border-bottom: 2px solid coral;\r\n}\r\n@media (max-width: 512px) {\r\n    .calendar .calendar-heading {\r\n        display: block;\r\n        padding-left: 20px;\r\n        padding-top: 15px;\r\n    }\r\n    .calendar .calendar-heading .heading {\r\n        margin-top: 15px;\r\n    }\r\n}\r\n";
styleInject(css_248z$6);

var css_248z$5 = ".cal_container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 20px;\r\n    flex-direction: row;\r\n}\r\n.cal_container .cal_left {\r\n    position: relative;\r\n    border-top-left-radius: 8px;\r\n    border-bottom-left-radius: 8px;\r\n    min-width: 120px;\r\n    padding: 15px;\r\n    background-color: #f9d8b8;\r\n}\r\n.cal_container .cal_left .small_title {\r\n    text-transform: uppercase;\r\n    color: #000;\r\n    margin-bottom: 8px;\r\n    font-size: 13px;\r\n    text-align: center;\r\n    font-weight: 500;\r\n}\r\n.cal_container .cal_left .date {\r\n    text-transform: uppercase;\r\n    color: #000;\r\n    margin-bottom: 0;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n.cal_container .cal_left .line {\r\n    background-color: #c4494b;\r\n    margin: 0 2px;\r\n    height: 1px;\r\n    margin-left: -5px;\r\n    margin-right: -5px;\r\n}\r\n.cal_container .cal_left:before {\r\n    content: '';\r\n    display: block;\r\n    width: 15px;\r\n    height: 15px;\r\n    left: 100%;\r\n    top: 0;\r\n    clip-path: polygon(100% 100%, 0 0, 0 99%);\r\n    position: absolute;\r\n    background-color: #e2c7cc;\r\n}\r\n.cal_container .cal_left:after {\r\n    content: '';\r\n    display: block;\r\n    width: 15px;\r\n    height: 15px;\r\n    bottom: 0;\r\n    left: 100%;\r\n    clip-path: polygon(100% 0, 0 0, 0 99%);\r\n    position: absolute;\r\n    background-color: #e2c7cc;\r\n}\r\n.cal_container .cal_right {\r\n    z-index: 2;\r\n    background-color: white;\r\n    padding: 10px 10px 15px 15px;\r\n    width: 100%;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n.cal_container .cal_right .first {\r\n    margin-bottom: 7px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n.cal_container .cal_right .first p {\r\n    font-size: 15px;\r\n    color: #000;\r\n    margin-bottom: 0;\r\n}\r\n.cal_container .cal_right .first img {\r\n    width: 25px;\r\n    height: 25px;\r\n    object-fit: contain;\r\n}\r\n.cal_container .cal_right .title {\r\n    font-size: 16px;\r\n    color: #000;\r\n    margin-bottom: 0;\r\n    font-weight: 500;\r\n}\r\n";
styleInject(css_248z$5);

var Cal = function (_a) {
    var data = _a.data;
    return (React$6.createElement(Col$1, { md: 6, lg: 4 },
        React$6.createElement("div", { className: "cal_container" },
            React$6.createElement("div", { className: "cal_left" },
                React$6.createElement("p", { className: "small_title" }, data.day),
                React$6.createElement("p", { className: "date" }, data.month),
                React$6.createElement("div", { className: "line" }),
                React$6.createElement("p", { className: "date" }, data.date)),
            React$6.createElement("div", { className: "cal_right" },
                React$6.createElement("div", { className: "first" },
                    React$6.createElement("p", null, data.event_title),
                    React$6.createElement("img", { src: "/Images/Group 30.png", alt: "radio" })),
                React$6.createElement("p", { className: "title" }, data.event_describe)))));
};

var Calendar = function (_a) {
    var page7 = _a.page7;
    var getCalendar = function () {
        var result;
        result = page7.calendar.map(function (e, i) {
            return React$6.createElement(Cal, { data: e, key: i });
        });
        return result;
    };
    return (React$6.createElement("section", { className: "calendar" },
        React$6.createElement(Container$1, null,
            React$6.createElement(Row$1, null,
                React$6.createElement(Col$1, null,
                    React$6.createElement(Heading, { heading: "Calendar" }))),
            React$6.createElement(Row$1, null,
                React$6.createElement(Col$1, { className: "calendar-heading" },
                    React$6.createElement("h3", { className: "heading active" }, page7.heading1),
                    React$6.createElement("h3", { className: "heading" }, page7.heading2))),
            React$6.createElement(Row$1, { className: "mt-5" }, getCalendar()))));
};

var css_248z$4 = ".news {\r\n    background: var(--far-white);\r\n    padding-top: 70px;\r\n    padding-bottom: 40px;\r\n}\r\n.news .news-card {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    margin: 15px;\r\n}\r\n.news .news-card img {\r\n    width: 100%;\r\n}\r\n.news .news-card div {\r\n    padding: 10px 15px 30px 15px;\r\n}\r\n.news .news-card div .para-card {\r\n    margin-bottom: 0;\r\n}\r\n.news .news-card div .para-card span {\r\n    color: darkred;\r\n}\r\n.news .news-card div .card-heading {\r\n    margin-top: 5px;\r\n    margin-right: 20px;\r\n}\r\n.news .news-card:hover {\r\n    box-shadow: 0 2px 2px 1px #d3d3d3;\r\n    border-radius: 8px;\r\n    background: #fff;\r\n    cursor: pointer;\r\n}\r\n.news .news-button {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.news .news-button button {\r\n    width: fit-content;\r\n    padding: 10px 15px;\r\n    font-size: 17px;\r\n    text-transform: uppercase;\r\n    color: var(--text-color);\r\n    background-image: linear-gradient(to right, red, orange);\r\n    border-radius: 8px;\r\n    border: none;\r\n    outline: none;\r\n    text-align: center;\r\n}\r\n@media (max-width: 768px) {\r\n    .news .news-card {\r\n        display: none;\r\n    }\r\n    .news .news-button {\r\n        display: none;\r\n    }\r\n}\r\n";
styleInject(css_248z$4);

var css_248z$3 = "@font-face{font-family:\"revicons\";fallback:fallback;src:url(\"./revicons.woff\") format('woff'),url(\"./revicons.ttf\") format('ttf'),url(\"./revicons.eot\") format('ttf')}.react-multi-carousel-list{display:flex;align-items:center;overflow:hidden;position:relative}.react-multi-carousel-track{list-style:none;padding:0;margin:0;display:flex;flex-direction:row;position:relative;transform-style:preserve-3d;backface-visibility:hidden;will-change:transform,transition}.react-multiple-carousel__arrow{position:absolute;outline:0;transition:all .5s;border-radius:35px;z-index:1000;border:0;background:rgba(0,0,0,0.5);min-width:43px;min-height:43px;opacity:1;cursor:pointer}.react-multiple-carousel__arrow:hover{background:rgba(0,0,0,0.8)}.react-multiple-carousel__arrow::before{font-size:20px;color:#fff;display:block;font-family:revicons;text-align:center;z-index:2;position:relative}.react-multiple-carousel__arrow:disabled{cursor:default;background:rgba(0,0,0,0.5)}.react-multiple-carousel__arrow--left{left:calc(4% + 1px)}.react-multiple-carousel__arrow--left::before{content:\"\\e824\"}.react-multiple-carousel__arrow--right{right:calc(4% + 1px)}.react-multiple-carousel__arrow--right::before{content:\"\\e825\"}.react-multi-carousel-dot-list{position:absolute;bottom:0;display:flex;left:0;right:0;justify-content:center;margin:auto;padding:0;margin:0;list-style:none;text-align:center}.react-multi-carousel-dot button{display:inline-block;width:12px;height:12px;border-radius:50%;opacity:1;padding:5px 5px 5px 5px;box-shadow:none;transition:background .5s;border-width:2px;border-style:solid;border-color:grey;padding:0;margin:0;margin-right:6px;outline:0;cursor:pointer}.react-multi-carousel-dot button:hover:active{background:#080808}.react-multi-carousel-dot--active button{background:#080808}.react-multi-carousel-item{transform-style:preserve-3d;backface-visibility:hidden}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.react-multi-carousel-item{flex-shrink:0 !important}.react-multi-carousel-track{overflow:visible !important}}";
styleInject(css_248z$3);

var lib = {};

var Carousel$2 = {};

var utils = {};

var clones = {};

(function (exports) {
function getOriginalCounterPart(index,_a,childrenArr){var slidesToShow=_a.slidesToShow,currentSlide=_a.currentSlide;return childrenArr.length>2*slidesToShow?index+2*slidesToShow:currentSlide>=childrenArr.length?childrenArr.length+index:index}function getOriginalIndexLookupTableByClones(slidesToShow,childrenArr){if(childrenArr.length>2*slidesToShow){for(var table={},firstBeginningOfClones=childrenArr.length-2*slidesToShow,firstEndOfClones=childrenArr.length-firstBeginningOfClones,firstCount=firstBeginningOfClones,i=0;i<firstEndOfClones;i++)table[i]=firstCount,firstCount++;var secondBeginningOfClones=childrenArr.length+firstEndOfClones,secondEndOfClones=secondBeginningOfClones+childrenArr.slice(0,2*slidesToShow).length,secondCount=0;for(i=secondBeginningOfClones;i<=secondEndOfClones;i++)table[i]=secondCount,secondCount++;var originalEnd=secondBeginningOfClones,originalCounter=0;for(i=firstEndOfClones;i<originalEnd;i++)table[i]=originalCounter,originalCounter++;return table}table={};var totalSlides=3*childrenArr.length,count=0;for(i=0;i<totalSlides;i++)table[i]=count,++count===childrenArr.length&&(count=0);return table}function getClones(slidesToShow,childrenArr){return childrenArr.length<slidesToShow?childrenArr:childrenArr.length>2*slidesToShow?childrenArr.slice(childrenArr.length-2*slidesToShow,childrenArr.length).concat(childrenArr,childrenArr.slice(0,2*slidesToShow)):childrenArr.concat(childrenArr,childrenArr)}function getInitialSlideInInfiniteMode(slidesToShow,childrenArr){return childrenArr.length>2*slidesToShow?2*slidesToShow:childrenArr.length}function checkClonesPosition(_a,childrenArr,props){var isReachingTheEnd,currentSlide=_a.currentSlide,slidesToShow=_a.slidesToShow,itemWidth=_a.itemWidth,totalItems=_a.totalItems,nextSlide=0,nextPosition=0,isReachingTheStart=0===currentSlide,originalFirstSlide=childrenArr.length-(childrenArr.length-2*slidesToShow);return childrenArr.length<slidesToShow?(nextPosition=nextSlide=0,isReachingTheStart=isReachingTheEnd=!1):childrenArr.length>2*slidesToShow?((isReachingTheEnd=currentSlide>=originalFirstSlide+childrenArr.length)&&(nextPosition=-itemWidth*(nextSlide=currentSlide-childrenArr.length)),isReachingTheStart&&(nextPosition=-itemWidth*(nextSlide=originalFirstSlide+(childrenArr.length-2*slidesToShow)))):((isReachingTheEnd=currentSlide>=2*childrenArr.length)&&(nextPosition=-itemWidth*(nextSlide=currentSlide-childrenArr.length)),isReachingTheStart&&(nextPosition=props.showDots?-itemWidth*(nextSlide=childrenArr.length):-itemWidth*(nextSlide=totalItems-2*slidesToShow))),{isReachingTheEnd:isReachingTheEnd,isReachingTheStart:isReachingTheStart,nextSlide:nextSlide,nextPosition:nextPosition}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getOriginalCounterPart=getOriginalCounterPart,exports.getOriginalIndexLookupTableByClones=getOriginalIndexLookupTableByClones,exports.getClones=getClones,exports.getInitialSlideInInfiniteMode=getInitialSlideInInfiniteMode,exports.checkClonesPosition=checkClonesPosition;
}(clones));

var elementWidth = {};

Object.defineProperty(elementWidth,"__esModule",{value:!0});var hasWarnAboutTypo=!1;function getPartialVisibilityGutter(responsive,partialVisible,serverSideDeviceType,clientSideDeviceType){var gutter=0,deviceType=clientSideDeviceType||serverSideDeviceType;return partialVisible&&deviceType&&(!hasWarnAboutTypo&&"production"!==process.env.NODE_ENV&&responsive[deviceType].paritialVisibilityGutter&&(hasWarnAboutTypo=!0,console.warn("You appear to be using paritialVisibilityGutter instead of partialVisibilityGutter which will be moved to partialVisibilityGutter in the future completely")),gutter=responsive[deviceType].partialVisibilityGutter||responsive[deviceType].paritialVisibilityGutter),gutter}function getWidthFromDeviceType(deviceType,responsive){var itemWidth;responsive[deviceType]&&(itemWidth=(100/responsive[deviceType].items).toFixed(1));return itemWidth}function getItemClientSideWidth(props,slidesToShow,containerWidth){return Math.round(containerWidth/(slidesToShow+(props.centerMode?1:0)))}elementWidth.getPartialVisibilityGutter=getPartialVisibilityGutter,elementWidth.getWidthFromDeviceType=getWidthFromDeviceType,elementWidth.getItemClientSideWidth=getItemClientSideWidth;

var common = {};

Object.defineProperty(common,"__esModule",{value:!0});var elementWidth_1$1=elementWidth;function notEnoughChildren(state){var slidesToShow=state.slidesToShow;return state.totalItems<slidesToShow}function getInitialState(state,props){var flexBisis,domLoaded=state.domLoaded,slidesToShow=state.slidesToShow,containerWidth=state.containerWidth,itemWidth=state.itemWidth,deviceType=props.deviceType,responsive=props.responsive,ssr=props.ssr,partialVisbile=props.partialVisbile,partialVisible=props.partialVisible,domFullyLoaded=Boolean(domLoaded&&slidesToShow&&containerWidth&&itemWidth);ssr&&deviceType&&!domFullyLoaded&&(flexBisis=elementWidth_1$1.getWidthFromDeviceType(deviceType,responsive));var shouldRenderOnSSR=Boolean(ssr&&deviceType&&!domFullyLoaded&&flexBisis);return {shouldRenderOnSSR:shouldRenderOnSSR,flexBisis:flexBisis,domFullyLoaded:domFullyLoaded,partialVisibilityGutter:elementWidth_1$1.getPartialVisibilityGutter(responsive,partialVisbile||partialVisible,deviceType,state.deviceType),shouldRenderAtAll:shouldRenderOnSSR||domFullyLoaded}}function getIfSlideIsVisbile(index,state){var currentSlide=state.currentSlide,slidesToShow=state.slidesToShow;return currentSlide<=index&&index<currentSlide+slidesToShow}function getTransformForCenterMode(state,props,transformPlaceHolder){var transform=transformPlaceHolder||state.transform;return !props.infinite&&0===state.currentSlide||notEnoughChildren(state)?transform:transform+state.itemWidth/2}function isInLeftEnd(_a){return !(0<_a.currentSlide)}function isInRightEnd(_a){var currentSlide=_a.currentSlide,totalItems=_a.totalItems;return !(currentSlide+_a.slidesToShow<totalItems)}function getTransformForPartialVsibile(state,partialVisibilityGutter,props,transformPlaceHolder){void 0===partialVisibilityGutter&&(partialVisibilityGutter=0);var currentSlide=state.currentSlide,slidesToShow=state.slidesToShow,isRightEndReach=isInRightEnd(state),shouldRemoveRightGutter=!props.infinite&&isRightEndReach,baseTransform=transformPlaceHolder||state.transform;if(notEnoughChildren(state))return baseTransform;var transform=baseTransform+currentSlide*partialVisibilityGutter;return shouldRemoveRightGutter?transform+(state.containerWidth-(state.itemWidth-partialVisibilityGutter)*slidesToShow):transform}function getTransform(state,props,transformPlaceHolder){var partialVisbile=props.partialVisbile,partialVisible=props.partialVisible,responsive=props.responsive,deviceType=props.deviceType,centerMode=props.centerMode,transform=transformPlaceHolder||state.transform,partialVisibilityGutter=elementWidth_1$1.getPartialVisibilityGutter(responsive,partialVisbile||partialVisible,deviceType,state.deviceType);return partialVisible||partialVisbile?getTransformForPartialVsibile(state,partialVisibilityGutter,props,transformPlaceHolder):centerMode?getTransformForCenterMode(state,props,transformPlaceHolder):transform}function getSlidesToSlide(state,props){var domLoaded=state.domLoaded,slidesToShow=state.slidesToShow,containerWidth=state.containerWidth,itemWidth=state.itemWidth,deviceType=props.deviceType,responsive=props.responsive,slidesToScroll=props.slidesToSlide||1,domFullyLoaded=Boolean(domLoaded&&slidesToShow&&containerWidth&&itemWidth);return props.ssr&&props.deviceType&&!domFullyLoaded&&Object.keys(responsive).forEach(function(device){var slidesToSlide=responsive[device].slidesToSlide;deviceType===device&&slidesToSlide&&(slidesToScroll=slidesToSlide);}),domFullyLoaded&&Object.keys(responsive).forEach(function(item){var _a=responsive[item],breakpoint=_a.breakpoint,slidesToSlide=_a.slidesToSlide,max=breakpoint.max,min=breakpoint.min;slidesToSlide&&window.innerWidth>=min&&window.innerWidth<=max&&(slidesToScroll=slidesToSlide);}),slidesToScroll}common.notEnoughChildren=notEnoughChildren,common.getInitialState=getInitialState,common.getIfSlideIsVisbile=getIfSlideIsVisbile,common.getTransformForCenterMode=getTransformForCenterMode,common.isInLeftEnd=isInLeftEnd,common.isInRightEnd=isInRightEnd,common.getTransformForPartialVsibile=getTransformForPartialVsibile,common.getTransform=getTransform,common.getSlidesToSlide=getSlidesToSlide;

var throttle$1 = {};

Object.defineProperty(throttle$1,"__esModule",{value:!0});var throttle=function(func,limit,setIsInThrottle){var inThrottle;return function(){var args=arguments;inThrottle||(func.apply(this,args),inThrottle=!0,"function"==typeof setIsInThrottle&&setIsInThrottle(!0),setTimeout(function(){inThrottle=!1,"function"==typeof setIsInThrottle&&setIsInThrottle(!1);},limit));}};throttle$1.default=throttle;

var throwError = {};

(function (exports) {
function throwError(state,props){var partialVisbile=props.partialVisbile,partialVisible=props.partialVisible,centerMode=props.centerMode,ssr=props.ssr,responsive=props.responsive;if((partialVisbile||partialVisible)&&centerMode)throw new Error("center mode can not be used at the same time with partialVisible");if(!responsive)throw ssr?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(responsive&&"object"!=typeof responsive)throw new Error("responsive prop must be an object")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=throwError;
}(throwError));

var next = {};

Object.defineProperty(next,"__esModule",{value:!0});var common_1$5=common;function populateNextSlides(state,props,slidesHavePassed){void 0===slidesHavePassed&&(slidesHavePassed=0);var nextSlides,nextPosition,slidesToShow=state.slidesToShow,currentSlide=state.currentSlide,itemWidth=state.itemWidth,totalItems=state.totalItems,slidesToSlide=common_1$5.getSlidesToSlide(state,props),nextMaximumSlides=currentSlide+1+slidesHavePassed+slidesToShow+(0<slidesHavePassed?0:slidesToSlide);return nextPosition=nextMaximumSlides<=totalItems?-itemWidth*(nextSlides=currentSlide+slidesHavePassed+(0<slidesHavePassed?0:slidesToSlide)):totalItems<nextMaximumSlides&&currentSlide!==totalItems-slidesToShow?-itemWidth*(nextSlides=totalItems-slidesToShow):nextSlides=void 0,{nextSlides:nextSlides,nextPosition:nextPosition}}next.populateNextSlides=populateNextSlides;

var previous = {};

Object.defineProperty(previous,"__esModule",{value:!0});var React$5=React__default,common_1$4=common,common_2=common;function populatePreviousSlides(state,props,slidesHavePassed){void 0===slidesHavePassed&&(slidesHavePassed=0);var nextSlides,nextPosition,currentSlide=state.currentSlide,itemWidth=state.itemWidth,slidesToShow=state.slidesToShow,children=props.children,showDots=props.showDots,infinite=props.infinite,slidesToSlide=common_1$4.getSlidesToSlide(state,props),nextMaximumSlides=currentSlide-slidesHavePassed-(0<slidesHavePassed?0:slidesToSlide),additionalSlides=(React$5.Children.toArray(children).length-slidesToShow)%slidesToSlide;return nextPosition=0<=nextMaximumSlides?(nextSlides=nextMaximumSlides,showDots&&!infinite&&0<additionalSlides&&common_2.isInRightEnd(state)&&(nextSlides=currentSlide-additionalSlides),-itemWidth*nextSlides):nextSlides=nextMaximumSlides<0&&0!==currentSlide?0:void 0,{nextSlides:nextSlides,nextPosition:nextPosition}}previous.populatePreviousSlides=populatePreviousSlides;

var mouseOrTouchMove = {};

(function (exports) {
function populateSlidesOnMouseTouchMove(state,props,initialX,lastX,clientX,transformPlaceHolder){var direction,nextPosition,itemWidth=state.itemWidth,slidesToShow=state.slidesToShow,totalItems=state.totalItems,currentSlide=state.currentSlide,infinite=props.infinite,canContinue=!1,slidesHavePassedRight=Math.round((initialX-lastX)/itemWidth),slidesHavePassedLeft=Math.round((lastX-initialX)/itemWidth),isMovingLeft=initialX<clientX;if(clientX<initialX&&!!(slidesHavePassedRight<=slidesToShow)){direction="right";var translateXLimit=Math.abs(-itemWidth*(totalItems-slidesToShow)),nextTranslate=transformPlaceHolder-(lastX-clientX),isLastSlide=currentSlide===totalItems-slidesToShow;(Math.abs(nextTranslate)<=translateXLimit||isLastSlide&&infinite)&&(nextPosition=nextTranslate,canContinue=!0);}isMovingLeft&&slidesHavePassedLeft<=slidesToShow&&(direction="left",((nextTranslate=transformPlaceHolder+(clientX-lastX))<=0||0===currentSlide&&infinite)&&(canContinue=!0,nextPosition=nextTranslate));return {direction:direction,nextPosition:nextPosition,canContinue:canContinue}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.populateSlidesOnMouseTouchMove=populateSlidesOnMouseTouchMove;
}(mouseOrTouchMove));

Object.defineProperty(utils,"__esModule",{value:!0});var clones_1$2=clones;utils.getOriginalCounterPart=clones_1$2.getOriginalCounterPart,utils.getClones=clones_1$2.getClones,utils.checkClonesPosition=clones_1$2.checkClonesPosition,utils.getInitialSlideInInfiniteMode=clones_1$2.getInitialSlideInInfiniteMode;var elementWidth_1=elementWidth;utils.getWidthFromDeviceType=elementWidth_1.getWidthFromDeviceType,utils.getPartialVisibilityGutter=elementWidth_1.getPartialVisibilityGutter,utils.getItemClientSideWidth=elementWidth_1.getItemClientSideWidth;var common_1$3=common;utils.getInitialState=common_1$3.getInitialState,utils.getIfSlideIsVisbile=common_1$3.getIfSlideIsVisbile,utils.getTransformForCenterMode=common_1$3.getTransformForCenterMode,utils.getTransformForPartialVsibile=common_1$3.getTransformForPartialVsibile,utils.isInLeftEnd=common_1$3.isInLeftEnd,utils.isInRightEnd=common_1$3.isInRightEnd,utils.notEnoughChildren=common_1$3.notEnoughChildren,utils.getSlidesToSlide=common_1$3.getSlidesToSlide;var throttle_1=throttle$1;utils.throttle=throttle_1.default;var throwError_1=throwError;utils.throwError=throwError_1.default;var next_1=next;utils.populateNextSlides=next_1.populateNextSlides;var previous_1=previous;utils.populatePreviousSlides=previous_1.populatePreviousSlides;var mouseOrTouchMove_1=mouseOrTouchMove;utils.populateSlidesOnMouseTouchMove=mouseOrTouchMove_1.populateSlidesOnMouseTouchMove;

var types = {};

var __extends$1=commonjsGlobal&&commonjsGlobal.__extends||function(){var extendStatics=function(d,b){return (extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p]);})(d,b)};return function(d,b){function __(){this.constructor=d;}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __);}}();Object.defineProperty(types,"__esModule",{value:!0});var React$4=React__default;function isMouseMoveEvent(e){return "clientY"in e}types.isMouseMoveEvent=isMouseMoveEvent;var Carousel$1=function(_super){function Carousel(){return null!==_super&&_super.apply(this,arguments)||this}return __extends$1(Carousel,_super),Carousel}(React$4.Component);types.default=Carousel$1;

var Dots$1 = {};

var dots = {};

Object.defineProperty(dots,"__esModule",{value:!0});var clones_1$1=clones,common_1$2=common;function getLookupTableForNextSlides(numberOfDotsToShow,state,props,childrenArr){var table={},slidesToSlide=common_1$2.getSlidesToSlide(state,props);return Array(numberOfDotsToShow).fill(0).forEach(function(_,i){var nextSlide=clones_1$1.getOriginalCounterPart(i,state,childrenArr);if(0===i)table[0]=nextSlide;else {var now=table[i-1]+slidesToSlide;table[i]=now;}}),table}dots.getLookupTableForNextSlides=getLookupTableForNextSlides;

Object.defineProperty(Dots$1,"__esModule",{value:!0});var React$3=React__default,clones_1=clones,dots_1=dots,common_1$1=common,Dots=function(_a){var props=_a.props,state=_a.state,goToSlide=_a.goToSlide,getState=_a.getState,showDots=props.showDots,customDot=props.customDot,dotListClass=props.dotListClass,infinite=props.infinite,children=props.children;if(!showDots||common_1$1.notEnoughChildren(state))return null;var numberOfDotsToShow,currentSlide=state.currentSlide,slidesToShow=state.slidesToShow,slidesToSlide=common_1$1.getSlidesToSlide(state,props),childrenArr=React$3.Children.toArray(children);numberOfDotsToShow=infinite?Math.ceil(childrenArr.length/slidesToSlide):Math.ceil((childrenArr.length-slidesToShow)/slidesToSlide)+1;var nextSlidesTable=dots_1.getLookupTableForNextSlides(numberOfDotsToShow,state,props,childrenArr),lookupTable=clones_1.getOriginalIndexLookupTableByClones(slidesToShow,childrenArr),currentSlides=lookupTable[currentSlide];return React$3.createElement("ul",{className:"react-multi-carousel-dot-list "+dotListClass},Array(numberOfDotsToShow).fill(0).map(function(_,index){var isActive,nextSlide;if(infinite){nextSlide=nextSlidesTable[index];var cloneIndex=lookupTable[nextSlide];isActive=currentSlides===cloneIndex||cloneIndex<=currentSlides&&currentSlides<cloneIndex+slidesToSlide;}else {var maximumNextSlide=childrenArr.length-slidesToShow,possibileNextSlides=index*slidesToSlide;isActive=(nextSlide=maximumNextSlide<possibileNextSlides?maximumNextSlide:possibileNextSlides)===currentSlide||nextSlide<currentSlide&&currentSlide<nextSlide+slidesToSlide&&currentSlide<childrenArr.length-slidesToShow;}return customDot?React$3.cloneElement(customDot,{index:index,active:isActive,key:index,onClick:function(){return goToSlide(nextSlide)},carouselState:getState()}):React$3.createElement("li",{"data-index":index,key:index,className:"react-multi-carousel-dot "+(isActive?"react-multi-carousel-dot--active":"")},React$3.createElement("button",{"aria-label":"Go to slide "+(index+1),onClick:function(){return goToSlide(nextSlide)}}))}))};Dots$1.default=Dots;

var Arrows = {};

Object.defineProperty(Arrows,"__esModule",{value:!0});var React$2=React__default,LeftArrow=function(_a){var customLeftArrow=_a.customLeftArrow,getState=_a.getState,previous=_a.previous,disabled=_a.disabled;return customLeftArrow?React$2.cloneElement(customLeftArrow,{onClick:function(){return previous()},carouselState:getState(),disabled:disabled}):React$2.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left",onClick:function(){return previous()},type:"button",disabled:disabled})};Arrows.LeftArrow=LeftArrow;var RightArrow=function(_a){var customRightArrow=_a.customRightArrow,getState=_a.getState,next=_a.next,disabled=_a.disabled;return customRightArrow?React$2.cloneElement(customRightArrow,{onClick:function(){return next()},carouselState:getState(),disabled:disabled}):React$2.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right",onClick:function(){return next()},type:"button",disabled:disabled})};Arrows.RightArrow=RightArrow;

var CarouselItems$1 = {};

Object.defineProperty(CarouselItems$1,"__esModule",{value:!0});var React$1=React__default,utils_1$1=utils,CarouselItems=function(_a){var props=_a.props,state=_a.state,goToSlide=_a.goToSlide,clones=_a.clones,notEnoughChildren=_a.notEnoughChildren,itemWidth=state.itemWidth,children=props.children,infinite=props.infinite,itemClass=props.itemClass,itemAriaLabel=props.itemAriaLabel,partialVisbile=props.partialVisbile,partialVisible=props.partialVisible,_b=utils_1$1.getInitialState(state,props),flexBisis=_b.flexBisis,shouldRenderOnSSR=_b.shouldRenderOnSSR,domFullyLoaded=_b.domFullyLoaded,partialVisibilityGutter=_b.partialVisibilityGutter;return _b.shouldRenderAtAll?(partialVisbile&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),React$1.createElement(React$1.Fragment,null,(infinite?clones:React$1.Children.toArray(children)).map(function(child,index){return React$1.createElement("li",{key:index,"data-index":index,onClick:function(){props.focusOnSelect&&goToSlide(index);},"aria-hidden":utils_1$1.getIfSlideIsVisbile(index,state)?"false":"true","aria-label":itemAriaLabel||(child.props.ariaLabel?child.props.ariaLabel:null),style:{flex:shouldRenderOnSSR?"1 0 "+flexBisis+"%":"auto",position:"relative",width:domFullyLoaded?((partialVisbile||partialVisible)&&partialVisibilityGutter&&!notEnoughChildren?itemWidth-partialVisibilityGutter:itemWidth)+"px":"auto"},className:"react-multi-carousel-item "+(utils_1$1.getIfSlideIsVisbile(index,state)?"react-multi-carousel-item--active":"")+" "+itemClass},child)}))):null};CarouselItems$1.default=CarouselItems;

var __extends=commonjsGlobal&&commonjsGlobal.__extends||function(){var extendStatics=function(d,b){return (extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p]);})(d,b)};return function(d,b){function __(){this.constructor=d;}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __);}}();Object.defineProperty(Carousel$2,"__esModule",{value:!0});var React=React__default,utils_1=utils,types_1=types,Dots_1=Dots$1,Arrows_1=Arrows,CarouselItems_1=CarouselItems$1,common_1=common,defaultTransitionDuration=400,defaultTransition="transform 400ms ease-in-out",Carousel=function(_super){function Carousel(props){var _this=_super.call(this,props)||this;return _this.containerRef=React.createRef(),_this.listRef=React.createRef(),_this.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:React.Children.count(props.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},_this.onResize=_this.onResize.bind(_this),_this.handleDown=_this.handleDown.bind(_this),_this.handleMove=_this.handleMove.bind(_this),_this.handleOut=_this.handleOut.bind(_this),_this.onKeyUp=_this.onKeyUp.bind(_this),_this.handleEnter=_this.handleEnter.bind(_this),_this.setIsInThrottle=_this.setIsInThrottle.bind(_this),_this.next=utils_1.throttle(_this.next.bind(_this),props.transitionDuration||defaultTransitionDuration,_this.setIsInThrottle),_this.previous=utils_1.throttle(_this.previous.bind(_this),props.transitionDuration||defaultTransitionDuration,_this.setIsInThrottle),_this.goToSlide=utils_1.throttle(_this.goToSlide.bind(_this),props.transitionDuration||defaultTransitionDuration,_this.setIsInThrottle),_this.onMove=!1,_this.initialX=0,_this.lastX=0,_this.isAnimationAllowed=!1,_this.direction="",_this.initialY=0,_this.isInThrottle=!1,_this.transformPlaceHolder=0,_this}return __extends(Carousel,_super),Carousel.prototype.resetTotalItems=function(){var _this=this,totalItems=React.Children.count(this.props.children),currentSlide=utils_1.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,totalItems));this.setState({totalItems:totalItems,currentSlide:currentSlide},function(){_this.setContainerAndItemWidth(_this.state.slidesToShow,!0);});},Carousel.prototype.setIsInThrottle=function(isInThrottle){void 0===isInThrottle&&(isInThrottle=!1),this.isInThrottle=isInThrottle;},Carousel.prototype.setTransformDirectly=function(position,withAnimation){var additionalTransfrom=this.props.additionalTransfrom,currentTransform=common_1.getTransform(this.state,this.props,position);this.transformPlaceHolder=position,this.listRef&&this.listRef.current&&(this.setAnimationDirectly(withAnimation),this.listRef.current.style.transform="translate3d("+(currentTransform+additionalTransfrom)+"px,0,0)");},Carousel.prototype.setAnimationDirectly=function(animationAllowed){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=animationAllowed?this.props.customTransition||defaultTransition:"none");},Carousel.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.props.autoPlaySpeed&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));},Carousel.prototype.setClones=function(slidesToShow,itemWidth,forResizing,resetCurrentSlide){var _this=this;void 0===resetCurrentSlide&&(resetCurrentSlide=!1),this.isAnimationAllowed=!1;var childrenArr=React.Children.toArray(this.props.children),initialSlide=utils_1.getInitialSlideInInfiniteMode(slidesToShow||this.state.slidesToShow,childrenArr),clones=utils_1.getClones(this.state.slidesToShow,childrenArr),currentSlide=childrenArr.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:clones.length,currentSlide:forResizing&&!resetCurrentSlide?currentSlide:initialSlide},function(){_this.correctItemsPosition(itemWidth||_this.state.itemWidth);});},Carousel.prototype.setItemsToShow=function(shouldCorrectItemPosition,resetCurrentSlide){var _this=this,responsive=this.props.responsive;Object.keys(responsive).forEach(function(item){var _a=responsive[item],breakpoint=_a.breakpoint,items=_a.items,max=breakpoint.max,min=breakpoint.min;window.innerWidth>=min&&window.innerWidth<=max&&(_this.setState({slidesToShow:items,deviceType:item}),_this.setContainerAndItemWidth(items,shouldCorrectItemPosition,resetCurrentSlide));});},Carousel.prototype.setContainerAndItemWidth=function(slidesToShow,shouldCorrectItemPosition,resetCurrentSlide){var _this=this;if(this.containerRef&&this.containerRef.current){var containerWidth=this.containerRef.current.offsetWidth,itemWidth_1=utils_1.getItemClientSideWidth(this.props,slidesToShow,containerWidth);this.setState({containerWidth:containerWidth,itemWidth:itemWidth_1},function(){_this.props.infinite&&_this.setClones(slidesToShow,itemWidth_1,shouldCorrectItemPosition,resetCurrentSlide);}),shouldCorrectItemPosition&&this.correctItemsPosition(itemWidth_1);}},Carousel.prototype.correctItemsPosition=function(itemWidth,isAnimationAllowed,setToDomDirectly){isAnimationAllowed&&(this.isAnimationAllowed=!0),!isAnimationAllowed&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var nextTransform=this.state.totalItems<this.state.slidesToShow?0:-itemWidth*this.state.currentSlide;setToDomDirectly&&this.setTransformDirectly(nextTransform,!0),this.setState({transform:nextTransform});},Carousel.prototype.onResize=function(value){var shouldCorrectItemPosition;shouldCorrectItemPosition=!!this.props.infinite&&("boolean"!=typeof value||!value),this.setItemsToShow(shouldCorrectItemPosition);},Carousel.prototype.componentDidUpdate=function(_a,_b){var _this=this,keyBoardControl=_a.keyBoardControl,autoPlay=_a.autoPlay,children=_a.children,containerWidth=_b.containerWidth,domLoaded=_b.domLoaded,currentSlide=_b.currentSlide;this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==containerWidth&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){_this.setItemsToShow(!0);},this.props.transitionDuration||defaultTransitionDuration)),keyBoardControl&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!keyBoardControl&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),autoPlay&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),autoPlay||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),children.length!==this.props.children.length?setTimeout(function(){_this.props.infinite?_this.setClones(_this.state.slidesToShow,_this.state.itemWidth,!0,!0):_this.resetTotalItems();},this.props.transitionDuration||defaultTransitionDuration):this.props.infinite&&this.state.currentSlide!==currentSlide&&this.correctClonesPosition({domLoaded:domLoaded}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform);},Carousel.prototype.correctClonesPosition=function(_a){var _this=this,domLoaded=_a.domLoaded,childrenArr=React.Children.toArray(this.props.children),_b=utils_1.checkClonesPosition(this.state,childrenArr,this.props),isReachingTheEnd=_b.isReachingTheEnd,isReachingTheStart=_b.isReachingTheStart,nextSlide=_b.nextSlide,nextPosition=_b.nextPosition;this.state.domLoaded&&domLoaded&&(isReachingTheEnd||isReachingTheStart)&&(this.isAnimationAllowed=!1,setTimeout(function(){_this.setState({transform:nextPosition,currentSlide:nextSlide});},this.props.transitionDuration||defaultTransitionDuration));},Carousel.prototype.next=function(slidesHavePassed){var _this=this;void 0===slidesHavePassed&&(slidesHavePassed=0);var _a=this.props,afterChange=_a.afterChange,beforeChange=_a.beforeChange;if(!utils_1.notEnoughChildren(this.state)){var _b=utils_1.populateNextSlides(this.state,this.props,slidesHavePassed),nextSlides=_b.nextSlides,nextPosition=_b.nextPosition,previousSlide=this.state.currentSlide;void 0!==nextSlides&&void 0!==nextPosition&&("function"==typeof beforeChange&&beforeChange(nextSlides,this.getState()),this.isAnimationAllowed=!0,this.setState({transform:nextPosition,currentSlide:nextSlides},function(){"function"==typeof afterChange&&setTimeout(function(){afterChange(previousSlide,_this.getState());},_this.props.transitionDuration||defaultTransitionDuration);}));}},Carousel.prototype.previous=function(slidesHavePassed){var _this=this;void 0===slidesHavePassed&&(slidesHavePassed=0);var _a=this.props,afterChange=_a.afterChange,beforeChange=_a.beforeChange;if(!utils_1.notEnoughChildren(this.state)){var _b=utils_1.populatePreviousSlides(this.state,this.props,slidesHavePassed),nextSlides=_b.nextSlides,nextPosition=_b.nextPosition;if(void 0!==nextSlides&&void 0!==nextPosition){var previousSlide=this.state.currentSlide;"function"==typeof beforeChange&&beforeChange(nextSlides,this.getState()),this.isAnimationAllowed=!0,this.setState({transform:nextPosition,currentSlide:nextSlides},function(){"function"==typeof afterChange&&setTimeout(function(){afterChange(previousSlide,_this.getState());},_this.props.transitionDuration||defaultTransitionDuration);});}}},Carousel.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout);},Carousel.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0;},Carousel.prototype.handleDown=function(e){if(!(!types_1.isMouseMoveEvent(e)&&!this.props.swipeable||types_1.isMouseMoveEvent(e)&&!this.props.draggable||this.isInThrottle)){var _a=types_1.isMouseMoveEvent(e)?e:e.touches[0],clientX=_a.clientX,clientY=_a.clientY;this.onMove=!0,this.initialX=clientX,this.initialY=clientY,this.lastX=clientX,this.isAnimationAllowed=!1;}},Carousel.prototype.handleMove=function(e){if(!(!types_1.isMouseMoveEvent(e)&&!this.props.swipeable||types_1.isMouseMoveEvent(e)&&!this.props.draggable||utils_1.notEnoughChildren(this.state))){var _a=types_1.isMouseMoveEvent(e)?e:e.touches[0],clientX=_a.clientX,clientY=_a.clientY,diffX=this.initialX-clientX,diffY=this.initialY-clientY;if(this.onMove){if(!(Math.abs(diffX)>Math.abs(diffY)))return;var _b=utils_1.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,clientX,this.transformPlaceHolder),direction=_b.direction,nextPosition=_b.nextPosition,canContinue=_b.canContinue;direction&&(this.direction=direction,canContinue&&void 0!==nextPosition&&this.setTransformDirectly(nextPosition)),this.lastX=clientX;}}},Carousel.prototype.handleOut=function(e){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var shouldDisableOnMobile="touchend"===e.type&&!this.props.swipeable,shouldDisableOnDesktop=("mouseleave"===e.type||"mouseup"===e.type)&&!this.props.draggable;if(!shouldDisableOnMobile&&!shouldDisableOnDesktop&&this.onMove){if(this.setAnimationDirectly(!0),"right"===this.direction)if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var slidesHavePassed=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(slidesHavePassed);}else this.correctItemsPosition(this.state.itemWidth,!0,!0);if("left"===this.direction)if(this.lastX-this.initialX>this.props.minimumTouchDrag){slidesHavePassed=Math.round((this.lastX-this.initialX)/this.state.itemWidth);this.previous(slidesHavePassed);}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.resetMoveStatus();}},Carousel.prototype.isInViewport=function(el){var _a=el.getBoundingClientRect(),_b=_a.top,top=void 0===_b?0:_b,_c=_a.left,left=void 0===_c?0:_c,_d=_a.bottom,bottom=void 0===_d?0:_d,_e=_a.right,right=void 0===_e?0:_e;return 0<=top&&0<=left&&bottom<=(window.innerHeight||document.documentElement.clientHeight)&&right<=(window.innerWidth||document.documentElement.clientWidth)},Carousel.prototype.isChildOfCarousel=function(el){return !!(el instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(el)},Carousel.prototype.onKeyUp=function(e){var target=e.target;switch(e.keyCode){case 37:if(this.isChildOfCarousel(target))return this.previous();break;case 39:if(this.isChildOfCarousel(target))return this.next();break;case 9:if(this.isChildOfCarousel(target)&&target instanceof HTMLInputElement&&!this.isInViewport(target))return this.next()}},Carousel.prototype.handleEnter=function(e){types_1.isMouseMoveEvent(e)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0);},Carousel.prototype.goToSlide=function(slide,skipCallbacks){var _this=this;if(!this.isInThrottle){var itemWidth=this.state.itemWidth,_a=this.props,afterChange=_a.afterChange,beforeChange=_a.beforeChange,previousSlide=this.state.currentSlide;"function"!=typeof beforeChange||skipCallbacks&&("object"!=typeof skipCallbacks||skipCallbacks.skipBeforeChange)||beforeChange(slide,this.getState()),this.isAnimationAllowed=!0,this.setState({currentSlide:slide,transform:-itemWidth*slide},function(){_this.props.infinite&&_this.correctClonesPosition({domLoaded:!0}),"function"!=typeof afterChange||skipCallbacks&&("object"!=typeof skipCallbacks||skipCallbacks.skipAfterChange)||setTimeout(function(){afterChange(previousSlide,_this.getState());},_this.props.transitionDuration||defaultTransitionDuration);});}},Carousel.prototype.getState=function(){return this.state},Carousel.prototype.renderLeftArrow=function(disbaled){var _this=this,customLeftArrow=this.props.customLeftArrow;return React.createElement(Arrows_1.LeftArrow,{customLeftArrow:customLeftArrow,getState:function(){return _this.getState()},previous:this.previous,disabled:disbaled})},Carousel.prototype.renderRightArrow=function(disbaled){var _this=this,customRightArrow=this.props.customRightArrow;return React.createElement(Arrows_1.RightArrow,{customRightArrow:customRightArrow,getState:function(){return _this.getState()},next:this.next,disabled:disbaled})},Carousel.prototype.renderButtonGroups=function(){var _this=this,customButtonGroup=this.props.customButtonGroup;return customButtonGroup?React.cloneElement(customButtonGroup,{previous:function(){return _this.previous()},next:function(){return _this.next()},goToSlide:function(slideIndex,skipCallbacks){return _this.goToSlide(slideIndex,skipCallbacks)},carouselState:this.getState()}):null},Carousel.prototype.renderDotsList=function(){var _this=this;return React.createElement(Dots_1.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return _this.getState()}})},Carousel.prototype.renderCarouselItems=function(){var clones=[];if(this.props.infinite){var childrenArr=React.Children.toArray(this.props.children);clones=utils_1.getClones(this.state.slidesToShow,childrenArr);}return React.createElement(CarouselItems_1.default,{clones:clones,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:utils_1.notEnoughChildren(this.state),props:this.props})},Carousel.prototype.render=function(){var _a=this.props,deviceType=_a.deviceType,arrows=_a.arrows,renderArrowsWhenDisabled=_a.renderArrowsWhenDisabled,removeArrowOnDeviceType=_a.removeArrowOnDeviceType,infinite=_a.infinite,containerClass=_a.containerClass,sliderClass=_a.sliderClass,customTransition=_a.customTransition,additionalTransfrom=_a.additionalTransfrom,renderDotsOutside=_a.renderDotsOutside,renderButtonGroupOutside=_a.renderButtonGroupOutside,className=_a.className;"production"!==process.env.NODE_ENV&&utils_1.throwError(this.state,this.props);var _b=utils_1.getInitialState(this.state,this.props),shouldRenderOnSSR=_b.shouldRenderOnSSR,shouldRenderAtAll=_b.shouldRenderAtAll,isLeftEndReach=utils_1.isInLeftEnd(this.state),isRightEndReach=utils_1.isInRightEnd(this.state),shouldShowArrows=arrows&&!(removeArrowOnDeviceType&&(deviceType&&-1<removeArrowOnDeviceType.indexOf(deviceType)||this.state.deviceType&&-1<removeArrowOnDeviceType.indexOf(this.state.deviceType)))&&!utils_1.notEnoughChildren(this.state)&&shouldRenderAtAll,disableLeftArrow=!infinite&&isLeftEndReach,disableRightArrow=!infinite&&isRightEndReach,currentTransform=common_1.getTransform(this.state,this.props);return React.createElement(React.Fragment,null,React.createElement("div",{className:"react-multi-carousel-list "+containerClass+" "+className,ref:this.containerRef},React.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+sliderClass,style:{transition:this.isAnimationAllowed?customTransition||defaultTransition:"none",overflow:shouldRenderOnSSR?"hidden":"unset",transform:"translate3d("+(currentTransform+additionalTransfrom)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),shouldShowArrows&&(!disableLeftArrow||renderArrowsWhenDisabled)&&this.renderLeftArrow(disableLeftArrow),shouldShowArrows&&(!disableRightArrow||renderArrowsWhenDisabled)&&this.renderRightArrow(disableRightArrow),shouldRenderAtAll&&!renderButtonGroupOutside&&this.renderButtonGroups(),shouldRenderAtAll&&!renderDotsOutside&&this.renderDotsList()),shouldRenderAtAll&&renderDotsOutside&&this.renderDotsList(),shouldRenderAtAll&&renderButtonGroupOutside&&this.renderButtonGroups())},Carousel.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0},Carousel}(React.Component);Carousel$2.default=Carousel;

Object.defineProperty(lib,"__esModule",{value:!0});var Carousel_1=Carousel$2;lib.default=Carousel_1.default;

var reactMultiCarousel = lib;

var css_248z$2 = ".newscard {\r\n    display: none;\r\n}\r\n@media (max-width: 768px) {\r\n    .newscard {\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n    .newscard .newscard-div {\r\n        display: flex;\r\n        justify-content: center;\r\n        flex-direction: column;\r\n        margin: 15px;\r\n    }\r\n    .newscard .newscard-div img {\r\n        width: 100%;\r\n    }\r\n    .newscard .newscard-div div {\r\n        margin: 15px 0;\r\n    }\r\n    .newscard .newscard-div div .para-card {\r\n        margin-bottom: 0;\r\n    }\r\n    .newscard .newscard-div div .para-card span {\r\n        color: darkred;\r\n    }\r\n    .newscard .newscard-div div .card-heading {\r\n        margin-top: 5px;\r\n        margin-right: 20px;\r\n    }\r\n}\r\n";
styleInject(css_248z$2);

var Newscard = function (_a) {
    var page8 = _a.page8;
    return (React$6.createElement(Row$1, { className: "newscard" },
        page8.images.map(function (value, index) {
            return React$6.createElement("div", { className: "newscard-div", key: index },
                React$6.createElement("img", { src: value.image, alt: "Image not Found" }),
                React$6.createElement("div", null,
                    React$6.createElement("p", { className: "para-card" },
                        "Posted By ",
                        React$6.createElement("span", null, value.title)),
                    React$6.createElement("h5", { className: "card-heading" }, value.text)));
        }),
        React$6.createElement("div", { className: "news-button" },
            React$6.createElement("button", null, "view more"))));
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
    return (React$6.createElement("section", { className: "news" },
        React$6.createElement(Container$1, null,
            React$6.createElement(Heading, { heading: "News" }),
            React$6.createElement(Row$1, null,
                React$6.createElement(Col$1, { lg: 12 },
                    React$6.createElement(reactMultiCarousel, { ssr: true, partialVisbile: true, deviceType: deviceType, itemClass: "image-item", responsive: responsive }, page8.images.map(function (value, index) {
                        return React$6.createElement("div", { className: "news-card", key: index },
                            React$6.createElement("img", { src: value.image, alt: "Image not Found" }),
                            React$6.createElement("div", null,
                                React$6.createElement("p", { className: "para-card" },
                                    "Posted By ",
                                    React$6.createElement("span", null, value.title)),
                                React$6.createElement("h5", { className: "card-heading" }, value.text)));
                    })),
                    React$6.createElement("div", { className: "news-button" },
                        React$6.createElement("button", null, "view more")),
                    React$6.createElement(Newscard, { page8: page8 }))))));
};

var css_248z$1 = ".maps {\r\n    padding-top: 70px;\r\n    padding-bottom: 50px;\r\n    background: var(--creamish);\r\n}\r\n.maps .maps-para {\r\n    width: fit-content;\r\n    padding-bottom: 5px;\r\n    margin-right: 15%;\r\n    border-bottom: 2px solid var(--orange);\r\n}\r\n@media (max-width: 992px) {\r\n    .maps .maps-para {\r\n        font-size: 25px;\r\n        margin-right: 50%;\r\n        margin-left: 10px;\r\n    }\r\n    .maps .maps-heading {\r\n        margin-left: 10px;\r\n        margin-bottom: 15px;\r\n    }\r\n}\r\n@media (max-width: 600px) {\r\n    .maps .maps-para {\r\n        margin-right: 30%;\r\n    }\r\n}\r\n.maps .maps-heading {\r\n    text-transform: uppercase;\r\n}\r\n.maps .maps-name-col {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.maps .maps-name-col .maps-name {\r\n    width: 100%;\r\n    height: 120px;\r\n    margin: 5px;\r\n    padding: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 8px;\r\n    background: #fff;\r\n    cursor: pointer;\r\n}\r\n.maps .maps-name-col .maps-name:hover {\r\n    box-shadow: 0px 1px 1px 1px var(--lightgray);\r\n}\r\n@media (max-width: 992px) {\r\n    .maps .maps-name-col .maps-name {\r\n        margin-bottom: 15px;\r\n    }\r\n}\r\n";
styleInject(css_248z$1);

var Maps = function (_a) {
    var page9 = _a.page9;
    return (React$6.createElement("section", { className: "maps" },
        React$6.createElement(Container$1, null,
            React$6.createElement(Row$1, null,
                React$6.createElement(Col$1, { lg: 2 },
                    React$6.createElement("h6", { className: "maps-para" }, page9.title),
                    React$6.createElement("h3", { className: "maps-heading" }, page9.heading)),
                React$6.createElement(Col$1, { lg: 10, className: "ml-2" },
                    React$6.createElement(Row$1, null,
                        page9.maps_name.map(function (value, index) {
                            return React$6.createElement(Col$1, { xs: 6, sm: 6, md: 6, lg: 2, key: index, className: "maps-name-col" },
                                React$6.createElement("div", { className: "maps-name" },
                                    React$6.createElement("h3", null, value)));
                        }),
                        React$6.createElement(Col$1, { lg: 2 })))))));
};

var css_248z = ".websites {\r\n    background: var(--lightpeach);\r\n    padding-top: 100px;\r\n    padding-bottom: 50px;\r\n}\r\n.websites .website-col {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    position: relative;\r\n}\r\n.websites .website-col .website-heading {\r\n    text-transform: uppercase;\r\n}\r\n.websites .website-col img {\r\n    position: absolute;\r\n    width: fit-content;\r\n    top: 30px;\r\n}\r\n.websites .website-row {\r\n    margin-top: 3%;\r\n}\r\n.websites .website-row .website-image {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    padding-top: 15px;\r\n}\r\n.websites .website-row .website-image .website-image-parent {\r\n    width: 100%;\r\n    max-height: 200px;\r\n}\r\n.websites .website-row .website-image .website-image-parent img {\r\n    height: 100%;\r\n    object-fit: cover;\r\n    width: 100%;\r\n    border-radius: 8px;\r\n}\r\n.websites .website-row .website-image p {\r\n    font-weight: 600;\r\n    font-size: 17px;\r\n}\r\n@media (max-width: 992px) {\r\n    .websites .website-row .website-image {\r\n        width: 100%;\r\n        height: auto;\r\n        margin-bottom: 20px;\r\n    }\r\n    .websites .website-row .website-image .website-image-parent {\r\n        max-height: 300px;\r\n    }\r\n    .websites .website-row .website-image p {\r\n        font-size: 20px;\r\n    }\r\n}\r\n@media (max-width: 600px) {\r\n    .websites .website-row {\r\n        margin-top: 10%;\r\n    }\r\n    .websites .website-row .website-image {\r\n        width: 90%;\r\n    }\r\n}\r\n";
styleInject(css_248z);

var Websites = function (_a) {
    var page10 = _a.page10;
    console.log("Websites.js>5", page10);
    return (React$6.createElement("section", { className: "websites" },
        React$6.createElement(Container$1, null,
            React$6.createElement(Heading, { heading: "Our Websites" }),
            React$6.createElement(Row$1, { className: "website-row" }, page10.website.map(function (value, index) {
                return React$6.createElement(Col$1, { md: 6, lg: 3, key: index, className: "d-flex justify-content-center" },
                    React$6.createElement("div", { className: "website-image" },
                        React$6.createElement("div", { className: "website-image-parent" },
                            React$6.createElement("img", { src: value.image, alt: "Image" })),
                        React$6.createElement("p", { className: "mt-2" }, value.text)));
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
var TestComponent = function (_a) {
    var deviceType = _a.deviceType;
    return (React$6.createElement("div", null,
        React$6.createElement(Brodcast, { page3: main.page3, page4: main.page4 }),
        React$6.createElement(About, { page5: main.page5 }),
        React$6.createElement(Review, { page6: main.page6 }),
        React$6.createElement(Calendar, { page7: main.page7 }),
        React$6.createElement(News, { deviceType: deviceType, page8: main.page8 }),
        React$6.createElement(Maps, { page9: main.page9 }),
        React$6.createElement(Websites, { page10: main.page10 })));
};

export { TestComponent as Main, TestComponent$1 as TestComponent };
//# sourceMappingURL=index.es.js.map
