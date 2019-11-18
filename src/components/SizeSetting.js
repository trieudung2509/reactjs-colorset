import React, { Component } from 'react';

class SizeSetting extends Component {
  changeSize(value){
    this.props.onChangeSize(value);
  }
  render() {
    return (
        <div className="panel panel-danger">
                <div className="panel-heading"> Size : {this.props.fontSize}px </div>
                <div className="panel-body">
                  <button type="button" className="btn btn-success" onClick={()=>this.changeSize(-2)}>Giảm</button>
                  <button type="button" className="btn btn-success" onClick={()=>this.changeSize(2)}>Tăng</button>
                </div>
        </div>
    );
  }
}

export default SizeSetting;
