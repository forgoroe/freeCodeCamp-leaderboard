import React from 'react';
import { Navbar } from './Navbar';
import  { TableHeader } from './TableHeader';
import { UserRow } from './UserRow';
import { switchActiveTo } from '../scripts/switchActiveTo';

export class MyTable extends React.Component{
	constructor(){
		super();
		this.state = {
			allTime: 0
		}
	}

	orderRecent(e){
		switchActiveTo(e);
		this.setState({allTime: 0});
	}

	orderAll(e){
		switchActiveTo(e);
		this.setState({allTime: 1});
	}

	generateRows(users){
		let keyNums = 0;

		if(this.state.allTime == 0){
		 	users.sort((a,b)=>{
		 		if(b.recent - a.recent == 0){
		 			return b.alltime - a.alltime;
		 		}
		 		return b.recent - a.recent});
		} else{
			users.sort((a,b)=>{
				if(b.alltime - a.alltime == 0){
					return b.recent - a.recent;
				}
				return b.alltime - a.alltime});
		}

		return users.map((user)=> {
			keyNums++;
			return (
				<UserRow key = {keyNums} number={keyNums} camperName= {user.username} thirtyDaysPoints = {user.recent} allTimePoints = {user.alltime}/>
			)
		});
	}

	render(){		
		let userRows = this.generateRows(this.props.users);

		return <div>
					<Navbar/>
					<table className="table table-striped">
						<thead className="thead-inverse">
							<TableHeader orderRecent={this.orderRecent.bind(this)} orderAll={this.orderAll.bind(this)} />
						</thead>
						<tbody>
							{userRows}
						</tbody>
					</table>
				</div>
	}
};