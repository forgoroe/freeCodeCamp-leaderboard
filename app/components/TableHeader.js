import React from 'react';

export class TableHeader extends React.Component{
	render(){
		return <tr>
					<th>#</th>
					<th>freeCodeCamp name</th> 
					<th onClick={this.props.orderRecent}>Points in past 30 days</th>
					<th onClick={this.props.orderAll}>All time points</th>
				</tr>;
	}
};