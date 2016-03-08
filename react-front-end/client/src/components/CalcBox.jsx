var React = require('react');
var SleepCalc = require('./../sleepCalc/sleepCalc');

var SleepDisplay = require('./SleepDisplay');
var WakeDisplay = require('./WakeDisplay');

var sleepCalc = new SleepCalc();

var CalcBox = React.createClass({
  getInitialState: function(){
    return {showSleepDisp: true, showWakeDisp: true};
  },

  toggleWakeDisplay: function(){
    if(this.state.showWakeDisp){
      this.setState({showWakeDisp: false});
    } else {
        this.setState({showWakeDisp: true});
    }
  },

  toggleSleepDisplay: function(){
    if(this.state.showSleepDisp){
      this.setState({showSleepDisp: false});
    } else {
        this.setState({showSleepDisp: true});
    }
  },

  render: function(){
    return(
      <div>
        <h1> Project 3 Sleep Calculator </h1>
        <SleepDisplay hidden={this.state.showSleepDisp} toggleWakeDisplay={this.toggleWakeDisplay}></SleepDisplay>
        <WakeDisplay hidden={this.state.showWakeDisp} toggleSleepDisplay={this.toggleSleepDisplay}></WakeDisplay>
      </div>
    );
  }
});

module.exports = CalcBox;