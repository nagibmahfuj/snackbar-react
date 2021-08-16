import { Snackbar } from "./lib";
import "./lib/components/styles/main.scss";

function App() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "start",
				justifyContent: "center",
				gap: "1.5rem",
				padding: "5rem",
			}}
		>
			<p>Wow, look at this component library.</p>
			<h5>A notification snackbar:</h5>
			<Snackbar
				open={true} //
				handleClose={() => {
					alert("You pressed the close button");
				}}
				type="success"
				message="Your username/password is not valid."
				autoHide={false}
			/>
		</div>
	);
}

export default App;
