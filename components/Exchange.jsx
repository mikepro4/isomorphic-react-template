'use strict';
var React = require('react');

var Exchange = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Exchange</h1>
        <p>Market: {this.props.user.market}</p> 
        <p>Mode: {this.props.user.mode}</p>
      </div>
    )
  }
});

module.exports = Exchange;