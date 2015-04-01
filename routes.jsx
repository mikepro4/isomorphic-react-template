'use strict';

var React         = require('react');
var Router        = require('react-router');
var Route         = Router.Route;
var DefaultRoute  = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

/* Components */
var App      = require('./components/App.jsx');
var Index    = require('./components/Index.jsx');
var Place    = require('./components/Place.jsx');
var NotFound = require('./components/NotFound.jsx');
var Exchange = require('./components/Exchange.jsx');
var Enterprise = require('./components/Enterprise.jsx');
var Splitter = require('./components/Splitter.jsx');

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="index" path="/" handler={Splitter} />
    <Route name="exchange" path="exchange/" handler={Exchange} />
    <Route name="enterprise" path="enterprise/" handler={Enterprise} />
    <Route name="splitter" path="splitter/" handler={Splitter} />
    <NotFoundRoute name="notfound" handler={ NotFound }/>
  </Route>
);

module.exports = routes;
