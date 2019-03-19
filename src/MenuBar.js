import React from "react";

export function MenuBar() {
	return (
		<div className="menu-bar">
			<div className="View">
				<span>View</span>
				<span><i className="fas fa-clipboard-list"></i></span>
				<span><i className="fas fa-bars"></i></span>
				<span><i className="fas fa-align-justify"></i></span>
			</div>
			<div className="sort">
				<span>sort</span>
				<span><i className="fab fa-gripfire"></i>
				</span>HOT<span>
					<i className="fas fa-sort-down"></i>
				</span>
			</div>	
		</div>
	)
}