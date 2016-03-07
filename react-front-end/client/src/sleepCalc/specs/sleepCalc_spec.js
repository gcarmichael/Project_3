var SleepCalc = require('../sleepCalc');
var assert = require('assert');
var moment = require('moment');

describe('SleepCalc', function(){

  it('should start with undefined wake and sleep times', function(){
    var sleepCalc = new SleepCalc();
    assert.deepEqual(undefined, sleepCalc.wakeTime);
    assert.deepEqual(undefined, sleepCalc.sleepTime);
  });

  it('should be able to take moments as values', function(){
    var sleepCalc = new SleepCalc();
    assert.deepEqual(undefined, sleepCalc.wakeTime);
    sleepCalc.wakeTime = moment().format('H:mm');
    assert.equal(moment().format('H:mm'), sleepCalc.wakeTime);
  });

  it('should have a duration variable with a value of 1.5 hours', function(){
    var sleepCalc = new SleepCalc();
    assert.deepEqual(1.5, sleepCalc.cycleDuration);
  });

  it('should be able to set a sleepTime through calcWakeTime', function(){
    var sleepCalc = new SleepCalc();
    sleepCalc.calcWakeTime();
    assert.deepEqual(moment().format('H:mm'), sleepCalc.sleepTime);
  });

  it('should be able to calculate four wake times', function(){
    var sleepCalc = new SleepCalc();
    var wakeTimes = sleepCalc.calcWakeTime();
    assert.equal(moment().add(1.5, 'hours').format('H:mm'), wakeTimes.wake1);
    assert.equal(moment(wakeTimes.wake1, 'H:mm').add(1.5, 'hours').format('H:mm'), wakeTimes.wake2);
    assert.equal(moment(wakeTimes.wake2, 'H:mm').add(1.5, 'hours').format('H:mm'), wakeTimes.wake3);
    assert.equal(moment(wakeTimes.wake3, 'H:mm').add(1.5, 'hours').format('H:mm'), wakeTimes.wake4);
  });

  it('should be able to set a wakeTime through calcSleepTime', function(){
    var sleepCalc = new SleepCalc();
    sleepCalc.calcSleepTime("9:00");
    assert.deepEqual(moment("9:00", "H:mm").format('H:mm'), sleepCalc.wakeTime);
  });

  it('should be able to calculate four sleep times', function(){
    var sleepCalc = new SleepCalc();
    var sleepTimes = sleepCalc.calcSleepTime("9:00");

    assert.equal(moment("9:00", "H:mm").subtract(1.5, 'hours').format('H:mm'), sleepTimes.sleep1);
    assert.equal(moment(sleepTimes.sleep1, 'H:mm').subtract(1.5, 'hours').format('H:mm'), sleepTimes.sleep2)
    assert.equal(moment(sleepTimes.sleep2, 'H:mm').subtract(1.5, 'hours').format('H:mm'), sleepTimes.sleep3)
    assert.equal(moment(sleepTimes.sleep3, 'H:mm').subtract(1.5, 'hours').format('H:mm'), sleepTimes.sleep4)
    assert.equal(moment(sleepTimes.sleep4, 'H:mm').subtract(1.5, 'hours').format('H:mm'), sleepTimes.sleep5)
  });

});