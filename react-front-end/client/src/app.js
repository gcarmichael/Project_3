var React = require('react');
var ReactDOM = require('react-dom');
var CalcBox = require('./components/CalcBox');

window.onload = function(){
  ReactDOM.render(
    <CalcBox></CalcBox>,
    document.getElementById('app')
  );
}