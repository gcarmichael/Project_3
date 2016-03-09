var React = require('react');
var SleepCalc = require('./../sleepCalc/sleepCalc');

var SleepDisplay = require('./SleepDisplay');
var WakeDisplay = require('./WakeDisplay');
var DataEntry = require('./DataEntry');
var GraphDisplay = require('./GraphDisplay');

var sleepCalc = new SleepCalc();

var CalcBox = React.createClass({
  getInitialState: function(){
    return {showSleepDisp: true, showWakeDisp: true, showDataEntry: true, showGraphDisp: true};
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

  toggleDataEntry: function(){
    if(this.state.showDataEntry){
      this.setState({showDataEntry: false});
    } else {
      this.setState({showDataEntry: true});
    }
  },

  toggleGraphDisplay: function(){
    if(this.state.showGraphDisp){
      this.setState({showGraphDisp: false});
    } else {
      this.setState({showGraphDisp: true});
    }
  },

  render: function(){
    return(
      <div>
        <h1> Project 3 Sleep Calculator </h1>
        <hr/>
        <SleepDisplay display={this.state.showSleepDisp} toggleWakeDisplay={this.toggleWakeDisplay} toggleDataEntry={this.toggleDataEntry} toggleGraphDisplay={this.toggleGraphDisplay} />
        <WakeDisplay display={this.state.showWakeDisp} toggleSleepDisplay={this.toggleSleepDisplay} toggleDataEntry={this.toggleDataEntry} toggleGraphDisplay={this.toggleGraphDisplay} />
        <DataEntry display={this.state.showDataEntry}/>
        <GraphDisplay display={this.state.showGraphDisp}/>
      </div>
    );
  }
});

module.exports = CalcBox;