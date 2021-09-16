import React from "react";
import classes from "./SignIn.module.scss";
import  Logo  from "../../assets/images/logo.svg";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
const SignIn = () => {
	return (
		<div className={classes.Container}>
			<img src={Logo} alt="Logo" />
			<div className={classes.Ellipse}></div>
			<h1>Sign In</h1>
			<form>
				<label for="email" name="email">
					Email
				</label>
				<input
					type="email"
					name="email"
					required
					placeholder="Enter your E-Mail address"
				/>
				<label for="password" name="password">
					Password
				</label>
				<input
					type="password"
					name="password"
					required
					placeholder="Enter your password"
				/>
				<Link to="/home">
					<Button type="submit" text="Sign In" />
				</Link>
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

export default SignIn;
