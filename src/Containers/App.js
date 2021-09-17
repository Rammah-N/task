import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

import { react, useState } from "react";
import { createBrowserHistory } from "history";
import { Router } from "react-router";
import {
	Route,
	Switch,
	Redirect,
	withRouter,
	useHistory,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
function App(props) {
	const axios = require("axios");
	const api = process.env.REACT_APP_AUTH_API;
	const [isAuthenticated, setAuth] = useState(false);
	const [token, setToken] = useState(null);
	const history = createBrowserHistory();
	const auth = (e) => {
		e.preventDefault();
		const [email, password] = e.target.elements;
		axios
			.post(api, {
				email: email.value,
				password: password.value,
			})
			.then((response) => {
				setToken(response.data.user.token);
				setAuth(true);
				history.push("/home");
			})
			.catch((error) => {
				alert("Wrong login credentials!!");
			});
	};
	return (
		<Router history={history}>
			<div className="App">
				<Switch>
					<Route path="/" exact>
						<SignIn auth={auth} />
					</Route>
					<Route path="/signup">
						<SignUp />
					</Route>
					<Route path="/home">
						{!isAuthenticated ? <Redirect to="/" /> : <Home />}
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
