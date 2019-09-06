import React from 'react';


export default class Poidetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            foo: this.props.location.state,
            label: this.props.match.params.label
        }
    }


    render(){
      
        console.log(this.props.location)
        return (
            <div>hello</div>
        );
    }

}

