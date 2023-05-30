import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { searchApi } from "../utils/YoutubeApi";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
	const dispatch = useDispatch();
	const [searchQuery, setSearchQuery] = useState('');
	const [searchData, setSearchData] = useState([]);
	const [suggestions, setSuggestions] = useState(false);
	const searchCache = useSelector((store) => store.search)
	const toggleMenuHandler = () => {
			dispatch(toggleMenu());
	}

	useEffect(() => {
	     const timer = setTimeout(() => {
			if(searchCache[searchQuery]) {
				setSuggestions(searchCache[searchQuery])
			}
			else {
				getSearchResults()		
			}
		}, 200);
			return () => {
				clearTimeout(timer)
			};
		
	}, [searchQuery]);

	const searchHandler = (e) => {
		e.preventDefault();
		setSearchQuery(e.target.value)

	}
	const getSearchResults = async() => {
		console.log('APICALL',searchQuery)
		const results = await fetch(searchApi+searchQuery);
		const data = await results.json();
		console.log('data',data[1])
		setSearchData(data[1]);
		dispatch(cacheResults(
			{
				[searchQuery] : data[1]
			}
			
		))
	}
	return (
		<div className="grid grid-flow-col p-5 m-2 shadow-lg">
			<div className="flex col-span-1">
				<img
				 onClick={toggleMenuHandler}
					className="h-8 cursor-pointer"
					alt="menu"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
				   
				/>
				<a href="/">
				<img
					className="h-8 mx-2"
					alt="youtube-logo"
					src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
				/>
				</a>
				
			</div>
			<div className="col-span-10 px-10">
				<input
					className="w-1/2 px-10  rounded-l-full  border border-gray-400"
					type="text"
					onChange={searchHandler}
					onFocus={() => setSuggestions(true)}
					onBlur={() => setSuggestions(false)}
				/>
				<button className="border border-gray-400 rounded-r-full">
					Search
				</button>
				{suggestions && <div className="fixed bg-white w-80 shadow-lg rounded border border-gray-100">
				<ul>
					{searchData.map((s) => (
					<li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">{s}</li>
					))
				}
				  </ul>
				</div>}
			</div>
			<div className="col-span-1">
				<img
					className="h-8"
					alt="user-logo"
					src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
				/>
			</div>
		</div>
	);
};

export default Header;
