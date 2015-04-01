'use strict';
var React = require('react');
var Router = require('react-router');

var Enterprise = React.createClass({

  mixins: [ Router.State, Router.Navigation ],

  componentDidMount: function () {
    console.log('will mount');
  },

  render: function () {
    return <p>Market:{this.props.user.market} Mode:{this.props.user.mode}   Enterprise</p>;
  }
});

module.exports = Enterprise;