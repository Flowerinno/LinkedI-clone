//@ts-nocheck
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import "./Post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import ReplyIcon from "@mui/icons-material/Reply";
import { useSelector } from "react-redux";
import { selectUser } from "./app/userSlice";
const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
	const user = useSelector(selectUser);
	return (
		<div ref={ref} className="post">
			<div className="post__header">
				<Avatar src={photoUrl}>{user.email[0]}</Avatar>
				<div className="post__info">
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</div>
			<div className="post__body">
				<p>{message}</p>
			</div>
			<div className="post__buttons">
				<InputOption Icon={ThumbUpIcon} title="Like" color="gray" />
				<InputOption Icon={ChatIcon} title="Comment" color="gray" />
				<InputOption Icon={ShareIcon} title="Share" color="gray" />
				<InputOption Icon={ReplyIcon} title="Reply" color="gray" />
			</div>
		</div>
	);
});

export default Post;
