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
    console.log(wakeTimes.wake1);
    assert.equal(moment().add(1.5, 'hours').format('H:mm'), wakeTimes.wake1);
    assert.equal(moment(wakeTimes.wake1, 'H:mm').add(sleepCalc.cycleDuration, 'hours').format('H:mm'), wakeTimes.wake2);
    assert.equal(moment(wakeTimes.wake2, 'H:mm').add(sleepCalc.cycleDuration, 'hours').format('H:mm'), wakeTimes.wake3);
    assert.equal(moment(wakeTimes.wake3, 'H:mm').add(sleepCalc.cycleDuration, 'hours').format('H:mm'), wakeTimes.wake4);
  });

  it('should be able to set a wakeTime through calcSleepTime', function(){
    var sleepCalc = new SleepCalc();
    sleepCalc.calcSleepTime();
    assert.deepEqual(true, sleepCalc.wakeTime);
  });

  it('should be able to calculate four sleep times', function(){
    var sleepCalc = new SleepCalc();
    sleepCalc.calcSleepTime();
    assert.equal((sleepCalc.wakeTime - sleepCalc.cycleDuration), sleepCalc.sleep1);
    assert.equal((sleepCalc.sleep1 - sleepCalc.cycleDuration), sleepCalc.sleep2);
    assert.equal((sleepCalc.sleep2 - sleepCalc.cycleDuration), sleepCalc.sleep3);
    assert.equal((sleepCalc.sleep3 - sleepCalc.cycleDuration), sleepCalc.sleep4);
  });

});