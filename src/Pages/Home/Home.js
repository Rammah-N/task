import React from "react";
import classes from "./Home.module.scss";
import { Redirect } from "react-router-dom";
import { Dashboard } from "../../Components/Dashboard/Dashboard";
import { Sidebar, Main } from "../../Components/DashboardHome/DashboardHome";
const Home = ({ isAuthenticated }) => {


		return (
			<div className={classes.Container}>
				<Dashboard />
				<Main />
				<Sidebar />
			</div>
		);	
};

export default Home;
