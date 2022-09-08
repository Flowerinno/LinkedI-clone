//@ts-nocheck
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import avatar from "./assests/Aleksandr.jpg";
const Header = () => {
	return (
		<div className="header">
			<div className="header__left">
				<img
					alt=""
					src="https://pngimg.com/uploads/linkedIn/small/linkedIn_PNG19.png"
				/>
				<div className="header__search">
					<SearchIcon />
					<input type="text" />
				</div>
			</div>
			<div className="header__right">
				<HeaderOptions Icon={HomeIcon} title="Home" />
				<HeaderOptions Icon={GroupIcon} title="My Network" />
				<HeaderOptions Icon={WorkIcon} title="Jobs" />
				<HeaderOptions Icon={MessageIcon} title="Messaging" />
				<HeaderOptions Icon={NotificationsIcon} title="Notifications" />
				<HeaderOptions avatar={avatar} title="me" />
			</div>
		</div>
	);
};

export default Header;
