import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Poidetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            label: this.props.match.params.label,
        }
    }

    componentDidMount() {

    }

    render(){

        
        return (
            <div> {this.props.match.params.label}</div>
        );
    }

}

