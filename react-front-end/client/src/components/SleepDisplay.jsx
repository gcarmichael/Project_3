var React = require('react');
var SleepCalc = require('./../sleepCalc/sleepCalc');
var sleepCalc = new SleepCalc();

var SleepDisplay = React.createClass({
  getInitialState: function(){
    return {hour: "", minute: "", sleepTimes: undefined};
  },

  handleHourChange: function(event){
    this.setState({hour: event.target.value});
  },

  handleMinuteChange: function(event){
    this.setState({minute: event.target.value});
  },

  handleSubmit: function(event){
    event.preventDefault();
    var hour = this.state.hour;
    var minute = this.state.minute;
    var sleepTimes = sleepCalc.calcSleepTime(hour+":"+minute);
    this.props.toggleWakeDisplay();
    this.setState({hour: hour, minute: minute, sleepTimes: sleepTimes});
  },

  handleBack: function(){
    this.props.toggleWakeDisplay();
    this.setState({hour: "", minute: "", sleepTimes: undefined});
  },

  render: function(){
    var displayClass = "show-me";

    if(!this.props.hidden){
      displayClass = "hide-me";
    }

    if(this.state.sleepTimes === undefined){
    return(
      <div className={displayClass}>
      <h2>Enter when you have to wake up:</h2>
        <form className="wakeForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Hour (HH)"
            value={this.state.hour}
            onChange={this.handleHourChange}
          />
          <input
            type="text"
            placeholder="Minute (mm)"
            value={this.state.minute}
            onChange={this.handleMinuteChange}
          />
          <input
            type="submit"
            value="Generate Times to Sleep"
          />
        </form>
        <p>or</p>
      </div>
    );
  } else {
      return(
        <div>
          <h4>Wake Time: {this.state.hour}:{this.state.minute}</h4>
          <h2>You should aim to sleep at:</h2>
            <ul>
              <li id="time1">5/6 Cycles:</li>
              <li id="time1">{this.state.sleepTimes.sleep6}</li>
              <li id="time2">{this.state.sleepTimes.sleep5}</li>
              <br/>
              <li id="time3">3/4 Cycles:</li>
              <li id="time3">{this.state.sleepTimes.sleep4}</li>
              <li id="time4">{this.state.sleepTimes.sleep3}</li>
              <br/>
              <li id="time5">1/2 Cycles:</li>
              <li id="time5">{this.state.sleepTimes.sleep2}</li>
              <li id="time6">{this.state.sleepTimes.sleep1}</li>
            </ul>
            <a href="#" onClick={this.handleBack}>Back to Calulator</a>
        </div>
      );
    }
  }
});

module.exports = SleepDisplay;