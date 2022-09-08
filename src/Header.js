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
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logout } from "./app/userSlice";
import { auth } from "./firebase";
import { selectUser } from "./app/userSlice";
import { Avatar } from "@mui/material";
const Header = () => {
	const user = useSelector(selectUser);

	const dispatch = useDispatch();
	const logoutOfApp = () => {
		dispatch(logout());
		signOut(auth)
			.then(console.log("the user is signed out"))
			.catch((error) => alert(error));
	};
	return (
		<div className="header">
			<div className="header__left">
				<img
					alt=""
					src="https://pngimg.com/uploads/linkedIn/small/linkedIn_PNG19.png"
				/>
				{user && (
					<div className="header__search">
						<SearchIcon />
						<input type="text" placeholder="Search" />
					</div>
				)}
			</div>
			{user && (
				<div className="header__right">
					<HeaderOptions Icon={HomeIcon} title="Home" />
					<HeaderOptions Icon={GroupIcon} title="My Network" />
					<HeaderOptions Icon={WorkIcon} title="Jobs" />
					<HeaderOptions Icon={MessageIcon} title="Messaging" />
					<HeaderOptions Icon={NotificationsIcon} title="Notifications" />
					<HeaderOptions
						avatar={
							user.photoUrl ? user.photoUrl : <Avatar>user.email[0]</Avatar>
						}
						title="me"
						onClick={logoutOfApp}
					/>
				</div>
			)}
		</div>
	);
};

export default Header;
