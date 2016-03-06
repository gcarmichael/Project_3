var SleepCalc = require('../sleepCalc');
var assert = require('assert');
var moment = require('moment');

beforeEach(function() {
    var sleepCalc = new SleepCalc();
  });

describe('SleepCalc', function(){
  it('should start with undefined wake and sleep times', function(){
    assert.deepEqual(undefined, sleepCalc.wakeTime);
    assert.deepEqual(undefined, sleepCalc.sleepTime);
  });

  it('should be able to take moments as values', function(){
    assert(false, sleepCalc.wakeTime);
    sleepCalc.wakeTime = moment();
    assert(true, sleepCalc.wakeTime);
  });

  it('should have a duration variable with a value of 1.5 hours', function(){
    assert.deepEqual("1.5 hours", sleepCalc.cycleDuration);
  });

  it('should be able to set a sleepTime through calcWakeTime', function(){
    sleepCalc.calcWakeTime();
    assert.deepEqual(true, sleepCalc.sleepTime);
  });

  it('should be able to calculate four wake times', function(){
    sleepCalc.calcWakeTime();
    assert.equal((sleepCalc.sleepTime + sleepCalc.cycleDuration), sleepCalc.wake1);
    assert.equal((sleepCalc.wake1 + sleepCalc.cycleDuration), sleepCalc.wake2);
    assert.equal((sleepCalc.wake2 + sleepCalc.cycleDuration), sleepCalc.wake3);
    assert.equal((sleepCalc.wake3 + sleepCalc.cycleDuration), sleepCalc.wake4);
  });

  it('should be able to set a wakeTime through calcSleepTime', function(){
    sleepCalc.calcSleepTime();
    assert.deepEqual(true, sleepCalc.wakeTime);
  });

  it('should be able to calculate four sleep times', function(){
    sleepCalc.calcSleepTime();
    assert.equal((sleepCalc.wakeTime - sleepCalc.cycleDuration), sleepCalc.sleep1);
    assert.equal((sleepCalc.sleep1 - sleepCalc.cycleDuration), sleepCalc.sleep2);
    assert.equal((sleepCalc.sleep2 - sleepCalc.cycleDuration), sleepCalc.sleep3);
    assert.equal((sleepCalc.sleep3 - sleepCalc.cycleDuration), sleepCalc.sleep4);
  });

});