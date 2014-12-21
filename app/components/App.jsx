"use strict";

var React         = require('react');
var Router        = require('react-router');
var DocumentTitle = require('react-document-title');

var RouteHandler  = Router.RouteHandler;
var Store         = require('../stores/app_stores.js');
var Actions = require('../actions/app_actions.js');
var Link          = Router.Link;

var title = "Some items";

var App = React.createClass({
  mixins: [Router.State],
  getDefaultProps: function () {
    return { items: Store.getItems()};
  },
  onClick: function(id){
    Actions.setActiveItem(id);
  },
  render: function () {
    var self = this;
    var links = this.props.items.map(function (item) {
      return (
        <li key={"item-" + item.id}>
          <Link to="item" params={{ id: item.id }} onClick={self.onClick.bind(null, item.id)} activeClassName="active">{item.id}</Link>
        </li>
      );
    });
    return (
      <DocumentTitle title={ title }>
        <div className="app">
          <h1>{ title }</h1>
          <ul className="master">
            { links }
            <Link to="index"><small>(back to index)</small></Link>
          </ul>
          <div className="detail">
            <RouteHandler />
          </div>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = App;