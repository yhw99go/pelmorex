import React from 'react';
/**
 * 
 * @file React Component that displaying poi detail
 * @module Poidetail
 * @extends React.Component
 */

export default class Poidetail extends React.Component {
    constructor(props){ 
        super(props);
    }

/**
  * render a component
  * @method
  * @summary render poi detail data that selected from map
  * @return {object} 
  */
    render(){
        return (
            <p>{this.props.location.state.label}</p>
        );
    }
}
