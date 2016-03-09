var React = require('react');

var GraphDisplay = React.createClass({
  render: function(){
    var displayClass = "show-me";

    if(!this.props.hidden){
      displayClass = "hide-me";
    }

    return(
      <div className={displayClass}>
        <p>Graphs go here.</p>
      </div>
    );
  }
});

module.exports = GraphDisplay;