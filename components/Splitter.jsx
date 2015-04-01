'use strict';
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Enterprise = React.createClass({

  mixins: [ Router.State, Router.Navigation ],

  componentDidMount: function () {
    console.log('will mount');
    // this.transitionTo('exchange');
  },

  setExchange: function () {
    this.props.updateLocalStorage({
       mode: 'exchange',
    })
  },

  setEnterprise: function () {
     this.props.updateLocalStorage({
       mode: 'enterprise',
    })
  },

  render: function () {
    return (
        <div>
            {this.props.market}
            <Link to="exchange" onClick={this.setExchange}>exchange</Link> 
            <Link to="enterprise" onClick={this.setEnterprise}>enterprise</Link>
        </div>
    );
  }
});

module.exports = Enterprise;