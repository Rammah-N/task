import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import axios from "axios";
import {useState, useEffect } from "react";
import {
	Route,
	Switch,
	Redirect,
	useHistory
} from "react-router-dom";
import Home from "../Pages/Home/Home";
function App() {
	const api = process.env.REACT_APP_AUTH_API;
	const [isAuthenticated, setAuth] = useState(false);
	const [token, setToken] = useState(null);
	const history = useHistory();
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
			})
			.catch((error) => {
				alert("Wrong login credentials!!");
			});
	};
	useEffect(() => {
		if(token) {
			setAuth(true)
			history.push("/home")
		}
	}, [token])
	return (
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
	);
}

export default App;
