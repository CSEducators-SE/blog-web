import React from 'react';
import ReactDOM from 'react-dom';
export default class Column extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const elemsForDisplay=["placeholder"];
        const reactElems=[];
        elemsForDisplay.forEach((elem)=>{
            reactElems.push(<tr><td>{elem}</td></tr>);
        })
        return (
          <table>
              <tbody>
                  {reactElems}
              </tbody>
          </table>  
        );
    }

}

