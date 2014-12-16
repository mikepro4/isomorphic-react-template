/* Single actions file - You may split it into more files next time */
var Reflux = require('reflux');
var Actions = require('../actions/app_actions.js');

var Store = Reflux.createStore({
    listenables: Actions,
    onFirstAction: function(value){
      if(value) console.log('got parameter value: '+ value);
      this.trigger();
    },
    onSecondAction: function(){
      
    }
});

module.exports = Store;