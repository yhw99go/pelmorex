import React from 'react';

export default class Poidetail extends React.Component {
    constructor(props){ 
        super(props);
    }
    render(){
        return (
            <p>{this.props.location.state.label}</p>
        );
    }
}

