import React from "react";


export class Navbar extends React.Component{
	render(){
		return(
			<nav className="navbar navbar-inverse">
			  <div className="container">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="https://github.com/forgoroe/freeCodeCamp-leaderboard" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i> FreeCodeCamp Leaderboard</a>
	      		</div>
			  </div>
			</nav>	
			);
	}
}