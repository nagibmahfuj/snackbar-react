"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showSnackBar = showSnackBar;
exports.SnackBar = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const INFO = /*#__PURE__*/_react.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 40,
  height: 40,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#2E9AFE",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round" // style={{ marginRight: 20, minWidth: 24 }}

}, /*#__PURE__*/_react.default.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), /*#__PURE__*/_react.default.createElement("line", {
  x1: 12,
  y1: 16,
  x2: 12,
  y2: 12
}), /*#__PURE__*/_react.default.createElement("line", {
  x1: 12,
  y1: 8,
  x2: 12,
  y2: 8
}));

const ERROR = /*#__PURE__*/_react.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 40,
  height: 40,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#FF0040",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round" // style={{ marginRight: 20, minWidth: 24 }}

}, /*#__PURE__*/_react.default.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), /*#__PURE__*/_react.default.createElement("line", {
  x1: 12,
  y1: 8,
  x2: 12,
  y2: 12
}), /*#__PURE__*/_react.default.createElement("line", {
  x1: 12,
  y1: 16,
  x2: 12,
  y2: 16
}));

const SUCCESS = /*#__PURE__*/_react.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 40,
  height: 40,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#31B404",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round" // style={{ marginRight: 20, minWidth: 24 }}

}, /*#__PURE__*/_react.default.createElement("path", {
  d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
}), /*#__PURE__*/_react.default.createElement("polyline", {
  points: "22 4 12 14.01 9 11.01"
}));

const SnackBar = _ref => {
  let {
    children,
    //
    open = false,
    handleClose = null,
    message = "",
    type = null,
    autoHideDuration = 5000,
    autoHide = true
  } = _ref;

  const [barOpen, setBarOpen] = _react.default.useState(false); // Similar to componentDidMount and componentDidUpdate:


  _react.default.useEffect(() => {
    // console.log(open, barOpen);
    if (open === true && barOpen === false) {
      setTimeout(() => {
        setBarOpen(true);
      }, 100);
    }

    handleAutoClose();
  }, []);

  const handleAutoClose = () => {
    if (autoHide) {
      setTimeout(() => {
        // customHandleClose();
        // "closeBtn"
        document.querySelector("#closeBtn") && document.querySelector("#closeBtn").click();
      }, autoHideDuration);
    }
  };

  const customHandleClose = () => {
    document.querySelector("#snackbarNotification").className = "notification";

    if (open === true && barOpen === true) {
      setTimeout(() => {
        handleClose && handleClose();
        removeElementReconfirm();
      }, 1000);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "snackbar_react_ui"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "snackbarNotification",
    className: barOpen ? "notification active" : "notification"
  }, type && /*#__PURE__*/_react.default.createElement("div", {
    className: "left"
  }, (() => {
    switch (type) {
      case "info":
        return INFO;

      case "error":
        return ERROR;

      case "success":
        return SUCCESS;

      default:
        return null;
    }
  })()), /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, message), /*#__PURE__*/_react.default.createElement("div", {
    id: "closeBtn",
    className: "close ripple",
    onClick: customHandleClose
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#FFFFFF",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      marginRight: 0,
      minWidth: 24
    }
  }, /*#__PURE__*/_react.default.createElement("line", {
    x1: 18,
    y1: 6,
    x2: 6,
    y2: 18
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: 6,
    y1: 6,
    x2: 18,
    y2: 18
  })))));
};

exports.SnackBar = SnackBar;

function createElementReconfirm(properties) {
  let renderComponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  let divTarget = document.getElementById("snackBar");

  if (divTarget) {
    // Rerender - the mounted ReactConfirmAlert
    (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(SnackBar, properties), divTarget);
  } else {
    // Mount the ReactConfirmAlert component
    divTarget = document.createElement("div");
    divTarget.id = "snackBar";
    document.body.appendChild(divTarget);
    (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(SnackBar, properties), divTarget);
  }
}

function removeElementReconfirm() {
  const target = document.getElementById("snackBar");

  if (target) {
    (0, _reactDom.unmountComponentAtNode)(target);
    target.parentNode.removeChild(target);
  }
}

function showSnackBar(properties) {
  createElementReconfirm(properties);
}