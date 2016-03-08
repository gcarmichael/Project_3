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
    this.setState({hour: hour, minute: minute, sleepTimes: sleepTimes});
  },

  handleBack: function(){
    this.setState({hour: "", minute: "", sleepTimes: undefined});
  },

  render: function(){
    if(this.state.sleepTimes === undefined){
    return(
      <div>
      <h2>Enter when you have to wake up:</h2>
        <form className="wakeForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Hour"
            value={this.state.hour}
            onChange={this.handleHourChange}
          />
          <input
            type="text"
            placeholder="Minute"
            value={this.state.minute}
            onChange={this.handleMinuteChange}
          />
          <input
            type="submit"
            value="Generate Times to Sleep"
          />
        </form>
      </div>
    );
  } else {
      return(
        <div>
          <h4>Wake Time: {this.state.hour}:{this.state.minute}</h4>
          <h2>You should aim to sleep at:</h2>
            <ul>
              <li>{this.state.sleepTimes.sleep6}</li>
              <li>{this.state.sleepTimes.sleep5}</li>
              <li>{this.state.sleepTimes.sleep4}</li>
              <li>{this.state.sleepTimes.sleep3}</li>
              <li>{this.state.sleepTimes.sleep2}</li>
              <li>{this.state.sleepTimes.sleep1}</li>
            </ul>
            <a href="#" onClick={this.handleBack}>Back to Calulator</a>
        </div>
      );
    }
  }
});

module.exports = SleepDisplay;