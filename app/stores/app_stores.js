/* Single actions file - You may split it into more files next time */
var Reflux = require('reflux');
var AppActions = require('../actions/app_actions.js');

var AppStore = Reflux.createStore({
    listenables: AppActions,
    onFirstAction: function(){
        
    },
    onSecondAction: function(){
      
    }
});

module.exports = AppStore;