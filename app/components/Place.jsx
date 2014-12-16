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

// use traditional events to set state on the UI. 
var ExampleInput = React.createClass({
  getInitialState: function(){
    return {
      value: this.props.initialInput
    }
  },
  keyUp: function(e){
    this.setState({
      value: e.target.value
    });
  },
  render: function(){
    return (
      <div>
        <p>You typed: '{this.state.value}'</p>
        <input type="text" onKeyUp={this.keyUp} defaultValue={this.state.value} />
      </div>
    )
  }
});

// use reflux to trigger actions which will in return trigger stores and stores will trigger views for updates. The update is the UI change in click

var Place = React.createClass({
  mixins: [ Reflux.listenTo(Store, "onStoreChange"), Router.State ],
  getInitialState: function(){
    return {
      clicks: 0
    }
  },
  onStoreChange: function(){
    this.setState({
      clicks: this.state.clicks+1
    });
  },
  onClick: function(){
    Actions.firstAction(this.refs.clickCount.getDOMNode().innerText);
  },
  render: function () {
    var place = findPlace(this.getParams().id);

    if (!place) return <NotFound />;

    return (
      <DocumentTitle title={ place.name }>
        <div className="place">
          <h2>{ place.name }</h2>
          <img src={ '/images/' + place.id + '.jpg' }/>
          <p>You clicked <button type="button" onClick={this.onClick}> this </button> <b ref="clickCount">{this.state.clicks}</b> times</p>
          <ExampleInput initialInput='...' />
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = Place;
