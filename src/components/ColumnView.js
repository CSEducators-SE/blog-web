import React from 'react';
import ReactDOM from 'react-dom';
class ColumnView extends React.Component {

    constructor(props) {
        super(props);
        this.state = { elementsToInsert: props.elements };
    }

    render() {
        var generateView = true;
        if (this.state.elementsToInsert === undefined || this.state.elementsToInsert.length !== 3) {
            generateView = false;
        }
        var toReturn;

        if (generateView) {
            const columns = [];

            this.state.elementsToInsert.forEach((element) => {
                
                if(element.props.reqWidth){
                    var reqWidth=`${element.props.reqWidth}%`;
                    columns.push(<td width={reqWidth}>{element}</td>);
                }else{
                    columns.push(<td>{element}</td>);
                }
                
            })
            toReturn = columns;
            console.log(columns)

        }

        return (
            <table width="100%">
                <tbody>
                    <tr>
                        {toReturn}
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default ColumnView;