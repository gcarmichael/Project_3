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
    sleepCalc.wakeTime = moment().format('h:mm A');
    assert.equal(moment().format('h:mm A'), sleepCalc.wakeTime);
  });

  it('should have a duration variable with a value of 1.5 hours', function(){
    var sleepCalc = new SleepCalc();
    assert.deepEqual(1.5, sleepCalc.cycleDuration);
  });

  it('should be able to set a sleepTime through calcWakeTime', function(){
    var sleepCalc = new SleepCalc();
    sleepCalc.calcWakeTime();
    assert.deepEqual(moment().add(14, 'minutes').format('h:mm A'), sleepCalc.sleepTime);
  });

  it('should be able to calculate four wake times', function(){
    var sleepCalc = new SleepCalc();
    var wakeTimes = sleepCalc.calcWakeTime();
    assert.equal(moment().add(14, 'minutes').add(1.5, 'hours').format('h:mm A'), wakeTimes.wake1);
    assert.equal(moment(wakeTimes.wake1, 'h:mm A').add(1.5, 'hours').format('h:mm A'), wakeTimes.wake2);
    assert.equal(moment(wakeTimes.wake2, 'h:mm A').add(1.5, 'hours').format('h:mm A'), wakeTimes.wake3);
    assert.equal(moment(wakeTimes.wake3, 'h:mm A').add(1.5, 'hours').format('h:mm A'), wakeTimes.wake4);
  });

  it('should be able to set a wakeTime through calcSleepTime', function(){
    var sleepCalc = new SleepCalc();
    sleepCalc.calcSleepTime("9:00 AM");
    assert.deepEqual(moment("9:00 AM", "h:mm A").format('h:mm A'), sleepCalc.wakeTime);
  });

  it('should be able to calculate four sleep times', function(){
    var sleepCalc = new SleepCalc();
    var sleepTimes = sleepCalc.calcSleepTime("09:00");

    console.log(sleepTimes);

    assert.equal(moment("9:00 AM", "h:mm A").subtract(1.5, 'hours').format('h:mm A'), sleepTimes.sleep1);
    assert.equal(moment(sleepTimes.sleep1, 'h:mm A').subtract(1.5, 'hours').format('h:mm A'), sleepTimes.sleep2)
    assert.equal(moment(sleepTimes.sleep2, 'h:mm A').subtract(1.5, 'hours').format('h:mm A'), sleepTimes.sleep3)
    assert.equal(moment(sleepTimes.sleep3, 'h:mm A').subtract(1.5, 'hours').format('h:mm A'), sleepTimes.sleep4)
    assert.equal(moment(sleepTimes.sleep4, 'h:mm A').subtract(1.5, 'hours').format('h:mm A'), sleepTimes.sleep5)
  });

});