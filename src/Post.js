import React from 'react';

export default function Post({content}){
	return (
		<section className="cards">
			<div className="left-sec-card">
				<span><i className="fas fa-arrow-up"></i></span>
				<p className="score">{content.data.score}</p>
				<span><i className="fas fa-arrow-down"></i></span>
			</div>
			<div className="card">
				<h2 className="title">{content.data.title}</h2>
				<p className="para">{content.data.selftext}</p>
				<div className="Comments-sec">
					<span><i className="fas fa-comment-alt"></i>Comments</span>
					<span className="two"><i className="fas fa-comment-alt"></i>Share</span>
					<span className="three"><i className="fas fa-bookmark"></i>Save</span>
					<span className="four">...</span>
				</div>
			</div>
		</section>
	)
}