import React from 'react';
import ReactDOM from 'react-dom';
class ColumnView extends React.Component{

constructor(props){
    super(props);
    this.state={text:props.text};
}

    render(){
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
}