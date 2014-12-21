'use strict';

var React         = require('react');
var Router        = require('react-router');
var Reflux        = require('reflux');

var NotFound      = require('./NotFound.jsx');
var Store         = require('../stores/app_stores.js');
var Actions       = require('../actions/app_actions.js');


// use reflux to trigger actions which will in return trigger stores and stores will trigger views for updates. The update is the UI change in click

var Item = React.createClass({
  mixins: [ Reflux.connect(Store), Router.State ],
  getInitialState: function(){
    var id = this.getParams().id;

    return Store.getItem(id);
  },
  render: function () {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <p>{this.state.text}</p>
      </div>
    );
  }
});

module.exports = Item;
