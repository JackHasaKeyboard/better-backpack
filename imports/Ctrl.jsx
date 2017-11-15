import React, { Component } from 'react';
import axios from 'axios';

export default class Head extends Component {
	constructor(props) {
		super(props);

		this.state = {
			itemCount: 0
		};
	}

	componentDidMount() {
		var id = "76561198065277457";
		const key = "54FFB9CB01695766B2F961276694BDD2";

		var inv = "http://steamcommunity.com/inventory/" + id + "/440/2?l=english&count=200";
		axios.get(inv).then(function(json) {
			this.setState({
				itemCount: json.data.total_inventory_count
			});
		}.bind(this));
	}

	render() {
		return (
			<div id="ctrl">
				<div id="search">
					<span className="tag">
						<span>Quality</span>
						:
						<span className="strange">Strange</span>
					</span>

					{
						/* <span className="tag">
							<span>Name</span>
							:
							<span>/Crate/</span>
							</span> */
					}

					<span className="tag">
						<span>Class</span>
						:
						<span>Demoman</span>
					</span>
				</div>

				<h3>Items: {this.state.itemCount}</h3>
			</div>
		)
	}
}
