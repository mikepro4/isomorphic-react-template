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
            <h1>Who are you?</h1>
            <ul>
              <li><Link to="exchange" onClick={this.setExchange}>Broker</Link></li>
              <li><Link to="exchange" onClick={this.setExchange}>Appraiser</Link></li>
              <li><Link to="exchange" onClick={this.setExchange}>Researcher</Link></li>
              <li><Link to="enterprise" onClick={this.setEnterprise}>Landlord</Link></li>
              <li><Link to="enterprise" onClick={this.setEnterprise}>Appraiser</Link></li>
              <li><Link to="enterprise" onClick={this.setEnterprise}>Bank</Link></li>
            </ul>
        </div>
    );
  }
});

module.exports = Enterprise;