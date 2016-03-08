var React = require('react');
var SleepCalc = require('./../sleepCalc/sleepCalc');

var sleepCalc = new SleepCalc();

var WakeDisplay = React.createClass({
  getInitialState: function(){
    return {wakeTimes: undefined};
  },

  handleClick: function(){
    var wakeTimes = sleepCalc.calcWakeTime();
    this.setState({wakeTimes: wakeTimes});
  },

  handleBack: function(){
    this.setState({wakeTimes: undefined});
  },

  render: function(){
    if(this.state.wakeTimes === undefined){
      return(
        <div>
          <h2>Find out when to wake up if you sleep now:</h2>
          <button onClick={this.handleClick}>Generate Times to Wake</button>
        </div>
      );
    } else {
      return(
        <div>
          <h2>If you sleep now, you should aim to wake at:</h2>
            <ul>
              <li>{this.state.wakeTimes.wake6}</li>
              <li>{this.state.wakeTimes.wake5}</li>
              <li>{this.state.wakeTimes.wake4}</li>
              <li>{this.state.wakeTimes.wake3}</li>
              <li>{this.state.wakeTimes.wake2}</li>
              <li>{this.state.wakeTimes.wake1}</li>
            </ul>
            <a href="#" onClick={this.handleBack}>Back to Calulator</a>
        </div>
      );
    }
  }
});

module.exports = WakeDisplay;