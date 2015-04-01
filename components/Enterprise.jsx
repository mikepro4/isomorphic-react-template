'use strict';
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var $ = require('jquery');

var style = require('../style/enterprise.less');

var Enterprise = React.createClass({

  mixins: [ Router.State, Router.Navigation ],

  componentDidMount: function () {
    console.log('will mount');
  },

  loadMarkets: function () {
    $.ajax({
      url: '/api/markets/all',
      dataType: 'json',
      success: function(data) {
        console.log(data)
      },
      error: function(xhr, status, err) {
        console.error('Markets were not loaded');
      }
    });
  },

  render: function () {
    return (
      <div>
        <h1>Enterpriseku dfs</h1>
        <p>Market: {this.props.user.market}</p> 
        <p>Mode: {this.props.user.mode}</p>

        <p onClick={this.loadMarkets}>Get Markets</p>

        <ul>
          <li><Link to="underwriting">Underwriting</Link></li>
          <li><Link to="asset-management">Asset Management</Link></li>
        </ul>
      </div>
    )
  }
});

module.exports = Enterprise;