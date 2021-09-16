import React from "react";
import classes from "./DashboardHome.module.scss";
import bellIcon from "../../assets/icons/Bell.svg";
import arrowIcon from "../../assets/icons/arrow.svg";
import appleIcon from "../../assets/icons/apple.png";
import peopleIcon from "../../assets/icons/People.png";
import moneyIcon from "../../assets/icons/Money.png";
import dotsIcon from "../../assets/icons/dots.png";
import stocksUpIcon from "../../assets/icons/StocksUp.png";
import subsChart from "../../assets/images/Chart.png";
import chart2 from "../../assets/images/Chart2.png";
import personsIcon from "../../assets/icons/persons.svg";
import dollarIcon from "../../assets/icons/money.svg";
import locationIcon from "../../assets/icons/location.svg";
import timeIcon from "../../assets/icons/time.svg";
import arrowRight from "../../assets/icons/arrowRight.svg";
import eventLogo1 from "../../assets/images/event_logo_1.svg";
import person1 from "../../assets/images/person1.png";
import person2 from "../../assets/images/person2.png";
import person3 from "../../assets/images/person3.png";
const EventIcon = (props) => {
	return (
		<div className={classes.Event_Icon}>
			<img src={props.icon} alt={props.title} />
			<h5>{props.title}</h5>
		</div>
	);
};
const Leaderboard = (props) => {
	return (
		<div className={classes.Sidebar_Leaderboard_Item}>
			<h5>{props.title}</h5>
      <div>
				<div className={classes.item_info}>
				  <img src={props.img} alt="Icon" />
          <div>
					<h5>{props.imgTitle}</h5>
					<h6>{props.imgSubtitle}</h6>
          </div>
				</div>
				<h5 style={{marginRight: '20px'}}>{props.rank}</h5>
      </div>
		</div>
	);
};
const Event = (props) => {
	return (
		<div className={classes.Event}>
			<div className={classes.Event_Info}>
				<img className={classes.Event_Logo} src={props.logo} alt="Logo" />
				<div>
					<h3>{props.title}</h3>
					<h4>{props.subtitle}</h4>
				</div>
			</div>
			<EventIcon icon={personsIcon} title={props.personsTitle} />
			<EventIcon icon={dollarIcon} title={props.moneyTitle} />
			<EventIcon icon={locationIcon} titl e={props.locationTitle} />
			<EventIcon icon={timeIcon} title={props.timeTitle} />
			<img className={classes.arrowRight} src={arrowRight} alt="Arrow" />
		</div>
	);
};
export const Main = () => {
	return (
		<div className={classes.Main}>
			<h1>Welcome, Apple</h1>
			<div className={classes.Main_Subs}>
				<div className={classes.Stats}>
					<div className={classes.Stats_stat}>
						<img src={peopleIcon} alt="People" />
						<div>
							<h2>5000</h2>
							<p>Subscribers Engaged with your events</p>
						</div>
					</div>
					<div className={classes.Stats_stat}>
						<img src={moneyIcon} alt="money" />
						<div>
							<h2 style={{ color: "#6C6DFF" }}>50%</h2>
							<p>
								Of <strong>4000</strong> used coints
							</p>
						</div>
					</div>
				</div>
				<div className={classes.Charts}>
					<div>
						<div>
							<h2>Subscribers</h2>
							<img src={stocksUpIcon} alt="Stocks Up" />
						</div>
						<img src={dotsIcon} alt="More" />
					</div>
					<img src={subsChart} style={{ width: "350px" }} alt="Chart" />
				</div>
			</div>
			<div className={classes.Main_Events}>
				<h2 className={classes.Title}>Active Events</h2>
				<Event
					logo={eventLogo1}
					title="IOS 14 Release"
					subtitle="Special event"
					personsTitle="300"
					moneyTitle="500k"
					locationTitle="Jeddah"
					timeTitle="3 Days Left"
				/>
				<Event
					logo={eventLogo1}
					title="The New Airpods Max"
					subtitle="Special event"
					personsTitle="700"
					moneyTitle="2500k"
					locationTitle="Riyadh"
					timeTitle="2 Days Left"
				/>
				<Event
					logo={eventLogo1}
					title="IOS 14 Release"
					subtitle="Special event"
					personsTitle="300"
					moneyTitle="500k"
					locationTitle="Jeddah"
					timeTitle="3 Days Left"
				/>
			</div>
		</div>
	);
};
export const Sidebar = () => {
	return (
		<div className={classes.Sidebar}>
			<div className={classes.topBar}>
				<img src={bellIcon} alt="Notifications" />
				<div>
					<img src={arrowIcon} alt="Arrow" />
					<img src={appleIcon} alt="Apple" />
				</div>
			</div>
			<div className={classes.Sidebar_Events}>
				<h2>Events Activities</h2>
				<img src={chart2} alt="Chart" />
			</div>
			<div className={classes.Sidebar_Leaderboard}>
				<h2>Leaderboard</h2>
				<Leaderboard
					title="IOS 14 Release"
					img={person1}
					imgTitle="John Doe"
					imgSubtitle="800 Coin"
					rank="Top Ranked"
				/>
				<Leaderboard
					title="The New Airpods Max"
					img={person2}
					imgTitle="Jane Doe"
					imgSubtitle="900 Coin"
					rank="Top Ranked"
				/>
				<Leaderboard
					title="Lineup Romer Hyperbeast"
					img={person3}
					imgTitle="Ali Mohammed"
					imgSubtitle="540 Coin"
					rank="Top Ranked"
				/>
			</div>
		</div>
	);
};
