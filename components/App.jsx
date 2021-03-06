"use strict";

var React = require('react');
var Router = require('react-router');
var _ = require('underscore');
var DocumentTitle = require('react-document-title');

var HomePageRouterMixin = require('./../mixins/HomePageRouter.jsx');
var Header = require('./Header.jsx');

var RouteHandler = Router.RouteHandler;
var Link= Router.Link;

var App = React.createClass({

  mixins: [ Router.State, Router.Navigation, HomePageRouterMixin ],

  getInitialState: function () {
    return {
      user: {
        mode: null,
        market: null
      }
    }
  },

  componentDidMount: function () {
    if(this.getQuery().market) {
      this.updateLocalStorage({
        market: this.getQuery().market
      })
    }

    this.showInitialPage();
    this.updateLocalStorage();
  },

  showInitialPage: function () {
    var user = JSON.parse(localStorage.getItem('user'));
    if(this.isActive('index') && user) {
      this.selectHomePage(user)
    }
  },

  updateLocalStorage: function (data) {
    var user
    localStorage.getItem('user') ? user = JSON.parse(localStorage.getItem('user')) : user = {}
    localStorage.clear();

    localStorage.setItem('user', JSON.stringify(
      _.extend({}, user, data)
    ));

    this.setState({
      user: JSON.parse(localStorage.getItem('user'))
    })
  },

  render: function () {
    return (
      <DocumentTitle title="CompStak">
        <div className="app">
          <div className="detail">
            <Header user={this.state.user}/>
            <RouteHandler 
              {...this.props}
              user={this.state.user}
              updateLocalStorage={this.updateLocalStorage}
            />
          </div>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = App;