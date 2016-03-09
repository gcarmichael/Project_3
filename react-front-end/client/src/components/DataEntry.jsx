var React = require('react');

var DataEntry = React.createClass({
  render: function(){
    var displayClass = "show-me";

    if(!this.props.hidden){
      displayClass = "hide-me";
    }

    return(
      <div className={displayClass}>
        <p>Data entry goes here.</p>
      </div>
    );
  }
});

module.exports = DataEntry;