import React, { Component } from 'react';
import AutocompleteItem from './AutocompleteItem';
import Autocomplete from './Autocomplete';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

export default class App extends Component {
    constructor(props) {
    super(props);
        this.state={auto: ''};
        this.linkState = LinkedStateMixin.linkState;
        this.changeAuto = (auto)=>{
			this.setState({auto: auto});
        };
	}

	render() {
		return (
			<div className="app__autocomplete">
				<Autocomplete
					changeAuto = {this.changeAuto}
					valueLink={this.linkState('auto') }
					fetch={(search) => new Promise(resolve => setTimeout(() => resolve(
					[
						{id: 1, name: "qwe"},
						{id: 2, name: "abc"}
					]), 1000))}
					itemRender={() => <AutocompleteItem/>}
				/>
			</div>
		);
	}
}
