import React from 'react';

export default class Poidetail extends React.Component {

    render(){
        return (
            <div>{this.props.location.state.label}</div>
        );
    }
}

