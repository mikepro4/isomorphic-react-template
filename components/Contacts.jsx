'use strict';
var React = require('react');

var Contacts = React.createClass({
  
  render: function () {
    return (
      <div>
        <h1>Contacts</h1>
        <p>Market: {this.props.user.market}</p> 
        <p>Mode: {this.props.user.mode}</p>
      </div>
    )
  }
});

module.exports = Contacts;