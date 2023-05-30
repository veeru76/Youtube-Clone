import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
	if(!isMenuOpen) return null;
	return (
		<div className="p-5 shadow-lg w-48">
			<ul className="p-2">
				<Link to ='/'>
				<li>Home</li>
				</Link>
				<li>Shorts</li>
				<li>Videos</li>
				<li>Live</li>
			</ul>
			<h2 className="font-bold">Subscriptions</h2>
			<ul className="p-2">
				<li>Music</li>
				<li>Sports</li>
				<li>Gaming</li>
				<li>Movies</li>
			</ul>
			<h2 className="font-bold pt-2">WatchLater</h2>
			<ul>
				<li>Music</li>
				<li>Sports</li>
				<li>Gaming</li>
				<li>Movies</li>
			</ul>
		</div>
	);
};

export default Sidebar;
