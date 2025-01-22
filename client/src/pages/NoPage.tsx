import { Link } from "react-router-dom";

const NoPage = () => (
	<div className="container">
		<div className="noPage">
			<h1>404</h1>
			<h2>The requested page does not exist.</h2>
			<Link className="link" to="/">
				Return to homepage
			</Link>
		</div>
	</div>
);

export default NoPage;
