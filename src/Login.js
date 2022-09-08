// @ts-nocheck
import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "./app/userSlice";
const Login = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [profilePic, setProfilePic] = useState("");
	const dispatch = useDispatch();
	const register = () => {
		if (!name) {
			return alert("Please enter a full name");
		}
		createUserWithEmailAndPassword(auth, email, password)
			.then((cred) => {
				console.log(cred.user);
				dispatch(
					login({
						email: cred.user.email,
						uid: cred.user.uid,
						displayName: name,
						photoUrl: profilePic,
					})
				);
			})
			.then(() =>
				updateProfile(auth.currentUser, {
					displayName: name,
					photoURL: profilePic,
				})
			)
			.catch((error) => alert(error));
	};

	const loginToApp = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((cred) => {
				dispatch(
					login({
						email: cred.user.email,
						uid: cred.user.uid,
						displayName: cred.user.displayName,
						photoUrl: cred.user.photoURL,
					})
				);
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className="login">
			<img
				src="https://blog.waalaxy.com/wp-content/uploads/2021/01/1497016117.png"
				alt=""
			/>

			<form>
				<input
					type="text"
					value={name}
					placeholder="Full name (required if registering)"
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					value={profilePic}
					onChange={(e) => setProfilePic(e.target.value)}
					placeholder="Profile pic URL (optional)"
				/>
				<input
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
				/>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>
				<button type="submit" onClick={loginToApp}>
					Sign in
				</button>
			</form>
			<p>
				Not a member?{" "}
				<span className="login__register" onClick={register}>
					Register now
				</span>
			</p>
		</div>
	);
};

export default Login;
