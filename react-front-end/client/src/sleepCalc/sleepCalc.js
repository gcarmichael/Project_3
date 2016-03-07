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

  subtractHours: function(time){
    var newTime = moment(time, 'H:mm').subtract(this.cycleDuration, 'hours').format('H:mm');
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
  },

  calcSleepTime: function(time){
    this.wakeTime = moment(time, "H:mm").format('H:mm');
    var sleep1 = this.subtractHours(this.wakeTime);
    var sleep2 = this.subtractHours(sleep1);
    var sleep3 = this.subtractHours(sleep2);
    var sleep4 = this.subtractHours(sleep3);
    var sleep5 = this.subtractHours(sleep4);

    return {
      sleep1: sleep1,
      sleep2: sleep2,
      sleep3: sleep3,
      sleep4: sleep4,
      sleep5: sleep5
    }
  }

};

module.exports = SleepCalc;