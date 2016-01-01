import React, { Component } from 'react';

export default class AutocompleteItem extends Component {
    render(){
        return (
            <option className="datalist__option" value={this.props.name}/>
        )
    }
}
