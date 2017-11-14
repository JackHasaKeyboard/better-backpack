import React, { Component } from 'react';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { render } from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Head from '../imports/Head.jsx';

import Backpack from '../imports/Backpack.jsx';
import Loadout from '../imports/Loadout.jsx';
import Crafting from '../imports/Crafting.jsx';

Meteor.startup(() => {
	render(
		<div className="scr">
			<Head />

			<BrowserRouter>
				<Switch>
					<Route path="/backpack" component={Backpack} />
					<Route path="/loadout" component={Loadout} />
					<Route path="/crafting" component={Crafting} />
				</Switch>
			</BrowserRouter>
		</div>, document.body
	)
});

