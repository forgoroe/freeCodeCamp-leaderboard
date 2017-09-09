import React from 'react';
import { MyTable } from './MyTable';

export class App extends React.Component {
	constructor(){
		super();
		this.state = {
			users: []
		}
	};

	componentDidMount(){
		fetch("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
		.then((Response)=>
			Response.json())
		.then((data) => {
			this.setState({
				users: data
			})
		});
	}

	render(){
		return <MyTable users = {this.state.users}/>;
		 		
	}	
};