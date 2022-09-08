import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
	return (
		<div className="app">
			<header className="app-header">
				<Header />
				<div className="app__body">
					<Sidebar />
					{/* sidebar */}
					<Feed />
					{/* widgets */}
				</div>
			</header>
		</div>
	);
}

export default App;
