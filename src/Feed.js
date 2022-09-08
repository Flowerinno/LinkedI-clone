// @ts-nocheck
import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Post from "./Post";
import { db } from "./firebase";
import { collection, addDoc, Timestamp, getDocs } from "firebase/firestore";

const Feed = () => {
	const [input, setInput] = useState("");
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const postsRef = collection(db, "posts");
		getDocs(postsRef).then((snapshot) => {
			setPosts(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			);
		});
	}, []);

	const sendPost = async (e) => {
		e.preventDefault();

		try {
			await addDoc(collection(db, "posts"), {
				name: "Aleksandr Kononov",
				description: "This is a test",
				message: input,
				photoUrl: "",
				timestamp: Timestamp.now(),
			});
		} catch (err) {
			alert(err);
		}
	};

	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<CreateIcon />
					<form>
						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
						<button type="submit" onClick={sendPost}>
							Send
						</button>
					</form>
				</div>
				<div className="feed__inputOptions">
					<InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
					<InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
					<InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
					<InputOption
						Icon={CalendarMonthIcon}
						title="Write article"
						color="#7FC15E"
					/>
				</div>
			</div>
			{posts.map(({ id, data: { name, description, message, photoUrl } }) => {
				return (
					<Post
						key={id}
						name={name}
						description={description}
						message={message}
						photoUrl={photoUrl}
					/>
				);
			})}
		</div>
	);
};

export default Feed;
