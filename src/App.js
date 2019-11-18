import React, { Component } from 'react';
import ColorPicker from './components/colorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color : 'red',
      fontSize : 15
    }
    this.onsetColor = this.onsetColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onResetDefault = this.onResetDefault.bind(this);
  }
  onsetColor(pargam){
    this.setState({
        color : pargam
    });
  }
  onChangeSize(value){
      this.setState({
          fontSize : (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ? this.state.fontSize + value : this.state.fontSize
      });

  }
  onResetDefault(value){
    if(value){
      this.setState({
        color : 'red',
        fontSize : 15
      });
    }
  }
  render() {
    return (
      <div className="setColor mt-50">
        <div className="container">
          <div className="row">
            <ColorPicker color={this.state.color} onReceiveColor={ this.onsetColor }/>
            <div className="col-lg-6">
              <SizeSetting
                  fontSize = { this.state.fontSize }
                  onChangeSize={this.onChangeSize}/>
              <Reset onResetDefault={this.onResetDefault}/>
            </div>
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSize}/>
        </div>
      </div>
    );
  }
}

export default App;
