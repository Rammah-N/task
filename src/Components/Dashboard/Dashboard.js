import Logo from "../../assets/images/logo.svg";
import homeIcon from "../../assets/icons/home.svg";
import starIcon from "../../assets/icons/stars.svg";
import puzzleIcon from "../../assets/icons/puzzle.svg";
import giftIcon from "../../assets/icons/gift.svg";
import walletIcon from "../../assets/icons/wallet.svg";
import classes from './Dashboard.module.scss'
const DashBoardItem = ({ title, icon }) => {
	return (
		<div className={classes.Dashboard_Item}>
			<img src={icon} alt="Icon" />
			<h3>{title}</h3>
		</div>
	);
};
export const Dashboard = () => {
	return (
		<div className={classes.Dashboard}>
			<div className={classes.Dashboard_Logos}>
				<img src={Logo} alt="Logo" />
				<div>
					<h2>Win2Win</h2>
					<h3>Dashboard</h3>
				</div>
			</div>
			<div className={classes.Dashboard_Main}>
				<DashBoardItem title="Home" icon={homeIcon} />
				<DashBoardItem title="Wallet" icon={walletIcon} />
			</div>
			<div className={classes.Dashboard_Events}>
      <h2>Events</h2>
				<DashBoardItem title="Random Event" icon={puzzleIcon} />
				<DashBoardItem title="Special Event" icon={giftIcon} />
				<DashBoardItem title="Competition Event" icon={starIcon} />
			</div>
		</div>
	);
};