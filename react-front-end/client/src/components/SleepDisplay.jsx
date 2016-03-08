var React = require('react');
var SleepCalc = require('./../sleepCalc/sleepCalc');

var SleepCalc = new SleepCalc();

var SleepDisplay = React.createClass({
  getInitialState: function(){
    return {hour: "", minute: ""};
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
    this.setState({hour: hour, minute: minute});
  },

  render: function(){
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
  }
});

module.exports = SleepDisplay;