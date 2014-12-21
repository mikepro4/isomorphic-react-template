'use strict';

var React         = require('react');
var Router        = require('react-router');
var Route         = Router.Route;
var DefaultRoute  = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

/* Components */
var App      = require('./components/App.jsx');
var Index    = require('./components/Index.jsx');
var Item    = require('./components/Item.jsx');
var NotFound = require('./components/NotFound.jsx');

var routes = (
  <Route name="items" path="/" handler={App}>
    <DefaultRoute name="index" handler={Index} />
    <Route name="item" path="item/:id" handler={Item} />
    <NotFoundRoute name="notfound" handler={ NotFound }/>
  </Route>
);

module.exports = routes;
