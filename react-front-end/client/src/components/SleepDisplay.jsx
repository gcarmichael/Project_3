var React = require('react');
var SleepCalc = require('./../sleepCalc/sleepCalc');
var sleepCalc = new SleepCalc();

var SleepDisplay = React.createClass({
  getInitialState: function(){
    return {hour: "1", minute: "00", meridiem: "AM", sleepTimes: undefined};
  },

  handleHourChange: function(event){
    this.setState({hour: event.target.value});
  },

  handleMinuteChange: function(event){
    this.setState({minute: event.target.value});
  },

  handleMeridiemChange: function(event){
    this.setState({meridiem: event.target.value});
  },

  handleSubmit: function(event){
    event.preventDefault();
    var hour = this.state.hour;
    var minute = this.state.minute;
    var meridiem = this.state.meridiem;
    var sleepTimes = sleepCalc.calcSleepTime(hour + ":" + minute + " " + meridiem);
    this.props.toggleWakeDisplay();
    this.props.toggleDataEntry();
    this.props.toggleGraphDisplay();
    this.setState({hour: hour, minute: minute, meridiem: meridiem, sleepTimes: sleepTimes});
  },

  handleBack: function(){
    this.props.toggleWakeDisplay();
    this.props.toggleDataEntry();
    this.props.toggleGraphDisplay();
    this.setState({hour: "1", minute: "00", meridiem: "AM", sleepTimes: undefined});
  },

  render: function(){
    var displayClass = "show-me";

    if(!this.props.display){
      displayClass = "hide-me";
    }

    if(this.state.sleepTimes === undefined){
    return(
      <div className={displayClass}>
      <h2>Find out when you should go to sleep.
      <br/>
      What time are you waking up?</h2>
      <select
        className="wakeHour"
        value={this.state.hour}
        onChange={this.handleHourChange}
        defaultValue={this.handleHourChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
      </select>
      <select
        className="wakeMinute"
        value={this.state.minute}
        onChange={this.handleMinuteChange}>
          <option>00</option>
          <option>15</option>
          <option>30</option>
          <option>45</option>
      </select>
      <select
        className="wakeMeridiem"
        value={this.state.meridiem}
        onChange={this.handleMeridiemChange}>
          <option>AM</option>
          <option>PM</option>
      </select>
      <br/>
      <button onClick={this.handleSubmit}>Generate Times to Sleep</button>
      <p>or</p>
      </div>
    );
  } else {
      return(
        <div>
          <h4>Wake Time: {this.state.hour}:{this.state.minute} {this.state.meridiem}</h4>
          <h2>You should aim to sleep at:</h2>
            <ul>
              <li id="time1">5/6 Cycles:</li>
              <li id="time1">{this.state.sleepTimes.sleep6} - 9 hours</li>
              <li id="time2">{this.state.sleepTimes.sleep5} - 7.5 hours</li>
              <br/>
              <li id="time3">3/4 Cycles:</li>
              <li id="time3">{this.state.sleepTimes.sleep4} - 6 hours</li>
              <li id="time4">{this.state.sleepTimes.sleep3} - 4.5 hours</li>
              <br/>
              <li id="time5">1/2 Cycles:</li>
              <li id="time5">{this.state.sleepTimes.sleep2} - 3 hours</li>
              <li id="time6">{this.state.sleepTimes.sleep1} - 1.5 hours</li>
            </ul>
            <a href="#" onClick={this.handleBack}>Back to Calulator</a>
        </div>
      );
    }
  }
});

module.exports = SleepDisplay;