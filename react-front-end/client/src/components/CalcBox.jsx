var React = require('react');
var SleepCalc = require('./../sleepCalc/sleepCalc');

var SleepDisplay = require('./SleepDisplay');
var WakeDisplay = require('./WakeDisplay');

var sleepCalc = new SleepCalc();

var CalcBox = React.createClass({
  render: function(){
    return(
      <div>
        <h1> Project 3 Sleep Calculator </h1>
        <SleepDisplay></SleepDisplay>
        <p>Or</p>
        <WakeDisplay></WakeDisplay>
      </div>
    );
  }
});

module.exports = CalcBox;