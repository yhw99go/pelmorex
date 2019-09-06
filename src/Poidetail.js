import React from 'react';


export default class Poidetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount () {
        console.log(this.props)
    }


    render(){
        return (
            <div>hello</div>
        );
    }

}

