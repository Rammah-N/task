import React from "react";
import classes from "./SignIn.module.scss";
import  Logo  from "../../assets/images/logo.svg";
import Button from "../../Components/Button/Button";
import { Link} from "react-router-dom";
import { withRouter } from "react-router";
const SignIn = ({auth}) => {
	return (
		<div className={classes.Container}>
			<img src={Logo} alt="Logo" />
			<div className={classes.Ellipse}></div>
			<h1>Sign In</h1>
			<form  onSubmit={(e) => auth(e)}>
				<label htmlFor="inputEmail" >
					Email
				</label>
				<input
					type="email"
					id="inputEmail"
					
					placeholder="Enter your E-Mail address"
				/>
				<label htmlFor="inputPassword" >
					Password
				</label>
				<input
					type="password"
					id="inputPassword"
					
					placeholder="Enter your password"
				/>
					<Button type="submit" text="Sign In" />
			</form>
			<p>
				Don't have an account?{" "}
				<Link to="/signup">
					<span> Register now!</span>
				</Link>
			</p>
		</div>
	);
};

export default withRouter(SignIn);
