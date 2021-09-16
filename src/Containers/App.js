import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home/Home";
function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact>
						<SignIn />
					</Route>
					<Route path="/signup">
						<SignUp />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
