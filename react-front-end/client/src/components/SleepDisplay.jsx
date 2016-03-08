var React = require('react');
var SleepCalc = new SleepCalc();

var SleepDisplay = React.createClass({
  render: function(){
    return(
      <div>
      <h2>Enter when you have to wake up</h2>
        <form className="wakeForm">
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