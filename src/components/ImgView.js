import React from 'react';
import ColumnElement from './ColumnElement'
import ReactDOM from 'react-dom';
class ImgView extends ColumnElement {

    constructor(props) {
        super(props);
        this.state = { src: props.src, width: props.width, height: props.height };
    }

    render() {
        var source = this.state.src;
        var width = `${this.state.width}px`;
        var height = `${this.state.height}px`;
        return <img src={source} width={width} height={height} alt=""/>
    }
}
export default ImgView