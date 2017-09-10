import React from 'react';

export class TableHeader extends React.Component{
	render(){
		return <tr>
					<th>N.</th>
					<th>freeCodeCamp name</th> 
					<th onClick={this.props.orderRecent} className="mousePointer">Points in past 30 days <i className="fa fa-sort-desc" aria-hidden="true"></i></th>
					<th onClick={this.props.orderAll} className="mousePointer">All time points</th>
				</tr>;
	}
};