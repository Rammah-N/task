import React from "react";
import classes from "./Home.module.scss";
import { Dashboard } from '../../Components/Dashboard/Dashboard'
import {Sidebar, Main} from "../../Components/DashboardHome/DashboardHome";
const Home = () => {
	return (
		<div className={classes.Container}>
			<Dashboard />
			<Main />
			<Sidebar />
		</div>
	);
};

export default Home;
