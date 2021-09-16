import React from "react";
import classes from "./SignUp.module.scss";
import Logo  from "../../assets/images/logo.svg";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
const SignUp = () => {
	return (
		<div className={classes.Container}>
		<img src={Logo} alt="Logo" />
				<div className={classes.Ellipse}></div>
				<h1>Sign Up</h1>
				<form>
					<label for="name" name="name">
						Full Name
					</label>
					<input
						type="text"
						name="name"
						required
						placeholder="Enter your full name"
					/>
					<label for="number" name="number">
						Phone Number
					</label>
					<input
						type="text"
						name="number"
						required
						placeholder="Enter your phone number"
					/>
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
						<Button type="submit" text="Sign Up" />
					</Link>
				</form>
				<p>
					Already have an account?
					<Link to="/">
						<span> Sign in</span>
					</Link>
				</p>
		</div>
	);
};

export default SignUp;
