var React = require('react');
var SleepCalc = require('./../sleepCalc/sleepCalc');

var sleepCalc = new SleepCalc();

var WakeDisplay = React.createClass({
  getInitialState: function(){
    return {wakeTimes: undefined};
  },

  handleClick: function(){
    var wakeTimes = sleepCalc.calcWakeTime();
    this.props.toggleSleepDisplay();
    this.setState({wakeTimes: wakeTimes});
  },

  handleBack: function(){
    this.props.toggleSleepDisplay();
    this.setState({wakeTimes: undefined});
  },

  render: function(){
    var displayClass = "show-me";

    if(!this.props.hidden){
      displayClass = "hide-me";
    }

    if(this.state.wakeTimes === undefined){
      return(
        <div className={displayClass}>
          <h2>Find out when to wake up if you sleep now:</h2>
          <button onClick={this.handleClick}>Generate Times to Wake</button>
          <br/>
          <hr/>
          <small>On average, it takes 14 minutes to fall asleep. Your wake times are calculated with this assumption in mind.</small>
        </div>
      );
    } else {
      return(
        <div>
          <h2>If you sleep now, you should aim to wake at:</h2>
            <ul>
              <li id="time1">5/6 Cycles:</li>
              <li id="time1">{this.state.wakeTimes.wake6}</li>
              <li id="time2">{this.state.wakeTimes.wake5}</li>
              <br/>
              <li id="time3">3/4 Cycles:</li>
              <li id="time3">{this.state.wakeTimes.wake4}</li>
              <li id="time4">{this.state.wakeTimes.wake3}</li>
              <br/>
              <li id="time5">1/2 Cycles:</li>
              <li id="time5">{this.state.wakeTimes.wake2}</li>
              <li id="time6">{this.state.wakeTimes.wake1}</li>
            </ul>
            <a href="#" onClick={this.handleBack}>Back to Calulator</a>
        </div>
      );
    }
  }
});

module.exports = WakeDisplay;