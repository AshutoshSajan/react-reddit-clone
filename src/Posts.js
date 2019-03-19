import React, { Component } from 'react';
import Post from './Post';

class Posts extends React.Component {
	constructor(){
		super()
		this.state = {
			posts : []
		}
	}

	componentDidMount(){
		fetch("https://cors-anywhere.herokuapp.com/" + "https://www.reddit.com/r/html.json").then(res => res.json()).then(({data}) =>  this.setState({posts: data.children}));
	}

	render(){
		return(
			<div>
				{
					this.state.posts.map(post => <Post content={post} />)
				}
			</div>
		)
	}
}

export default Posts;