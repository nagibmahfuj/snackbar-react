import { SnackBar } from "./lib";
import "./App.css";

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
			<SnackBar
				open={true} //
				handleClose={() => {
					alert("You pressed the close button");
				}}
				type="success"
				message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				autoHide={false}
			/>
		</div>
	);
}

export default App;
