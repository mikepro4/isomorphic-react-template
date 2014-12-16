'use strict';

var React         = require('react');
var Router        = require('react-router');
var Reflux        = require('reflux');
var DocumentTitle = require('react-document-title');

var places        = require('../public/data/places');
var NotFound      = require('./NotFound.jsx');
var Store         = require('../stores/app_stores.js');
var Actions       = require('../actions/app_actions.js');

function findPlace(id) {
  for (var i = 0; i < places.length; i++) {
    if (places[i].id === id) return places[i];   
  }
}

var Place = React.createClass({
  mixins: [ Reflux.listenTo(Store, "onStoreChange"), Router.State ],
  onStoreChange: function(){
    this.setState({});
  },
  onClick: function(){
    Actions.firstAction()
  },
  render: function () {
    var place = findPlace(this.getParams().id);
    var date = new Date().toISOString();

    if (!place) return <NotFound />;

    return (
      <DocumentTitle title={ place.name }>
        <div className="place">
          <h2>{ place.name }</h2>
          <img src={ '/images/' + place.id + '.jpg' }/>
          <p onClick={this.onClick}>The date is now: {date}</p>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = Place;
