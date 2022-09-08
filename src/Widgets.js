import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const Widgets = () => {
	const newsArticle = (heading, subtitle) => {
		return (
			<div className="widgets_article">
				<div className="widgets__left">
					<FiberManualRecordIcon />
				</div>
				<div className="widgets__right">
					<h4>{heading}</h4>
					<p>{subtitle}</p>
				</div>
			</div>
		);
	};

	return (
		<div className="widgets">
			<div className="widgets__header">
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>
			{newsArticle("Aleksandr is awesome", "Top news UA")}
			{newsArticle("Aleksandr is awesome", "Top news UA")}
			{newsArticle("Aleksandr is awesome", "Top news UA")}
			{newsArticle("Aleksandr is awesome", "Top news UA")}
			{newsArticle("Aleksandr is awesome", "Top news UA")}
			{newsArticle("Aleksandr is awesome", "Top news UA")}
		</div>
	);
};

export default Widgets;
