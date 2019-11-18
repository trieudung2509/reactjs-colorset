import React, { Component } from 'react';

class colorPicker extends Component {
  constructor(props){
    super(props);
    this.state = {
        colors : ['red','green','blue','#ccc']
    }
  };
  showColor(color){
    return {
        background : color
    };
  }
  setActiveColor(color){
    this.props.onReceiveColor(color);
  }
  render() {
    var elmColors = this.state.colors.map((color, index) => {
        return <span
                    key={index}
                    style={this.showColor(color) }
                    className={this.props.color === color ? 'active' : '' }
                    onClick={() => this.setActiveColor(color)}
                ></span>
    });
    return (
            <div className="col-lg-6">
              <div className="panel panel-primary">
                <div className="panel-heading"> Color Picker </div>
                <div className="panel-body">
                    {elmColors}
                    <hr/>
                </div>
              </div>
            </div>
    );
  }
}

export default colorPicker;
