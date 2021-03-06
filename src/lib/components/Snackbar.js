import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

const INFO = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={40}
		height={40}
		viewBox="0 0 24 24"
		fill="none"
		stroke="#2E9AFE"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		// style={{ marginRight: 20, minWidth: 24 }}
	>
		<circle cx={12} cy={12} r={10} />
		<line x1={12} y1={16} x2={12} y2={12} />
		<line x1={12} y1={8} x2={12} y2={8} />
	</svg>
);

const ERROR = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={40}
		height={40}
		viewBox="0 0 24 24"
		fill="none"
		stroke="#FF0040"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		// style={{ marginRight: 20, minWidth: 24 }}
	>
		<circle cx={12} cy={12} r={10} />
		<line x1={12} y1={8} x2={12} y2={12} />
		<line x1={12} y1={16} x2={12} y2={16} />
	</svg>
);

const SUCCESS = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={40}
		height={40}
		viewBox="0 0 24 24"
		fill="none"
		stroke="#31B404"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		// style={{ marginRight: 20, minWidth: 24 }}
	>
		<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
		<polyline points="22 4 12 14.01 9 11.01" />
	</svg>
);

export const Snackbar = ({
	children, //
	open = false,
	handleClose = null,
	message = "",
	type = null,
	autoHideDuration = 5000,
	autoHide = true,
}) => {
	const [barOpen, setBarOpen] = React.useState(false);

	// Similar to componentDidMount and componentDidUpdate:
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
		document.querySelector("#snackbarNotification").className = "snackbar_react_notification";
		if (open === true && barOpen === true) {
			setTimeout(() => {
				handleClose && handleClose();
				removeElementReconfirm();
			}, 1000);
		}
	};

	return (
		<div className="snackbar_react_ui">
			<div id="snackbarNotification" className={barOpen ? "snackbar_react_notification active" : "snackbar_react_notification"}>
				{type && (
					<div className="left">
						{(() => {
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
						})()}
					</div>
				)}
				<div style={{ flex: 1 }} className="text">
					{message}
					{/* <a className="ripple rect" href="#">
						Learn more
					</a> */}
				</div>
				<div id="closeBtn" className="close ripple" onClick={customHandleClose}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={20}
						height={20}
						viewBox="0 0 24 24"
						fill="none"
						stroke="#FFFFFF"
						strokeWidth={2}
						strokeLinecap="round"
						strokeLinejoin="round"
						style={{ marginRight: 0, minWidth: 24 }}
					>
						<line x1={18} y1={6} x2={6} y2={18} />
						<line x1={6} y1={6} x2={18} y2={18} />
					</svg>
				</div>
			</div>
		</div>
	);
};

function createElementReconfirm(properties, renderComponent = true) {
	let divTarget = document.getElementById("snackBar");
	if (divTarget) {
		// Rerender - the mounted ReactConfirmAlert
		render(<Snackbar {...properties} />, divTarget);
	} else {
		// Mount the ReactConfirmAlert component
		divTarget = document.createElement("div");
		divTarget.id = "snackBar";
		document.body.appendChild(divTarget);
		render(<Snackbar {...properties} />, divTarget);
	}
}

function removeElementReconfirm() {
	const target = document.getElementById("snackBar");
	if (target) {
		unmountComponentAtNode(target);
		target.parentNode.removeChild(target);
	}
}

export function showSnackbar(properties) {
	createElementReconfirm(properties);
}
