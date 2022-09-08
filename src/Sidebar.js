import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import avatar from "./assests/Aleksandr.jpg";
const Sidebar = () => {
	function recentItem(topic) {
		return <div className="sidebar-recentItem">
			<span className="sidebar-hash">#</span>
			<p>{topic}</p>
		</div>;
	}
	return (
		<div className="sidebar">
			<div className="sidebar-top">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBMy7xBHWKbtCrS9juXLQFyfyetkT6mc4YZSj6U_MziA&s"
					alt=""
				/>
				<Avatar className="sidebar-avatar" src={avatar} />
				<h2>Aleksandr Kononov</h2>
				<h4>FE developer alexandrokononov@gmail.com</h4>
			</div>
			<div className="sidebar-stats">
				<div className="sidebar-stat">
					<p>Who viewed you</p>
					<p className="sidebar-statNumber">251</p>
				</div>
				<div className="sidebar-stat">
					<p>Views on post</p>
					<p className="sidebar-statNumber">1025</p>
				</div>
			</div>

			<div className="sidebar-bottom">
				<p>Recent</p>
				{recentItem("reactjs")}
				{recentItem("software")}
				{recentItem("programming")}
			</div>
		</div>
	);
};

export default Sidebar;
