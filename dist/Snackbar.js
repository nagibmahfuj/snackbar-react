import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import "./Snackbar.scss";
const INFO = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 40,
  height: 40,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#2E9AFE",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round" // style={{ marginRight: 20, minWidth: 24 }}

}, /*#__PURE__*/React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), /*#__PURE__*/React.createElement("line", {
  x1: 12,
  y1: 16,
  x2: 12,
  y2: 12
}), /*#__PURE__*/React.createElement("line", {
  x1: 12,
  y1: 8,
  x2: 12,
  y2: 8
}));
const ERROR = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 40,
  height: 40,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#FF0040",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round" // style={{ marginRight: 20, minWidth: 24 }}

}, /*#__PURE__*/React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), /*#__PURE__*/React.createElement("line", {
  x1: 12,
  y1: 8,
  x2: 12,
  y2: 12
}), /*#__PURE__*/React.createElement("line", {
  x1: 12,
  y1: 16,
  x2: 12,
  y2: 16
}));
const SUCCESS = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 40,
  height: 40,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#31B404",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round" // style={{ marginRight: 20, minWidth: 24 }}

}, /*#__PURE__*/React.createElement("path", {
  d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "22 4 12 14.01 9 11.01"
}));
export const SnackBarPopup = ({
  children,
  //
  open = false,
  handleClose = null,
  message = "",
  type = null,
  autoHideDuration = 5000,
  autoHide = true
}) => {
  const [barOpen, setBarOpen] = React.useState(false); // Similar to componentDidMount and componentDidUpdate:

  React.useEffect(() => {
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

  return /*#__PURE__*/React.createElement("div", {
    className: "snackbar_react_ui"
  }, /*#__PURE__*/React.createElement("div", {
    id: "snackbarNotification",
    className: barOpen ? "notification active" : "notification"
  }, type && /*#__PURE__*/React.createElement("div", {
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
  })()), /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, message), /*#__PURE__*/React.createElement("div", {
    id: "closeBtn",
    className: "close ripple",
    onClick: customHandleClose
  }, /*#__PURE__*/React.createElement("svg", {
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
  }, /*#__PURE__*/React.createElement("line", {
    x1: 18,
    y1: 6,
    x2: 6,
    y2: 18
  }), /*#__PURE__*/React.createElement("line", {
    x1: 6,
    y1: 6,
    x2: 18,
    y2: 18
  })))));
};

function createElementReconfirm(properties, renderComponent = true) {
  let divTarget = document.getElementById("snackBarPopup");

  if (divTarget) {
    // Rerender - the mounted ReactConfirmAlert
    render( /*#__PURE__*/React.createElement(SnackBarPopup, properties), divTarget);
  } else {
    // Mount the ReactConfirmAlert component
    divTarget = document.createElement("div");
    divTarget.id = "snackBarPopup";
    document.body.appendChild(divTarget);
    render( /*#__PURE__*/React.createElement(SnackBarPopup, properties), divTarget);
  }
}

function removeElementReconfirm() {
  const target = document.getElementById("snackBarPopup");

  if (target) {
    unmountComponentAtNode(target);
    target.parentNode.removeChild(target);
  }
}

export function showSnackBar(properties) {
  createElementReconfirm(properties);
}