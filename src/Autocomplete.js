import React, { Component } from 'react';
import AutocompleteItem from './AutocompleteItem';
import LinkedStateMixin from 'react-addons-linked-state-mixin';


export default class Autocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {items: [], auto: ''};
    }

    componentWillReceiveProps(nextProps) {
        this.props.fetch(nextProps.valueLink.value).then((data)=>this.setState({items:data}));
    }

    render() {
        return (
            <div className="autocomplete">
                <div className="autocomplete__title">
                    <div className="title">
                        Autocomplete task
                    </div>
                </div>
                <div className="autocomplete__input">
                    <input className="input"
                           align="center"
                           type="text"
                           valueLink={this.props.valueLink}
                           autoComplete="on" list="list" />
                    <div className="autocomplete__datalist">
                        <datalist className="datalist" id="list"> {
                            this.state.items.map(item=><AutocompleteItem name={item.name} key={item.id} />)}
                        </datalist>
                    </div>
                </div>
           </div>)
    }

}
