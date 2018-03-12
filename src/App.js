import React, { Component } from 'react';
import logo from './css/logo.svg';
import ColumnView from './components/ColumnView'
import ImgView from './components/ImgView'
import './css/App.css';

class App extends Component {
  render() {
    const hat = "https://upload.wikimedia.org/wikipedia/commons/4/47/Collapsible_top_hat_IMGP9647.jpg";
    var elements = [
      <ImgView src={hat} width={200} height={200} reqWidth={30} />,
      <ImgView src={hat} width={200} height={200} />,
      <ImgView src={hat} width={200} height={200} reqWidth={25}/>
    ];
    return (
      <div>
        {/* <ColumnView elements={elements}></ColumnView> */}
        
      </div>

    );
  }
}

export default App;
