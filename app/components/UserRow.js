import React from 'react';

export class UserRow extends React.Component{
	render(){
		return <tr>	
					<td>{this.props.number}</td>
					<td>{this.props.camperName}</td> 
					<td>{this.props.thirtyDaysPoints}</td>
					<td>{this.props.allTimePoints}</td>
				</tr>;
	}
};