import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QrReader from 'react-qr-reader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: 'No result'
    };
    this.handleScan = this.handleScan.bind(this);
  }

  handleScan(data) {
    if (data) {
      this.setState({
        result: data
      });
    }
  }

  handleError(err) {
    console.error(err);
  }

  render() {
    return (
      <div className="App">
        <div style={{ width: '500px' }}>
          <QrReader
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: '100%' }}
            facingMode="user"
          />
          <p>{this.state.result}</p>
        </div>
      </div>
    );
  }
}

export default App;
