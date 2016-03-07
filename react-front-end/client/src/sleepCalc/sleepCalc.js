var moment = require('moment');

var SleepCalc = function(){
  this.wakeTime = undefined;
  this.sleepTime = undefined;
  this.cycleDuration = moment.duration(1.5, 'hours').asHours();
};

SleepCalc.prototype = {

  addHours: function(time){
    var newTime = moment(time, 'H:mm').add(this.cycleDuration, 'hours').format('H:mm');
    return newTime;
  },

  calcWakeTime: function(){
    this.sleepTime = moment().format('H:mm'); // Add 14 minutes
    var wake1 = this.addHours(this.sleepTime);
    var wake2 = this.addHours(wake1);
    var wake3 = this.addHours(wake2);
    var wake4 = this.addHours(wake3);
    var wake5 = this.addHours(wake4);

    return {
      wake1: wake1,
      wake2: wake2,
      wake3: wake3,
      wake4: wake4,
      wake5: wake5
    }
  }
};

module.exports = SleepCalc;